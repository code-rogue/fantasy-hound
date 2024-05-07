import '@css/app.css';

import Avatar from '@mui/material/Avatar';
import { fetchData } from '@app/api/apiService';

import { 
  DataGridPremium, 
  GridColDef, 
  GridToolbarQuickFilter,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarColumnsButton,
  GridLogicOperator,
  GridFilterModel,
  GridRenderCellParams 
} from '@mui/x-data-grid-premium';
import Link from '@mui/material/Link';
import { NFL_TEAMS, NFL_TEAM_NAMES } from '@interfaces/enums/teams.enums';
import { NFL_POSITION_GROUPS } from '@interfaces/enums/position_groups.enums';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface PageState {
  skip: number;
  take: number;
};

interface Players {
  data: any[],
  total: number
}

const initialDataState: PageState = { skip: 0, take: 25 };

function Toolbar() {
  return (
    <div>
      <GridToolbarQuickFilter />
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarExport />
    </div>
  );
}

const SearchPage: React.FC = () => {
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
  
  const navigate = useNavigate();  
  const fetchDataAndSetState = async () => {
    try {
      let filterOptions = `offset=${page.skip}&limit=${page.take}&status=Active`;

      const nameFilter = filterModel.quickFilterValues?.join(' ') ?? '';
      if (nameFilter.length)
        filterOptions += `&name=${nameFilter}`;

      filterModel.items.forEach( filter => {
        filterOptions += `&${filter.field}=${filter.value}`;
      })

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

  const columns: GridColDef[] = [
    { 
      field: 'headshot_url', 
      headerName: '', 
      description: 'Player Headshot', 
      width: 70, 
      filterable: false,
      renderCell: (params: GridRenderCellParams<any, string>) => {
        return (
          <Avatar alt="Image" src={params.value} sx={{ width: 50, height: 50 }} />
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
    { 
      field: 'team', 
      description: 'Team Name', 
      getOptionValue: (value: any) => value.code,
      getOptionLabel: (value: any) => value.name,
      headerName: 'Team', 
      type: 'singleSelect', 
      valueOptions: [
        {id: 1, code: NFL_TEAMS.ARI, name: NFL_TEAM_NAMES.ARI },
        {id: 2, code: NFL_TEAMS.ATL, name: NFL_TEAM_NAMES.ATL },
        {id: 3, code: NFL_TEAMS.BAL, name: NFL_TEAM_NAMES.BAL },
        {id: 4, code: NFL_TEAMS.BUF, name: NFL_TEAM_NAMES.BUF },
        {id: 5, code: NFL_TEAMS.CAR, name: NFL_TEAM_NAMES.CAR },
        {id: 6, code: NFL_TEAMS.CHI, name: NFL_TEAM_NAMES.CHI },
        {id: 7, code: NFL_TEAMS.CIN, name: NFL_TEAM_NAMES.CIN },
        {id: 8, code: NFL_TEAMS.CLE, name: NFL_TEAM_NAMES.CLE },
        {id: 9, code: NFL_TEAMS.DAL, name: NFL_TEAM_NAMES.DAL },
        {id: 10, code: NFL_TEAMS.DEN, name: NFL_TEAM_NAMES.DEN },
        {id: 11, code: NFL_TEAMS.DET, name: NFL_TEAM_NAMES.DET },
        {id: 12, code: NFL_TEAMS.GB, name: NFL_TEAM_NAMES.GB },
        {id: 13, code: NFL_TEAMS.HOU, name: NFL_TEAM_NAMES.HOU },
        {id: 14, code: NFL_TEAMS.IND, name: NFL_TEAM_NAMES.IND },
        {id: 15, code: NFL_TEAMS.JAX, name: NFL_TEAM_NAMES.JAX },
        {id: 16, code: NFL_TEAMS.KC, name: NFL_TEAM_NAMES.KC },
        {id: 17, code: NFL_TEAMS.LA, name: NFL_TEAM_NAMES.LA },
        {id: 18, code: NFL_TEAMS.LAC, name: NFL_TEAM_NAMES.LAC },
        {id: 19, code: NFL_TEAMS.LV, name: NFL_TEAM_NAMES.LV },
        {id: 20, code: NFL_TEAMS.MIA, name: NFL_TEAM_NAMES.MIA },
        {id: 21, code: NFL_TEAMS.MIN, name: NFL_TEAM_NAMES.MIN },
        {id: 22, code: NFL_TEAMS.NE, name: NFL_TEAM_NAMES.NE },
        {id: 23, code: NFL_TEAMS.NO, name: NFL_TEAM_NAMES.NO },
        {id: 24, code: NFL_TEAMS.NYG, name: NFL_TEAM_NAMES.NYG },
        {id: 25, code: NFL_TEAMS.NYJ, name: NFL_TEAM_NAMES.NYJ },
        {id: 26, code: NFL_TEAMS.PHI, name: NFL_TEAM_NAMES.PHI },
        {id: 27, code: NFL_TEAMS.PIT, name: NFL_TEAM_NAMES.PIT },
        {id: 28, code: NFL_TEAMS.SEA, name: NFL_TEAM_NAMES.SEA },
        {id: 29, code: NFL_TEAMS.SF, name: NFL_TEAM_NAMES.SF },
        {id: 30, code: NFL_TEAMS.TB, name: NFL_TEAM_NAMES.TB },
        {id: 31, code: NFL_TEAMS.TEN, name: NFL_TEAM_NAMES.TEN },
        {id: 32, code: NFL_TEAMS.WAS, name: NFL_TEAM_NAMES.WAS },
      ],
      valueFormatter : (_value, row) => row.team_display_name,
      width: 300,
    },
    { 
      field: 'position_group', 
      headerName: 'Position', 
      description: 'Player Position', 
      type: 'singleSelect',
      valueOptions: [
        NFL_POSITION_GROUPS.QB,
        NFL_POSITION_GROUPS.RB,
        NFL_POSITION_GROUPS.TE,
        NFL_POSITION_GROUPS.WR,
        NFL_POSITION_GROUPS.DB,
        NFL_POSITION_GROUPS.DL,
        NFL_POSITION_GROUPS.LB,
        NFL_POSITION_GROUPS.OL,
        NFL_POSITION_GROUPS.SPEC,
      ],
      width: 200,
    },
    { 
      field: 'id', 
      headerName: 'Player Id', 
      description: 'Player Identifier', 
      filterable: false,
    },
  ];
  
  return (
    <div >
        <div>
          <DataGridPremium 
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
            autoPageSize={true}
            autosizeOnMount={true}
            columns={columns}
            disableColumnMenu={true}
            disableColumnSorting            
            filterMode="server"
            onFilterModelChange={onFilterChange}
            onPaginationModelChange={onPageChange}
            pageSizeOptions={[10, 25, 50]}
            pagination={true}
            paginationMode="server"
            paginationModel={paginationModel}
            slots={{
              toolbar: Toolbar,
            }}
            rows={players?.data ?? []}
            rowCount={players?.total ?? 0}
          />
        </div>
    </div>
  );
}

export default SearchPage;