import React from "react";

const listOfLink = () => {
    return(
        <div className="container mx-auto my-8">
            <div className = "flex shadow border-b">
                <table className = "min-w-full">
                    <thead className = "bg-gray-50">
                        <tr>
                            <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-3"> Link </th>
                            <th>  </th>
                            <th>  </th>
                            <th className="text-right "> <button> Edit</button> </th>
                            <th className="text-right  "> Delete </th>
                            <th className="text-right px-3"> Show </th>

                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        <tr>
                            <td className="text-left px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-500">
                                    UserName
                                </div>
                            </td>
                            <td className="text-left px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-500">
                                    Password
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default listOfLink