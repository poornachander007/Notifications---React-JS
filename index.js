const Notification = (props) => {
  const { divClass, specialClass, imageSource, about } = props;
  return (
    <div className={divClass + " " + specialClass}>
      <img src={imageSource} />
      <p>{about}</p>
    </div>
  );
};
const infoIcon =
  "https://assets.ccbp.in/frontend/react-js/primary-icon-img.png";
const successIcon =
  "https://assets.ccbp.in/frontend/react-js/success-icon-img.png";
const warningIcon =
  "https://assets.ccbp.in/frontend/react-js/warning-icon-img.png";
const errorIcon =
  "https://assets.ccbp.in/frontend/react-js/danger-icon-img.png";

const element = (
  <div className="page_container">
    <h1 className="heading">Notifications</h1>
    <div className="cards_container">
      <Notification
        divClass="cardDiv"
        specialClass="info"
        imageSource={infoIcon}
        about="Information Message"
      />
      <Notification
        divClass="cardDiv"
        specialClass="success"
        imageSource={successIcon}
        about="Success Message"
      />
      <Notification
        divClass="cardDiv"
        specialClass="warning"
        imageSource={warningIcon}
        about="Warning Message"
      />
      <Notification
        divClass="cardDiv"
        specialClass="error"
        imageSource={errorIcon}
        about="Error Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
