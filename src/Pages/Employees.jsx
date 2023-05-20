import avatar from "../data/avatar.jpg";
const Employees = () => {
  return (
    <main className="table">
      <section className="table-header">
        <h3>Employees</h3>
      </section>{" "}
      <section className="table-body">
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>customer</th>
              <th>full name</th>
              <th>status</th>
              <th>email</th>
              <th>phone</th>
              <th>position</th>
              <th colSpan="2">action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <img src={avatar} />
              </td>
              <td>umwizerwa gedeon</td>
              <td className="status delivered">deliverde</td>
              <td>umwizerwa@gmail.com</td>
              <td>+250078078965</td>
              <td>web developer</td>
              <td>
                <button className="edit"> edit</button>
                <button className="delete"> delete</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <img src={avatar} />
              </td>
              <td>sabimana</td>
              <td>
                <p className="status canceled"></p>completed
              </td>
              <td>sabimana@gmail.com</td>
              <td>+250078078965</td>
              <td>web developer</td>
              <td>
                <button className="edit"> edit</button>
                <button className="delete"> delete</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <img src={avatar} />
              </td>
              <td>zambo</td>
              <td>
                <p className="status delivered">delivered</p>
              </td>
              <td>mon@gmail.com</td>
              <td>+250078078965</td>
              <td>software</td>
              <td>
                <button className="edit"> edit</button>
                <button className="delete"> delete</button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <img src={avatar} />
              </td>
              <td>enzo frenandes</td>
              <td>
                <p className="status canceled"> canceled</p>
              </td>
              <td>molol@mail.sn</td>
              <td>+250078078965</td>
              <td> mobile </td>
              <td>
                <button className="edit"> edit</button>
                <button className="delete"> delete</button>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                <img src={avatar} />
              </td>
              <td>merry eric</td>
              <td>
                <p className="status delivered">delivered</p>
              </td>
              <td>umwizerwa@gmail.com</td>
              <td>+250078078965</td>
              <td>web developer</td>
              <td>
                <button className="edit"> edit</button>
                <button className="delete"> delete</button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <img src={avatar} />
              </td>
              <td>umwizerwa gedeon</td>
              <td>
                <p className="status completed">completed</p>
              </td>
              <td>umwizerwa@gmail.com</td>
              <td>+250078078965</td>
              <td>web developer</td>
              <td>
                <button className="edit"> edit</button>
                <button className="delete"> delete</button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>umwizerwa gedeon</td>
              <td>umwizerwa@gmail.com</td>
              <td>+250078078965</td>
              <td>web developer</td>
              <td>
                <button className="edit"> edit</button>
                <button className="delete"> delete</button>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <img src={avatar} />
              </td>
              <td>umwizerwa gedeon</td>
              <td>umwizerwa@gmail.com</td>
              <td>+250078078965</td>
              <td>web developer</td>
              <td>
                <button className="edit"> edit</button>
                <button className="delete"> delete</button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>umwizerwa gedeon</td>
              <td>umwizerwa@gmail.com</td>
              <td>+250078078965</td>
              <td>web developer</td>
              <td>
                <button className="edit"> edit</button>
                <button className="delete"> delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
};
export default Employees;
