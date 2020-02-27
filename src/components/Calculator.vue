<template>
  <div class="container text-center mt-4 ">
    <div class="calculator">
      <div class="display">{{ current || 0 }}</div>
      <div @click="clear" class="button">C</div>
      <div @click="sign" class="button">+/-</div>
      <div @click="percent" class="button">%</div>
      <div @click="divide" class="button operator  ">/</div>
      <div @click="append('7')" class="button">7</div>
      <div @click="append('8')" class="button">8</div>
      <div @click="append('9')" class="button">9</div>
      <div @click="multiply" class="button operator">x</div>
      <div @click="append('4')" class="button">4</div>
      <div @click="append('5')" class="button">5</div>
      <div @click="append('6')" class="button">6</div>
      <div @click="subtract" class="button operator">-</div>
      <div @click="append('1')" class="button ">1</div>
      <div @click="append('2')" class="button">2</div>
      <div @click="append('3')" class="button">3</div>
      <div @click="add" class="button operator">+</div>
      <div @click="append('0')" class=" button zero">0</div>
      <div @click="dot" class="button">.</div>
      <div @click="equal" class="button operator">=</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    // initially set values which we used to set the methods we used
    return {
       previous: null,
      current: '',
      operator: null,
      operatorClicked: false
    };
  },
  methods: {
    // once called it returns the initially set value to an empty string
    clear() {
      this.current = '';
    },
    // here the previous value would be the current value and the value of operator clicked would be set to true
    setPrevious() {
      this.previous = this.current;
      this.operatorClicked = true;
    },
    
    // we are checking to see if the first character of the string has a negative string value and if so we are removing else we add that negative value to it 
    sign() {
      this.current =
        this.current.charAt(0) === '-'
          ? this.current.slice(1)
          : `-${this.current}`;
    },

    // since it is a string we convert it into a float using the parse float and divide the current value by 100
    percent() {
      this.current = `${parseFloat(this.current / 100)}`;
    },

    // this involves us appending or adding a new number to the initially current value,the number is passed in as an argument and also if an operator has been clicked,the current value is set to an empty string and the operator clicked value is set to false...i.e the default value.
    append(number) {
      if (this.operatorClicked) {
        this.current = '',
         this.operatorClicked = false;
      }
      this.current = `${this.current}${number}`;
    },

  // this is set to determine if there is no . added if there is none the dot value is appended when the dot button is clicked
    dot() {
      if (this.current.indexOf(".") === -1) {
        this.append(".");
      }
    },
    
    // this involves putting a callback function involving the current value and the previous value and when operations are done the set previous method defined above is called
    divide() {
      this.operator = (a, b) =>  b / a;
      this.setPrevious();
    },

    subtract() {
      this.operator = (a, b) =>  b -a ;
      this.setPrevious();
      console.log(this.previous)
    },

    multiply() {
      this.operator = (a, b) => a * b;
      this.setPrevious();
    },
    add() {
      this.operator = (a, b) => a + b;
      this.setPrevious();
    },

// the equal value creates a scenario whereby it carries out the operation as seen below and each string is then converted into floats
    equal() {
      this.current = `${this.operator(
        parseFloat(this.current), 
        parseFloat(this.previous)
      )}`;
      this.previous = null;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calculator {
  font-size: 40px;
  display: grid;
  margin: 0 auto;
  width: 400px;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
}

.display {
  grid-column: 1/5;
  background-color: #333;
  color: white;
}
.zero {
  grid-column: 1/3;
}

.button {
  background-color: #eee;
  border: 1px solid #999;
}
.operator {
  background-color: orange;
  color: white;
}
</style>
