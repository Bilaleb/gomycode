<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="home.css">
    <title>Fill your informations</title>
</head>
<body>

    <header>
        <h1>My Showcase Page</h1>
        <nav>
            <ul>
                <li><a href="#media-section">Jump to Media</a></li>
                <li><a href="#table-section">Jump to Data Table</a></li>
                <li><a href="#form-section">Jump to Contact Form</a></li>
                <li><a href="/about.html">About Us (Local Page Link)</a></li>
            </ul>
        </nav>
    </header>

    <main>

        <section id="media-section">
            <h2>Multimedia</h2>
            
            <article>
                <h3>Audio Player</h3>
                <audio controls>
                    <source src="assets/podcast.mp3" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
            </article>

            <article>
                <h3>Video Player</h3>
                <video width="480" controls>
                    <source src="assets/presentation.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </article>
        </section>

        <hr>

        <section id="table-section">
            <h2>Inventory Data</h2>
            <table border="1" cellpadding="10" cellspacing="0">
                <thead>
                    <tr>
                        <th>Item ID</th>
                        <th>Product Name</th>
                        <th>Stock Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>001</td>
                        <td>Mechanical Keyboard</td>
                        <td>In Stock</td>
                    </tr>
                    <tr>
                        <td>002</td>
                        <td>Wireless Mouse</td>
                        <td>Out of Stock</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <hr>

        <section id="form-section">
            <h2>Contact Us</h2>
            <form action="/submit-endpoint" method="POST">
                <label for="user-name">Full Name:</label><br>
                <input type="text" id="user-name" name="name" placeholder="Jane Doe" required><br><br>

                <label for="user-email">Email Address:</label><br>
                <input type="email" id="user-email" name="email" placeholder="jane@example.com" required><br><br>

                <label for="inquiry-type">Topic:</label><br>
                <select id="inquiry-type" name="topic">
                    <option value="support">Technical Support</option>
                    <option value="sales">Sales</option>
                    <option value="general">General Inquiry</option>
                </select><br><br>

                <label for="message">Message:</label><br>
                <textarea id="message" name="message" rows="4" cols="30" required></textarea><br><br>

                <button type="submit">Send Message</button>
            </form>
        </section>

    </main>

    <footer>
        <p>&copy; 2026 My Showcase Page. All rights reserved.</p>
    </footer>

</body>
</html>
