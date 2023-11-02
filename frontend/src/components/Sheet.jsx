// import { useParams } from "react-router-dom";

const Sheet = () => {
//   const { dsName } = useParams();
  return (
    <>
      <div className="sheet-Main">  
        <div className="sheet-Main-Box">
          <div className="header">
            <h1>DSA CRACKER</h1>
            <h2>
              <a href="/">Topics</a> /
            </h2>
          </div>

          <div className="body">
            <div className="table-Body">
              <table>
                <thead>
                  <th className="cb"></th>
                  <th className="id">id</th>
                  <th className="questions">Questions</th>
                  <th className="links">Links</th>
                </thead>
              </table>
              <table>
                <tbody>
                  {/* <form action="updatedSheet" method="post"> */}
                  <td className="cb">
                    <input
                      type="checkbox"
                      name="checkedQues"
                      value=""
                      //   onchange="this.form.submit()"
                    />
                    <input
                      type="hidden"
                      name="uncheckedQues"
                      value=""
                      //   onchange="this.form.submit()"
                    />
                  </td>
                  {/* </form> */}
                  <td className="id">
                    <h4></h4>
                  </td>
                  <td className="questions">
                    <h4>
                      <a href="" target="_blank"></a>
                    </h4>
                  </td>
                  <td className="links">
                    {/* <a href="" target="_blank">
                      <img src="" alt="icon" />
                    </a>
                    <a href="" target="_blank">
                      <img src="/assets/icons/codingNinja.png" alt="icon" />
                    </a> */}
                  </td>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sheet;
