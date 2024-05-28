import Avatar from '@mui/material/Avatar';
import { fetchData } from '@app/api/apiService';

import { 
  DataGrid, 
  GridColDef,
  GridLogicOperator,
  GridFilterModel,
  GridRenderCellParams 
} from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { useSearchParams , useNavigate } from 'react-router-dom';
import {
  playerIdColumn,
  playerPositionGroupColumn
} from '@components/search/columns/playerColumns';
import { Player } from '@interfaces/models/player';
import PlayerSearchToolbar from '@components/search/playerSearchToolbar';
import Chip from '@mui/material/Chip';

interface PageState {
  skip: number;
  take: number;
};

interface Players {
  data: Player[],
  total: number
}

const initialDataState: PageState = { skip: 0, take: 25 };
const PlayerSearch: React.FC = () => {
  let [key, setKey] = useState('');
  let [positionGroup, setPositionGroup] = React.useState('QB');
  let [careerStatus, setCareerStatus] = React.useState(true);
  let [searchParams, setSearchParams] = useSearchParams();

  key = searchParams.get('key') ?? '';
  positionGroup = searchParams.get('positionGroup') ?? 'QB';
  careerStatus = (searchParams.get('status') === "0") ? false : true;

  const updateURLParams = () => {
    const params = new URLSearchParams();
    if (key && key !== '')
      params.set('key', key);
    
    if (positionGroup)
      params.set('positionGroup', positionGroup);
    
    params.set('status', (careerStatus) ? '1' : '0');
    setSearchParams(params);
  };

  const [filterModel] = React.useState<GridFilterModel>({
    items: [],
    logicOperator: GridLogicOperator.And,
    quickFilterLogicOperator: GridLogicOperator.And,
    quickFilterValues: key.split(',')
  });
  const [page] = React.useState<PageState>(initialDataState);
  const [players, setPlayers] = useState<Players | null>(null);
  const [paginationModel] = React.useState({
    pageSize: 25,
    page: 0,
  });

  const handleStatusChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setCareerStatus(event.target.checked);
    careerStatus = event.target.checked;
    updateURLParams();
    await fetchDataAndSetState();
  };

  const handlePositionChange = async (
    event: React.MouseEvent<HTMLElement>,
    newPositionGroup: string,
  ) => {
    setPositionGroup(newPositionGroup);
    positionGroup = newPositionGroup;
    updateURLParams();
    await fetchDataAndSetState();
  };

  const navigate = useNavigate();  
  const fetchDataAndSetState = async () => {
    try {
      let filterOptions = `offset=${page.skip}&limit=${page.take}`;
      
      if(positionGroup === 'SPEC')
        filterOptions += `&position=K`;
      else
        filterOptions += `&position_group=${positionGroup}`;

      const nameFilter = filterModel.quickFilterValues?.join(' ') ?? '';
      if (nameFilter.length)
        filterOptions += `&name=${nameFilter}`;

      if (careerStatus)
        filterOptions += `&status=Active`;
      else
        filterOptions += `&status=All`;

      const responseData = await fetchData(`/players?${filterOptions}`);
      setPlayers(responseData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchDataAndSetState();
  }, []);

  const onPageChange = async (event: any) => {
    page.skip = event.page * event.pageSize;
    page.take = event.pageSize === 0 ? 25 : event.pageSize;    
    await fetchDataAndSetState();
  };

  const onFilterChange = async (event: GridFilterModel) => {
    const { items, logicOperator, quickFilterLogicOperator, quickFilterValues } = event
    filterModel.items = items;
    filterModel.logicOperator = logicOperator;
    filterModel.quickFilterLogicOperator = quickFilterLogicOperator;
    filterModel.quickFilterValues = quickFilterValues;
    key = quickFilterValues?.join(',') ?? '';
    updateURLParams();
    await fetchDataAndSetState();
  };

  const toolbar = () => {
    return (
      <PlayerSearchToolbar
        status={careerStatus}
        statusCallback={handleStatusChange}
        position={positionGroup}
        positionCallback={handlePositionChange}
      />
    );
  }

  const columns: GridColDef[] = [
    { 
      field: 'full_name', 
      headerName: 'Player', 
      description: 'Player Name', 
      width: 250, 
      filterable: false,
      renderCell: (params: GridRenderCellParams<any, {id: number, name: string, url: string}>) => {
        return (
          <Chip
            avatar={<Avatar alt={params.value?.name} src={params.value?.url}/>}
            label={params.value?.name}
            sx={{ background:'transparent', width:'100%', justifyContent:'left' }}
            onClick={() => {
              navigate(`/player/${params.id}`)
            }}
          />
        );
      },
      valueGetter: (_value, row: Player) => {
        return {id: row.id, name: row.full_name, url: row.headshot_url};
      },
    },
    { 
      field: 'team.logo_url', 
      headerName: 'Team', 
      description: 'Team Logo', 
      width: 250, 
      filterable: false,
      renderCell: (params: GridRenderCellParams<any, {name: string, logo: string}>) => {
        return (
          <Chip
            avatar={<Avatar alt={params.value?.name} src={params.value?.logo}>{params.value?.name}</Avatar>}
            label={params.value?.name}
            sx={{ background:'transparent', width:'100%', justifyContent:'left' }}
          />
        );
      },
      valueGetter: (_value, row: Player) => {
        return {name: row.team?.full_name, logo: row.team?.logo_url};
      },
    },
    playerPositionGroupColumn(),
    playerIdColumn()
  ];
  
  return (
    <div >
        <div>
          <DataGrid
            initialState={{
              columns: {
                columnVisibilityModel: {
                  id: false,
                },
              },
              pagination: {
                rowCount: players?.total ?? 0,
                paginationModel: { pageSize: 25, page: 0 }
              },
              filter: {
                filterModel: {
                  items: [],
                  quickFilterValues: key.split(',')
                }
              }
            }}
            autosizeOnMount={true}
            columns={columns}
            density="compact"
            disableColumnMenu={true}
            disableColumnSorting            
            filterMode="server"
            onFilterModelChange={onFilterChange}
            onPaginationModelChange={onPageChange}
            pageSizeOptions={[10, 25, 50]}
            pagination={true}
            paginationMode="server"
            paginationModel={paginationModel}
            slots={{ toolbar }}
            rows={players?.data ?? []}
            rowCount={players?.total ?? 0}
          />
        </div>
    </div>
  );
}

export default PlayerSearch;