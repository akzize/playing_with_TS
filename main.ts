/* -------------------------------------------------------------------------- */
/*                                 data types                                 */
/* -------------------------------------------------------------------------- */

// string, number, boolean, bigint, symbol
// any, unknown, undefined, null

let var1: string = "this is me";
let var2: any = "this is me";

var2 = 44;

/* -------------------------------------------------------------------------- */
/*                                   Arrays                                   */
/* -------------------------------------------------------------------------- */

const table: string[] = [];
table.push("me", "him");


// the same concept as js an array can have different types of values inside 
// but in case you want it to be typed, it's you're call
const test_table: any[] = [];
test_table.push('test', 12)
console.log(test_table);

// readonly prevent the table form been changed
const table_for_readonly_reasons: readonly string[] = ["member1", "member2"];
console.log(table);

/* -------------------------------------------------------------------------- */
/*                                   tuples                                   */
/* -------------------------------------------------------------------------- */
// tuples are array but they can have multiples types
// A good practice is to make your tuple readonly.
let my_typle: [number, string, boolean];

my_typle = [1, "test", true];

/* -------------------------------------------------------------------------- */
/*                                 object type                                */
/* -------------------------------------------------------------------------- */

// tips
// the question mark is for optional props
let person: { 
    name: string, 
    age?: number, 
    skills: string[] 
} = {
    name: 'zakaria', skills: ['html', 'css', 'js']
}

let persones: any[] = [
    {
        name: 'zakaria', skills: ['html', 'css', 'js']
    },
    {
        name: 'zakaria', age: 21, skills: ['html', 'css', 'js']
    }
]

console.log(persones);

/* -------------------------------------------------------------------------- */
/*                                    Enums                                   */
/* -------------------------------------------------------------------------- */
/* ------------------------------ enumerations ------------------------------ */

// it's like a class, a special class that is used to groupes of fixed value, (uncheable vars).
// they have or they come with two flavours :), string and numbers, you can mix them but it not recommended 
enum Direction {
    North = 1,
    East,
    West,
    South
}

console.log(Direction);


/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */

function sayHello(): string {
    return 'Hello Me';
}

// if we didn't assign the params type, by default they take any

// optional and default params can be presented like so:
const multiples = (x: number, y: number, b:number = 4, a?: number): number  => {
    return x * y + b;
}

console.log(sayHello());
console.log(multiples(21, 10));


