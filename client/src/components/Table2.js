import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { DateFormat, shortUppercaseId } from "../shared/Notification/Empty";
const Head = "text-xs text-left text-main font-semibold px-6 py-2 uppercase";
const Text = "txt-sm text-left px-5 py-3 leading-6 whitespace-nowrap ";
const Rows = ({
  data,
  i,
  users,
  OnEditFunction,
  ondeleteFunction,
  packagePremium,
}) => {
  return (
    <tr key={i}>
      {users ? (
        <>
          <td className={`${Text}`}>
            <div
              className=" w-12 p-1 bg-dry border border-border
         h-12 rounded overflow-hidden"
            >
              <img
                className="h-full w-full  object-cover"
                src={`${data?.image ? data.image : "/images/user.png"}`}
                alt={data?.name}
              />
            </div>
          </td>
          <td className={`${Text} font-bold`}>
            {data._id ? shortUppercaseId(data?._id) : `2R75T8`}
          </td>
          <td className={`${Text}`}>{DateFormat(data?.createdAt)}</td>
          <td className={`${Text}`}>{data?.fullName}</td>
          <td className={`${Text}`}>{data?.email}</td>
          <td className={`${Text}`}>{data?.isAdmin ? "Admin" : "User"}</td>
          <td className={`${Text} float-right flex-rows gap-2`}>
            {!data?.isAdmin && (
              <button
                onClick={() => ondeleteFunction(data?._id)}
                className="bg-subMain text-white rounded flex-colo w-6 h-7"
              >
                <MdDelete />
              </button>
            )}
          </td>
        </>
      ) : (
        <>
          {packagePremium ? (
            <>
              <td className={`${Text} font-bold`}>
                {data._id ? shortUppercaseId(data._id) : `2R75T8`}
              </td>
              <td className={`${Text}`}>{DateFormat(data?.createdAt)}</td>
              <td className={`${Text}`}>{data?.name}</td>
              <td className={`${Text}`}>{data?.price}</td>
              <td className={`${Text}`}>{data?.day} Days</td>
              <td className={`${Text}`}>{data?.discount}%</td>

              <td className={`${Text} float-right flex-rows gap-2`}>
                <button
                  onClick={() => OnEditFunction(data)}
                  className="border border-border bg-dry flex-rows gap-2 text-border rounded py-1 px-2"
                >
                  Edit <FaEdit className="text-green-500" />
                </button>
                <button
                  onClick={() => ondeleteFunction(data?._id)}
                  className="bg-subMain text-white rounded flex-colo w-6 h-7"
                >
                  <MdDelete />
                </button>
              </td>
            </>
          ) : (
            <>
              <td className={`${Text} font-bold`}>
                {data._id ? shortUppercaseId(data._id) : `2R75T8`}
              </td>
              <td className={`${Text}`}>{DateFormat(data?.createdAt)}</td>
              <td className={`${Text}`}>{data?.title}</td>
              <td className={`${Text} float-right flex-rows gap-2`}>
                <button
                  onClick={() => OnEditFunction(data)}
                  className="border border-border bg-dry flex-rows gap-2 text-border rounded py-1 px-2"
                >
                  Edit <FaEdit className="text-green-500" />
                </button>
                <button
                  onClick={() => ondeleteFunction(data?._id)}
                  className="bg-subMain text-white rounded flex-colo w-6 h-7"
                >
                  <MdDelete />
                </button>
              </td>
            </>
          )}
        </>
      )}
    </tr>
  );
};
function Table2({
  data,
  users,
  OnEditFunction,
  ondeleteFunction,
  packagePremium,
}) {
  return (
    <div className="overflow-x-scroll md:overflow-hidden relative w-full">
      <table className="w-full table-auto border border-border divide-y divide-border  ">
        <thead>
          <tr className="bg-dryGray">
            {users ? (
              <>
                <th scope="col" className={`${Head}`}>
                  Image
                </th>
                <th scope="col" className={`${Head}`}>
                  ID
                </th>
                <th scope="col" className={`${Head}`}>
                  createdAt
                </th>
                <th scope="col" className={`${Head}`}>
                  FullName
                </th>
                <th scope="col" className={`${Head}`}>
                  Email
                </th>
                <th scope="col" className={`${Head}`}>
                  Role
                </th>
              </>
            ) : (
              <>
                {packagePremium ? (
                  <>
                    <th scope="col" className={`${Head}`}>
                      ID
                    </th>
                    <th scope="col" className={`${Head}`}>
                      createdAt
                    </th>
                    <th scope="col" className={`${Head}`}>
                      Name
                    </th>
                    <th scope="col" className={`${Head}`}>
                      Price
                    </th>
                    <th scope="col" className={`${Head}`}>
                      Exp
                    </th>
                    <th scope="col" className={`${Head}`}>
                      Cost
                    </th>
                  </>
                ) : (
                  <>
                    <th scope="col" className={`${Head}`}>
                      _id
                    </th>
                    <th scope="col" className={`${Head}`}>
                      Date
                    </th>
                    <th scope="col" className={`${Head}`}>
                      Title
                    </th>
                  </>
                )}
              </>
            )}
            <th scope="col" className={`${Head} text-end`}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-main divide-y divide-gray-800">
          {data.map((data, i) => (
            <Rows
              key={i}
              data={data}
              users={users}
              OnEditFunction={OnEditFunction}
              ondeleteFunction={ondeleteFunction}
              packagePremium={packagePremium}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table2;
