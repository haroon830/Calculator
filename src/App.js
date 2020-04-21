import React from "react";
import "./App.css";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      label: "",
      operator: "",
      op1: "0",
      history: "",
      decimal: "",
      varop: ""
    };
  }

  //EVENT HANDLER for Operands when any number is pressed onOperands function will be called.
  onOperands = number => {
    if (number === ".") {
      //No operand can have more than one decimal point
      if (this.state.decimal === "") {
        if (this.state.varop === "") {
          this.setState({ input: this.state.input + number });
          this.setState({ decimal: "." });
        } else {
          this.setState({ input: number });
          this.setState({ decimal: "." });
          this.setState({ varop: "" });
        }
      } else {
        this.setState({ input: this.state.input });
      }
    } else {
      if (this.state.varop === "") {
        // appending the numbers in sequence
        this.setState({ input: this.state.input + number });
      } else if (this.state.varop === "=") {
        this.setState({ label: "" });
        this.setState({ input: number });
        this.setState({ varop: "" });
      } else {
        this.setState({ input: number }); //appending new numbers for second number
        this.setState({ varop: "" });
      }
    }
  };

  //Event handler for operators, when operator is pressed onOperator function will be called
  onOperators = symbol => {
    if (this.state.op1 === "0") {
      this.setState({ op1: this.state.input });
    }
    if (this.state.varop === "=") {
      this.setState({ label: this.state.input + " " + symbol + " " });
      this.setState({ varop: "" });
    }
    if (this.state.varop !== "") {
      this.setState({ label: this.state.input + " " + symbol + " " });
    } else {
      this.setState({
        label: this.state.label + " " + this.state.input + " " + symbol + " "
      });
      if (this.state.operator === "+") {
        this.setState({
          op1: parseFloat(this.state.op1) + parseFloat(this.state.input)
        });
        this.setState({
          input: parseFloat(this.state.op1) + parseFloat(this.state.input)
        });
      } else if (this.state.operator === "-") {
        this.setState({
          op1: parseFloat(this.state.op1) - parseFloat(this.state.input)
        });
        this.setState({
          input: parseFloat(this.state.op1) - parseFloat(this.state.input)
        });
      } else if (this.state.operator === "x") {
        this.setState({
          op1: parseFloat(this.state.op1) * parseFloat(this.state.input)
        });
        this.setState({
          input: parseFloat(this.state.op1) * parseFloat(this.state.input)
        });
      } else if (this.state.operator === "÷") {
        this.setState({
          op1: parseFloat(this.state.op1) / parseFloat(this.state.input)
        });
        this.setState({
          input: parseFloat(this.state.op1) / parseFloat(this.state.input)
        });
      } else if (this.state.operator === "%") {
        this.setState({
          op1: parseFloat(this.state.op1) % parseFloat(this.state.input)
        });
        this.setState({
          input: parseFloat(this.state.op1) % parseFloat(this.state.input)
        });
      }
    }
    //since answer is fixed now so we set decimal to null so that we can add deciml point in second operand
    this.setState({ decimal: "" });
    if (symbol === "+") {
      this.setState({ operator: "+" });
      this.setState({ varop: "+" });
    }
    if (symbol === "–") {
      this.setState({ operator: "–" });
      this.setState({ varop: "–" });
    }
    if (symbol === "x") {
      this.setState({ operator: "x" });
      this.setState({ varop: "x" });
    }
    if (symbol === "÷") {
      this.setState({ operator: "÷" });
      this.setState({ varoper: "÷" });
    }
    if (symbol === "%") {
      this.setState({ operator: "%" });
      this.setState({ varop: "%" });
    }
  };

  //When equal button is pressed the equal function is called
  onEqual = () => {
    if (this.state.operator === "+") {
      this.setState({
        label: this.state.label + this.state.input + " = ",
        input: parseFloat(this.state.op1) + parseFloat(this.state.input),
        history:
          this.state.label +
          " " +
          this.state.input +
          " = " +
          (parseFloat(this.state.op1) + parseFloat(this.state.input)) +
          "\n" +
          this.state.history,
        decimal: "",
        operator: "",
        varop: "="
      });
    } else if (this.state.operator === "–") {
      this.setState({
        label: this.state.label + this.state.input + " = ",
        input: parseFloat(this.state.op1) - parseFloat(this.state.input),
        history:
          this.state.label +
          " " +
          this.state.input +
          " = " +
          (parseFloat(this.state.op1) - parseFloat(this.state.input)) +
          "\n" +
          this.state.history,
        operator: "",
        varop: "="
      });
    } else if (this.state.operator === "x") {
      this.setState({
        label: this.state.label + this.state.input + " = ",
        input: parseFloat(this.state.op1) * parseFloat(this.state.input),
        history:
          this.state.label +
          " " +
          this.state.input +
          " = " +
          parseFloat(this.state.op1) * parseFloat(this.state.input) +
          "\n" +
          this.state.history,
        operator: "",
        varop: "="
      });
    } else if (this.state.operator === "÷") {
      this.setState({
        label: this.state.label + this.state.input + " = ",
        input: parseFloat(this.state.op1) / parseFloat(this.state.input),
        history:
          this.state.label +
          " " +
          this.state.input +
          " = " +
          parseFloat(this.state.op1) / parseFloat(this.state.input) +
          "\n" +
          this.state.history,
        operator: "",
        varop: "="
      });
    } else if (this.state.operator === "%") {
      this.setState({
        label: this.state.label + this.state.input + " = ",
        input: parseFloat(this.state.op1) % parseFloat(this.state.input),
        history:
          this.state.label +
          " " +
          this.state.input +
          " = " +
          (parseFloat(this.state.op1) % parseFloat(this.state.input)) +
          "\n" +
          this.state.history,
        operator: "",
        varop: "="
      });
    }
    this.setState({ op1: "0" });
  };

  render() {
    return (
      <header className="mainPage">
        <div className="main">
          <div className="label">
            <h5>{this.state.label}</h5>
          </div>

          <div className="text">
            <label className="txt">{this.state.input}</label>
          </div>
          <div className="backspace">
            <button
              onClick={() => {
                this.setState({ input: String(this.state.input).slice(0, -1) });
                this.setState({ decimal: "" });
              }}
            >
              BACK
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                this.setState({ input: "" });
                this.setState({ decimal: "" });
              }}
              class="operators"
            >
              CE
            </button>
            <button
              onClick={() => {
                this.setState({ input: "" });
                this.setState({ label: "" });
                this.setState({ decimal: "" });
              }}
              class="operators"
            >
              C
            </button>
            <button
              onClick={() => {
                this.onOperators("%");
              }}
              class="operators"
            >
              %
            </button>
            <button
              onClick={() => {
                this.onOperators("÷");
              }}
              class="operators"
            >
              ÷
            </button>
          </div>

          <div>
            <button
              onClick={() => {
                this.onOperands("1");
              }}
              class="Calculator"
            >
              1
            </button>
            <button
              onClick={() => {
                this.onOperands("2");
              }}
              class="Calculator"
            >
              2
            </button>
            <button
              onClick={() => {
                this.onOperands("3");
              }}
              class="Calculator"
            >
              3
            </button>
            <button
              onClick={() => {
                this.onOperators("x");
              }}
              class="operators"
            >
              x
            </button>
          </div>

          <div>
            <button
              onClick={() => {
                this.onOperands("4");
              }}
              class="Calculator"
            >
              4
            </button>
            <button
              onClick={() => {
                this.onOperands("5");
              }}
              class="Calculator"
            >
              5
            </button>
            <button
              onClick={() => {
                this.onOperands("6");
              }}
              class="Calculator"
            >
              6
            </button>
            <button
              onClick={() => {
                this.onOperators("+");
              }}
              class="operators"
            >
              +
            </button>
          </div>

          <div>
            <button
              onClick={() => {
                this.onOperands("7");
              }}
              class="Calculator"
            >
              7
            </button>
            <button
              onClick={() => {
                this.onOperands("8");
              }}
              class="Calculator"
            >
              8
            </button>
            <button
              onClick={() => {
                this.onOperands("9");
              }}
              class="Calculator"
            >
              9
            </button>
            <button
              onClick={() => {
                this.onOperators("–");
              }}
              class="operators"
            >
              –
            </button>
          </div>

          <div>
            <button
              onClick={() => {
                this.onOperators("+");
              }}
              class="Calculator"
            >
              +/-
            </button>
            <button
              onClick={() => {
                this.onOperands("0");
              }}
              class="Calculator"
            >
              0
            </button>
            <button
              onClick={() => {
                this.onOperands(".");
              }}
              class="Calculator"
            >
              .
            </button>
            <button
              onClick={() => {
                this.onEqual();
              }}
              class="operators"
            >
              =
            </button>
          </div>
        </div>

        <div className="History">
          <div className="hisdiv">History</div>
          <textarea
            className="textarea"
            value={this.state.history}
            cols="30"
            rows="17"
          >
            {this.state.history}
          </textarea>

          <button
            className="History"
            onClick={() => {
              this.setState({ history: "" });
            }}
            class="clear"
          >
            Clear
          </button>
        </div>
      </header>
    );
  }
}

export default Calculator;
