function Clear(){
    document.getElementById('display').value = "0"
}

function Back() {
    var ev = document.getElementById('display');
    if  (ev.value == '0') {
        return;
    }else{
        ev.value = ev.value.slice(0,-1);
    }
 }

var tempval = "";
function Solve(val) {
    var v = document.getElementById('display');
    if  (v.value == '0'){
        v.value = val;
    }else{
        v.value += val;
    }
}

function Result()
{
    var num1 = document.getElementById('display').value;


    function evaluate(expression)
	{
		let tokens = expression.split('');


		let values = [];


		let ops = [];

		for (let i = 0; i < tokens.length; i++)
		{
		
			if (tokens[i] == ' ')
			{
				continue;
			}


			if (tokens[i] >= '0' && tokens[i] <= '9')
			{
				let sbuf = "";
				
			
				while (i < tokens.length &&
						tokens[i] >= '0' &&
							tokens[i] <= '9')
				{
					sbuf = sbuf + tokens[i++];
				}
				values.push(parseInt(sbuf, 10)); //10 is for coversion in INT
				
				i--;
			}


			else if (tokens[i] == '(')
			{
				ops.push(tokens[i]);
			}


			else if (tokens[i] == ')')
			{
				while (ops[ops.length - 1] != '(')
				{
				values.push(applyOp(ops.pop(),
								values.pop(),
								values.pop()));
				}
				ops.pop();
			}


			else if (tokens[i] == '+' ||
					tokens[i] == '-' ||
					tokens[i] == '*' ||
					tokens[i] == '/')
			{
				

				while (ops.length > 0 &&
						hasPrecedence(tokens[i],
									ops[ops.length - 1]))
				{
				values.push(applyOp(ops.pop(),
								values.pop(),
								values.pop()));
				}

				// Push current token to 'ops'.
				ops.push(tokens[i]);
			}
		}


		while (ops.length > 0)
		{
			values.push(applyOp(ops.pop(),
							values.pop(),
							values.pop()));
		}

		return values.pop();
	}

	function hasPrecedence(op1, op2)
	{
		if (op2 == '(' || op2 == ')')
		{
			return false;
		}
		if ((op1 == '*' || op1 == '/') &&
			(op2 == '+' || op2 == '-'))
		{
			return false;
		}
		else
		{
			return true;
		}
	}


	function applyOp(op, b, a)
	{
		switch (op)
		{
		case '+':
			return a + b;
		case '-':
			return a - b;
		case '*':
			return a * b;
		case '/':
			if (b == 0)
			{
				document.write("Cannot divide by zero");
			}
			return a/b;
		}
		return 0;
	}

    document.getElementById('display').value = evaluate(num1);
}