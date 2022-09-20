import React, { useState } from 'react';
import { usePrints } from './hooks/usePrints';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';

import { styled } from '@mui/material/styles';

const CustomizedPagination = styled(Pagination)`
  & .MuiPagination-ul {
    justify-content: center
  }
`;

export const App = () => {
  // const queryClient = useQueryClient();
  const [currentPage, setCurrentPage] = useState(1);
  const { status, data, error, isFetching, isPreviousData } = usePrints(currentPage);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setCurrentPage(value);
  };

  return (
    <Container maxWidth="lg" sx={{marginBottom: 20}}>
      <h1>Welcome to Harvard Print Gallery!</h1>
      <div>
        {status === "loading" ? (
          "Loading..."
        ) : status === "error" ? (
          <span>Error: {error.message}</span>
        ) : (
          <>
            <ImageList variant="masonry" cols={3} gap={8}>
              {data.prints.records.map((print) => (
                <ImageListItem key={print.id}>
                  <img
                    src={`${print.images[0]?.baseimageurl || `assets/placeholder612x612.jpg`}?w=248&fit=crop&auto=format`}
                    srcSet={`${print.images[0]?.baseimageurl}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={print.title}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={print.title}
                    subtitle={<span>{print.dated}</span>}
                    position="top"
                  />
                </ImageListItem>
              ))}
            </ImageList>
            <Box>
              <CustomizedPagination
                count={data.prints.info.pages}
                page={currentPage}
                onChange={handlePageChange}
                disabled={isPreviousData} />
            </Box>
            <div>{isFetching ? "Background Updating..." : " "}</div>
          </>
        )}
      </div>
    </Container>
  );
};

export default App;
