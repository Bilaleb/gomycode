/* ==========================================================================
   Delicious Bites - Moroccan Menu Stylesheet
   ========================================================================== */

/* Reset & Base Setup */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #fbf9f5; /* Warm sand/cream background */
    color: #2d3748;
    line-height: 1.6;
    padding: 40px 20px;
}

/* Main Container */
.menu-container {
    max-width: 750px;
    margin: 0 auto;
    background: #ffffff;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    border-top: 8px solid #c2593f; /* Terracotta top accent line */
}

/* Header Section */
header {
    text-align: center;
    margin-bottom: 40px;
    padding-bottom: 20px;
    border-bottom: 2px dashed #e2e8f0;
}

h1 {
    font-family: 'Georgia', serif;
    color: #c2593f; /* Moroccan Terracotta */
    font-size: 2.5rem;
    margin-bottom: 8px;
}

.subtitle {
    color: #15803d; /* Emerald Green */
    font-style: italic;
    font-size: 1.1rem;
    letter-spacing: 1px;
}

/* Menu Category Sections */
section {
    margin-bottom: 35px;
}

h2 {
    font-family: 'Georgia', serif;
    color: #15803d; /* Emerald Green */
    font-size: 1.6rem;
    margin-bottom: 20px;
    border-bottom: 2px solid #f1f5f9;
    padding-bottom: 6px;
}

/* Unordered List & Items */
ul {
    list-style: none; /* Removes default browser bullets */
}

li {
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 1px dashed #f1f5f9;
}

li:last-child {
    border-bottom: none; /* Removes line from the last item in a section */
}

/* Layout for Name and Price */
.item-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 6px;
}

.item-name {
    font-weight: 700;
    font-size: 1.15rem;
    color: #1e293b;
}

.item-price {
    font-weight: 700;
    color: #b45309; /* Amber Gold for Dirhams */
    font-size: 1.1rem;
    white-space: nowrap;
}

.item-description {
    color: #64748b;
    font-size: 0.95rem;
}

/* Footer & Contact Link */
footer {
    text-align: center;
    margin-top: 40px;
    padding-top: 25px;
    border-top: 2px dashed #e2e8f0;
}

.contact-button {
    display: inline-block;
    background-color: #c2593f; /* Terracotta */
    color: #ffffff;
    text-decoration: none;
    padding: 12px 30px;
    border-radius: 6px;
    font-weight: 600;
    transition: background-color 0.2s ease, transform 0.1s ease;
}

.contact-button:hover {
    background-color: #a8462f; /* Darker terracotta on hover */
}

.contact-button:active {
    transform: scale(0.98);
}
