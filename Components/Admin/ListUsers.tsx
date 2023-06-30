import { getAllUser } from "@/services/userService";
import NavBar from "../Nav Bar/NavBar"
import { SignupValueType } from '../../Types/types';
import { useEffect, useState } from "react";

const ListUsers = () => {

    const [users, setUsers] = useState<SignupValueType[]>();

    // let users: SignupValueType[];

    useEffect(() => {
        getAllUser().then((res) => {
            setUsers(res);
        }).catch((e) => {
            console.log(e);
        })
    }, [])

    console.log(users);

    const table = (val: SignupValueType, index: number) => {
        return (
            <tr key={index}>
                <td scope="row">{index + 1}</td>
                <td>{val.email}</td>
                <td>{val.userName}</td>
            </tr>
        );
    }

    return (<div>
        <NavBar />
        <div className="container p-5">
            <div className="mx-4">
                <h1 className="text-center">All Register Users in this Application</h1>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Email</th>
                        <th scope="col">User Name</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map(table)}
                </tbody>
            </table>
        </div>
    </div>)
}

export default ListUsers;