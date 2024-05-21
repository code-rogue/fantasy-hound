import Avatar from '@mui/material/Avatar';
import { fetchData } from '@app/api/apiService';

import { 
  DataGrid, 
  GridColDef,
  GridLogicOperator,
  GridFilterModel,
  GridRenderCellParams 
} from '@mui/x-data-grid';
import Link from '@mui/material/Link';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  playerIdColumn,
  playerPositionGroupColumn,
  playerTeamColumn
} from '@components/search/columns/playerColumns';
import { Player } from '@interfaces/models/player';
import PlayerSearchToolbar from '@components/search/playerSearchToolbar';

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
  const [filterModel] = React.useState<GridFilterModel>({
    items: [],
    logicOperator: GridLogicOperator.And,
    quickFilterLogicOperator: GridLogicOperator.And,
    quickFilterValues: []
  });
  const [page] = React.useState<PageState>(initialDataState);
  const [players, setPlayers] = useState<Players | null>(null);
  const [paginationModel] = React.useState({
    pageSize: 25,
    page: 0,
  });
  let [positionGroup, setPositionGroup] = React.useState('QB');
  let [careerStatus, setCareerStatus] = React.useState(true);

  const handleStatusChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setCareerStatus(event.target.checked);
    careerStatus = event.target.checked;
    await fetchDataAndSetState();
  };

  const handlePositionChange = async (
    event: React.MouseEvent<HTMLElement>,
    newPositionGroup: string,
  ) => {
    setPositionGroup(newPositionGroup);
    positionGroup = newPositionGroup;
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
      field: 'headshot_url', 
      headerName: '', 
      description: 'Player Headshot', 
      width: 70, 
      filterable: false,
      renderCell: (params: GridRenderCellParams<any, string>) => {
        return (
          <Avatar alt="Image" src={params.value} sx={{ width: 30, height: 40 }} />
        );
      },
    },
    { 
      field: 'full_name', 
      headerName: 'Name', 
      description: 'Player Name', 
      width: 300, 
      hideable: false, 
      filterable: false,
      renderCell: (params: GridRenderCellParams<any, string>) => {
        return (
          <Link
            component="button"
            variant="body2"
            onClick={() => {
              navigate(`/player/${params.id}`);
            }}
          >
            {params.value}
          </Link>
        );
      },
    },
    playerTeamColumn(),
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