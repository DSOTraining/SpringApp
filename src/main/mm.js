const db = require('./db');
app.get('/products', (req, res) => {
db.query('SELECT * FROM products WHERE id = ' + req.query.id);
.then((product) => {
...
res.send(product);
})
});

// 10;DROP TABLE Users
// https://levelup.gitconnected.com/javascript-vulnerabilities-e5391a746c90

<!DOCTYPE html>

            <html>
                <head>
                    <title>JS Injection Demo</title>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <script>
            
                    </script>
                </head>
                <body>
                    <form action="injection.jsp" method="GET">
                        <table>
                            <tr>        
                            <td> Name:  </td>
                            <td><input type="text" name="userName" value="" required></td>
                            </tr>
                            <tr>
                                <td>Email:  </td>
                                <td><input type="text" name="email" value="" required></td>
                            </tr>
                            <tr>
                                <td>Feedback: </td>
                                <td><textarea rows="10" cols="70"></textarea></td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="submit" value="Submit"/></td>
                        </tr>
                        </table>
                    </form>
                </body>
            </html>

            db.query('SELECT * FROM products WHERE id = ' + req.query.id);