let totalAmount = 0;
let serialNo = 1;
let cartItems = [];

function addItem(serviceName, price) {

    let emptyRow = document.getElementById("emptyRow");

    if (emptyRow) {
        emptyRow.remove();
    }

    let table = document.getElementById("cartBody");

    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${serialNo}</td>
        <td>${serviceName}</td>
        <td>₹${price}</td>
    `;

    table.appendChild(row);

    serialNo++;

    totalAmount += price;

    document.getElementById("total").innerHTML = totalAmount;

    cartItems.push({
        service: serviceName,
        price: price
    });

}

function skipItem() {

    alert("Service Skipped!");

}

function addToCart() {

    if(cartItems.length == 0)
    {
        alert("Please add at least one service.");
    }
    else
    {
        alert(cartItems.length + " Service(s) Added To Cart Successfully!");
    }

}

function bookNow() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(name=="" || email=="" || password=="")
    {
        alert("Please Fill All Details");
        return;
    }

    if(cartItems.length==0)
    {
        alert("Please Add Services First.");
        return;
    }

    alert(
        "Booking Successful!\n\n" +
        "Customer : " + name +
        "\nEmail : " + email +
        "\nServices : " + cartItems.length +
        "\nTotal Amount : ₹" + totalAmount
    );

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";

    document.getElementById("cartBody").innerHTML = `
        <tr id="emptyRow">
            <td colspan="3">
                <i class="fa-solid fa-cart-shopping cart-icon"></i>
                <p>No Items Added</p>
            </td>
        </tr>
    `;

    totalAmount = 0;
    serialNo = 1;
    cartItems = [];

    document.getElementById("total").innerHTML = totalAmount;

}