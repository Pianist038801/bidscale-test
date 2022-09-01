import { useAlert } from '../contexts/AlertContext';
import AlertComponent from "./AlertComponent";

const AlertManager = () => {
  const { alerts } = useAlert();

  return (
    <div>
      {alerts.map((alert) => <AlertComponent {...alert} />)}
    </div>
  )
}

export default AlertManager;