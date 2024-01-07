import Image from "next/legacy/image";
import { GoDotFill } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";

/**@todo dont forget to remove any type */

export const PaymentTableColumns = [
  {
    id: "product_name",
    Header: "Item Type",
    accessor: "product_name",
    Cell: ({ row }) => (
      <div className="payment_table_column_product_bg">
        <div className="payment_table_column_product_img_bg">
          <Image
            src={row.original.user_profile}
            alt="user"
            className="payment_table_column_product_img"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <p className="payment_table_column_product">{row.original.product_name}</p>
      </div>
    ),
  },
  { Header: "Price", accessor: "price" },
  { Header: "Transaction No", accessor: "transaction_number" },
  {
    Header: "Time",
    accessor: "time",
    Cell: ({ row }) => <p className="payment_table_column_time">{row.original.time}</p>,
  },

  {
    Header: "",
    accessor: "status",
    Cell: ({ row }) => (
      <div>
        {row.values.status === "Pending" && (
          <div className="payment_table_column_pending payment_table_column_detail_button">
            <GoDotFill className="payment_table_column_dot" />
            <p>Pending</p>
          </div>
        )}
        {row.values.status === "Reconcilled" && (
          <div className="payment_table_column_reconcilled payment_table_column_detail_button">
            <GoDotFill className="payment_table_column_dot " />
            <p>Reconcilled</p>
          </div>
        )}
        {row.values.status === "Un-reconcilled" && (
          <div className="payment_table_column_unreconcilled payment_table_column_detail_button">
            <GoDotFill className="payment_table_column_dot " />
            <p>Un-Reconcilled</p>
          </div>
        )}
      </div>
    ),
  },
  {
    id: "view",
    Header: " ",
    accessor: (d: any) => (
      <div className="payment_table_column_arrow">
        <IoIosArrowDown />
      </div>
    ),
  },
];
