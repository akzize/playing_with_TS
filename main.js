/* -------------------------------------------------------------------------- */
/*                                 data types                                 */
/* -------------------------------------------------------------------------- */
// string, number, boolean, bigint, symbol
// any, unknown, undefined, null
var var1 = "this is me";
var var2 = "this is me";
var2 = 44;
/* -------------------------------------------------------------------------- */
/*                                   Arrays                                   */
/* -------------------------------------------------------------------------- */
var table = [];
table.push("me", "him");
// readonly prevent the table form been changed
var table_for_readonly_reasons = ["member1", "member2"];
console.log(table);
/* -------------------------------------------------------------------------- */
/*                                   tuples                                   */
/* -------------------------------------------------------------------------- */
// tuples are array but they can have multiples types
// A good practice is to make your tuple readonly.
var my_typle;
my_typle = [1, "test", true];
/* -------------------------------------------------------------------------- */
/*                                 object type                                */
/* -------------------------------------------------------------------------- */
// tips
// the question mark is for optional props
var person = {
    name: 'zakaria', skills: ['html', 'css', 'js']
};
var persones = [
    {
        name: 'zakaria', skills: ['html', 'css', 'js']
    },
    {
        name: 'zakaria', age: 21, skills: ['html', 'css', 'js']
    }
];
console.log(person);
