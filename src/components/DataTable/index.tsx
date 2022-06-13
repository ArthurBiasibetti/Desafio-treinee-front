/* eslint-disable @typescript-eslint/no-explicit-any */
import { formatCPF } from '@brazilian-utils/brazilian-utils';
import React, { useMemo } from 'react';
import { Table } from 'react-bootstrap';
import { HiTrash, HiPencil } from 'react-icons/hi';
import { IUser } from '../../interfaces';
import formatDate from '../../utils/formatDate';
import './styles.scss';

export interface IColumn {
  isCenter?: boolean;
  type?: 'date' | 'cpf';
  key: string;
  label: string;
  hidden?: boolean;
}

export interface DataTableProps {
  data: IUser[];
  hasActions: boolean;
  columns: IColumn[];
  emptyMessage?: string;
  editAction?: (id: string) => void;
  deleteAction?: (id: string) => void;
  size?: string;
}

const handleFormater = (row: IUser, key: string, format?: 'date' | 'cpf'): string => {
  let value: string = (row as any)[key];
  if (format === 'date') {
    value = formatDate((row as any)[key]);
  } else if (format === 'cpf') {
    value = formatCPF((row as any)[key]);
  }

  return value;
};

const DataTable = ({
  data = [],
  hasActions = false,
  columns = [],
  emptyMessage = 'Nenhum item encontrado',
  editAction,
  deleteAction,
  size = 'md',
}: DataTableProps): React.ReactElement => {
  const headers = useMemo(() => {
    const ths = columns.map((item) => (
      <th className={item.isCenter ? 'text-center' : ''} key={item.label}>
        {item.label}
      </th>
    ));

    if (hasActions)
      ths.push(
        <th key="table_action" className="table__actions">
          Ações
        </th>
      );

    return <tr>{ths}</tr>;
  }, [columns, hasActions]);

  const rows = useMemo(() => {
    if (!data.length) {
      return (
        <tr>
          <td key="empty_message" colSpan={10}>
            {emptyMessage}
          </td>
        </tr>
      );
    }

    const trs = data.map((row) => {
      const tds = columns.map(({ isCenter, key, type }) => {
        const classCenter = isCenter ? 'text-center' : '';
        const value = handleFormater(row, key, type);
        return (
          <td key={`${Math.random() * data.length}`} className={classCenter}>
            {value}
          </td>
        );
      });

      if (hasActions) {
        tds.push(
          <td key={`${row.id}_action`} className="table__actions">
            <HiPencil
              size={17}
              className="table__icon-update table__icon-svg"
              onClick={() => editAction && editAction(row.id)}
            />
            <HiTrash
              size={17}
              className="table__icon-trash table__icon-svg"
              onClick={() => deleteAction && deleteAction(row.id)}
            />
          </td>
        );
      }
      return <tr key={row.id}>{tds}</tr>;
    });

    return trs;
  }, [data, columns, emptyMessage, hasActions, editAction, deleteAction]);

  return (
    <>
      <Table responsive bordered hover size={size} className="table">
        <thead>{headers}</thead>
        <tbody>{rows}</tbody>
      </Table>
    </>
  );
};

export default DataTable;
