import { Dialog } from "@/design/components/dialog";
import { IconButton } from "@/design/components/button/icon";
import { Table } from "@/design/components/table";
import { ColumnProps } from "@/design/components/table";
import { Text } from "@/design/components/text";
import { Stack } from "@mui/material";
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Chip } from "@/design/components/chip";
import { DesignIconsEditOutlineIcon } from "@/design/icons/edit/outline";
import { DesignIconsDeleteOutlineIcon } from "@/design/icons/delete/outline";
import { DesignIconsEditIOutlineIcon } from "@/design/icons/edit-i/outline";

interface Rows {
    id: string;
    serialNo: number;
    name: string;
    email: string;

}

export function TableComponent() {
    const [rows, setRows] = React.useState<Rows[]>([]);
    const [open, setOpen] = React.useState(false);
    const [searchBar, setSearchBar] = React.useState<string>('');
    const navigate = useNavigate();

    const headCells: ColumnProps[] = [
        {
            field: 'id',
            header: 'Id',
            hidden: true,
        },
        {
            field: 'serialNo',
            header: 'S.No',
            minWidth: 66,
            width: 80,
        },

        {
            field: 'name',
            header: 'Name',
            minWidth: 220,
        },

        {
            field: 'email',
            header: 'Email',
            minWidth: 220,
        },

        {
            field: '',
            header: 'Action',
            render: ({ id }: Rows) =>
                <>
                    <Stack direction={'row'} gap={1.5}>
                        <IconButton>
                            <DesignIconsEditIOutlineIcon name='edit'/>
                        </IconButton>
                        <IconButton>
                            <DesignIconsDeleteOutlineIcon name='delete'/>
                        </IconButton>

                    </Stack>
                </>
        },
    ];

    const fetchData = () => {

        const list: Rows[] = [
            {
                id: "string",
                serialNo: 1,
                name: 'Arjun Selvan',
                email: 'arjun@nsightglobal.com'
            },
            {
                id: "string",
                serialNo: 2,
                name: 'New',
                email: 'arjun@nsightglobal.com'
            },
            {
                id: "string",
                serialNo: 3,
                name: 'New',
                email: 'arjun@nsightglobal.com'
            },
            {
                id: "string",
                serialNo: 4,
                name: 'New',
                email: 'arjun@nsightglobal.com'
            },
            {
                id: "string",
                serialNo: 5,
                name: 'New',
                email: 'arjun@nsightglobal.com'
            },
            {
                id: "string",
                serialNo: 6,
                name: 'New',
                email: 'arjun@nsightglobal.com'
            },
            {
                id: "string",
                serialNo: 7,
                name: 'New',
                email: 'arjun@nsightglobal.com'
            },
            {
                id: "string",
                serialNo: 5,
                name: 'New',
                email: 'arjun@nsightglobal.com'
            },
            {
                id: "string",
                serialNo: 6,
                name: 'New',
                email: 'arjun@nsightglobal.com'
            },
            {
                id: "string",
                serialNo: 7,
                name: 'New',
                email: 'arjun@nsightglobal.com'
            },
            {
                id: "string",
                serialNo: 225,
                name: 'New',
                email: 'arjun@nsightglobal.com'
            },
            {
                id: "string",
                serialNo: 22,
                name: 'New',
                email: 'arjun@nsightglobal.com'
            },
            {
                id: "string",
                serialNo: 33,
                name: 'New',
                email: 'arjun@nsightglobal.com'
            },


        ]
        setRows(list);
    }

    React.useEffect(() => {
        const run = () => {
            fetchData();
        }
        run()
    }, []);

    const onClickDelete = async (id: string) => {

    };

    const onConfirmDelete = async () => {

    }

    return (
        <div style={{ margin: 50 }}>
            <Table
                rows={rows}
                columns={headCells}
                search={searchBar}
                isPageInfo
                showRowsPerPage
            />
            <Dialog
                open={open}
                close={() => setOpen(false)}
                title="Are you sure?"
            >
                <Text variant='body2'>
                    You will not be able to recover the details.
                </Text>
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                    <IconButton onClick={onConfirmDelete}>Yes</IconButton>
                    <IconButton onClick={() => setOpen(false)}>No</IconButton>
                </div>
            </Dialog>
        </div>
    );
}

