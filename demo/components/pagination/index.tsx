
import * as React from 'react';
import { Text } from '@/design/components/text';
import { Pager } from '@/design/components/pager';
import { DesignIconsDummyOutlineIcon } from '@/design/icons/dummy/outline';
import { useState } from 'react';


export default function Pagination() {
  const [page, setPage] =useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>();


  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <div>
        <p style={{ color: '#000' }}>sdfjdgdfg</p>
        <Pager
          rowsPerPageOptions={[20, 30, 40, 50]}
          // count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          // onPageChange={handleChangePage}
          // onRowsPerPageChange={handleChangeRowsPerPage}
          visibeFirstButton
          visibleLastButton
        />
        <div >
          <div >
            {/* <Text variant='body3' color={'var(--grey-30)'}>
              {page == 0 ? 1 : (page * rowsPerPage) + 1}-{((page + 1) * rowsPerPage) < [].length ? (page + 1) * rowsPerPage : [].length} of {[].length}
            </Text> */}
          </div>
          <div>
            <Pager
              rowsPerPageOptions={[20, 30, 40]}
              count={[].length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              visibeFirstButton
              visibleLastButton
              doubleArrowLeftIcon={<DesignIconsDummyOutlineIcon />}
              doubleArrowRightIcon={<DesignIconsDummyOutlineIcon />}
              arrowLeftIcon={<DesignIconsDummyOutlineIcon />}
              arrowRightIcon={<DesignIconsDummyOutlineIcon />}
            />
          </div>
        </div>
      </div>
    </>
  );
}
