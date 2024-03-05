import { createContext, useContext } from 'react';

const Footer = (props) => (
  <footer className="flex justify-center bg-gray-50 py-4">
    {props.children}
  </footer>
);

const TableContext = createContext();

function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <div className="max-h-[590px] w-full overflow-y-auto rounded-lg border border-gray-200 bg-gray-50">
        <div className={`grid ${columns} h-full overflow-hidden`}>
          {children}
        </div>
      </div>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <div
      className={`grid ${columns} col-span-full  border-b border-gray-100 bg-gray-100 px-6 py-4 text-2xl font-semibold text-gray-600`}
    >
      {children}
    </div>
  );
}

function Row({ children }) {
  const { columns } = useContext(TableContext);
  return <div className={`col-span-full grid p-4 ${columns}`}>{children}</div>;
}

function Body({ data, render }) {
  if (!data?.length)
    return (
      <p className="col-span-full my-6 text-center text-lg font-medium">
        データがありません
      </p>
    );

  return (
    <div className="col-span-full h-full w-full divide-y overflow-y-auto">
      {data.map(render)}
    </div>
  );
}

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Footer = Footer;

export default Table;
