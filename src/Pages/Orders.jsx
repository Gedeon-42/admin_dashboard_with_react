const Orders = () => {
  return (
    <div className="table-containers">
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>full name</th>
            <th>email</th>
            <th>phone</th>
            <th>quantity</th>
            <th>status</th>
            <th>country</th>
            <th colSpan="2">action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>umwizerwa gedeon</td>
            <td>umwizerwa@gmail.com</td>
            <td>+250078078965</td>
            <td>4</td>
            <td>pending</td>
            <td>rwanda</td>
            <td>
              <button className="edit"> edit</button>
              <button className="delete"> delete</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>eric zidane</td>
            <td>ericzidane@gmail.com</td>
            <td>+21007965</td>
            <td>30</td>
            <td>pending</td>
            <td>zambia</td>
            <td>
              <button className="edit"> edit</button>
              <button className="delete"> delete</button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>patrick mwembu</td>
            <td>patric23@gmail.com</td>
            <td>+560078078965</td>
            <td>90</td>
            <td>complete</td>
            <td>tanzania</td>
            <td>
              <button className="edit"> edit</button>
              <button className="delete"> delete</button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>kameto zewussi</td>
            <td>eric23@gmail.com</td>
            <td>+560078078965</td>
            <td>90</td>
            <td>complete</td>
            <td>kenya</td>
            <td>
              <button className="edit"> edit</button>
              <button className="delete"> delete</button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>patrick mwembu</td>
            <td>patric23@gmail.com</td>
            <td>+560078078965</td>
            <td>90</td>
            <td>complete</td>
            <td>tanzania</td>
            <td>
              <button className="edit"> edit</button>
              <button className="delete"> delete</button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>patrick mwembu</td>
            <td>patric23@gmail.com</td>
            <td>+560078078965</td>
            <td>90</td>
            <td>complete</td>
            <td>tanzania</td>
            <td>
              <button className="edit"> edit</button>
              <button className="delete"> delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Orders;
