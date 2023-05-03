import { useEffect, useState } from "react";
import "./timer.css";
import { Container, Row, Col, Button } from "reactstrap";

function Timer() {
  let timer;
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const restart = () => {
    setHours(0);
    setSeconds(0);
    setMinutes(0);
  };

  useEffect(() => {
    if (!isPaused) {
      timer = setInterval(() => {
        setSeconds(seconds + 1);
        if (seconds === 59) {
          setMinutes(minutes + 1);
          setSeconds(0);
        }
        if (minutes === 59) {
          setHours(hours + 1);
          setMinutes(0);
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
              <div className="timmer__container d-flex flex-row flex-wrap mt-2 justify-content-between ml-2">
                <div className="minutes">
                  <div>Hrs</div>
                  <div>{hours < 10 ? "0" + hours : hours}</div>
                </div>
                <div className="minutes">
                  <div>Mins</div>
                  <div>{minutes < 10 ? "0" + minutes : minutes}</div>
                </div>
                <div className="minutes">
                  <div>Sec</div>
                  <div>{seconds < 10 ? "0" + seconds : seconds}</div>
                </div>
              </div>
              <div className="buttons">
                <Button className="primary__btn" onClick={restart}>
                  Restart
                </Button>
                <Button className="primary__btn" onClick={pause}>
                  Pause
                </Button>
                <Button className="primary__btn" onClick={resume}>
                  Resume
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
