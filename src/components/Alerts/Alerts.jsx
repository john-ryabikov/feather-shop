import { useSelector} from "react-redux";

export default function Alerts() {

    const { showAlertAdd, showAlertSend } = useSelector((state) => state.alerts);

    const alerts = [
        {
          status: showAlertAdd,
          icon: "img/Alerts/done.svg",
          text: "Товар добавлен"
        },
        {
          status: showAlertSend,
          icon: "img/Alerts/done.svg",
          text: "Заявка успешно отправлена!"
        }
    ]
    return (
        <>
            {alerts.map((alert, i) => (
                <div key={i} className={!alert.status ? "alerts" : "alerts alerts_action"}>
                    <img className="alerts__icon" src={alert.icon} alt="Icon" />
                    <p className="alerts__text">{alert.text}</p>
                </div>
            ))}
        </>
    )
}