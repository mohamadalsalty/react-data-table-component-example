export default [
    {
        name: 'Title',
        selector: (row: { title: string; }) => row.title,
        sortable: true,
    },
    {
        name: 'Director',
        selector: (row: { director: string; }) => row.director,
        sortable: true,
    },
    {
        name: 'Year',
        selector: (row: { year: string | number; }) => row.year,
        sortable: true,
    }
];
