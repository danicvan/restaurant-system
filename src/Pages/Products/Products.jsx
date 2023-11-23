import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
} from "@fortawesome/free-solid-svg-icons";

function Products() {
  return (
    <>
      <div className="container">
        <h2>Product Description</h2>
        <div className="container__table">
        <div className="container__categories">
              <h4>
                <FontAwesomeIcon icon={faFilter} className="nav__icon" />
                <span>Gerenciar Categorias</span>
              </h4>
            </div>
          <div className="container__title">
            <h4>Pedidos</h4>
            
          </div>
          <table>
            <thead>
              <tr>
                <th>Customização</th>
                <th>Menu Order</th>
                <th>Pagamento Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tabela 10</td>
                <td>(Order Items)</td>
                <td>RM125</td>
                <td><span className="completo">Completo</span></td>
              </tr>
              <tr>
                <td>Tabela 10</td>
                <td>(Order Items)</td>
                <td>RM145</td>
                <td><span className="preparando">Preparando</span></td>
              </tr>
              <tr>
                <td>Tabela 10</td>
                <td>(Order Items)</td>
                <td>RM105</td>
                <td><span className="pendente">Pendente</span></td>
              </tr>
              <tr>
                <td>Tabela 10</td>
                <td>(Order Items)</td>
                <td>RM45</td>
                <td><span className="completo">Completo</span></td>
              </tr>
              <tr>
                <td>Tabela 10</td>
                <td>(Order Items)</td>
                <td>RM245</td>
                <td><span className="completo">Completo</span></td>
              </tr>
              <tr>
                <td>Tabela 10</td>
                <td>(Order Items)</td>
                <td>RM435</td>
                <td><span className="completo">Completo</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Products