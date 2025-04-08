var choice= prompt("    Welcome to the Area of Shapes Calculator App!\n\nPlease choose a shape to calculate its area:\n1. Circle\n2. Rectangle\n3. Triangle\n4. Square\n5. paralellogram\n5. Exit");
while (choice != 6) {
    switch (choice) {
        case "1":
            var radius = parseFloat(prompt("Enter the radius of the circle:"));
            var area = Math.PI * Math.pow(radius, 2);
            alert("The area of the circle is: " + area.toFixed(2));
            break;
        case "2":
            var length = parseFloat(prompt("Enter the length of the rectangle:"));
            var width = parseFloat(prompt("Enter the width of the rectangle:"));
            var area = length * width;
            alert("The area of the rectangle is: " + area.toFixed(2));
            break;
        case "3":
            var base = parseFloat(prompt("Enter the base of the triangle:"));
            var height = parseFloat(prompt("Enter the height of the triangle:"));
            var area = 0.5 * base * height;
            alert("The area of the triangle is: " + area.toFixed(2));
            break;
        case "4":
            var side = parseFloat(prompt("Enter the side length of the square:"));
            var area = Math.pow(side, 2);
            alert("The area of the square is: " + area.toFixed(2));
            break;
        case "5":
            var base = parseFloat(prompt("Enter the base of the parallelogram:"));
            var height = parseFloat(prompt("Enter the height of the parallelogram:"));
            var area = base * height;
            alert("The area of the parallelogram is: " + area.toFixed(2));
            break;
        default:
            alert("Invalid choice. Please try again.");
    }
    choice= prompt("Please choose a shape to calculate its area:\n1. Circle\n2. Rectangle\n3. Triangle\n4. Square\n5. paralellogram\n6. Exit");
}