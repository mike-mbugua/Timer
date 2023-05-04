import { useEffect, useState } from "react";
import "./timer.css";
import { Container, Row, Col, Button } from "reactstrap";

function Timer() {
  let timer;
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [isPaused, setIsPaused] = useState(true);

  // const restart = () => {
  //   setHours(0);
  //   setSeconds(59);
  //   setMinutes(59);
  // };

  useEffect(() => {
    if (!isPaused) {
      timer = setInterval(() => {
        setSeconds(seconds - 1);
        if (seconds === 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
        if (minutes === 0) {
          setHours(hours - 1);
          setMinutes(59);
        }
        if (hours === 0 && minutes === 0) {
          setHours(0);
          setMinutes(0);
          setSeconds(0);
        }
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  });

  const pause = () => {
    clearInterval(timer);
    setIsPaused(true);
  };
  const resume = () => {
    setIsPaused(false);
  };
  return (
    <div className="main__container">
      <section className="main__container">
        <Container>
          <Row>
            <Col lg="6" sm="2">
              <div className="upper__set">
                <h2>set timer</h2>
                <div className="set__timer">
                  <label htmlFor="hours">Hrs</label>
                  <input
                    type="number"
                    placeholder="Hrs"
                    onChange={(e) => setHours(e.target.value)}
                  />
                  <label htmlFor="minutes">Mins</label>
                  <input
                    type="number"
                    onChange={(e) => setMinutes(e.target.value)}
                    placeholder="Mins"
                  />
                </div>
              </div>
            </Col>
            <Col lg="6" sm="2">
              <div className="timmer__container d-flex flex-row flex-wrap mt-2 justify-content-between ml-2">
                <div className="minutes">
                  <div>Hrs</div>
                  <div>
                    {hours < 10
                      ? "0" + hours
                      : hours && hours === 0
                      ? 0
                      : hours}
                  </div>
                </div>
                <div className="minutes">
                  <div>Mins</div>
                  <div>
                    {minutes < 10
                      ? "0" + minutes
                      : minutes && minutes < 0
                      ? 0
                      : minutes}
                  </div>
                </div>
                <div className="minutes">
                  <div>Sec</div>
                  <div>{seconds < 10 ? "0" + seconds : seconds}</div>
                </div>
              </div>
              <div className="buttons">
                <Button className="primary__btn" onClick={resume}>
                  {" "}
                  {isPaused ? "start" : ""}
                </Button>
                <Button className="primary__btn" onClick={pause}>
                  pause
                </Button>
              </div>
            </Col>

            <Col sm="2" lg="6">
              <div className="expire"></div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Timer;
