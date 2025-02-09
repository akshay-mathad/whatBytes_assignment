﻿# whatBytes_assignment

# **Dashboard UI for Skill Test Analysis**

This project is a responsive, interactive dashboard for skill test analysis. It allows users to view and update various statistics, including rank, percentile, score, syllabus-wise analysis, and question analysis, using a modern UI built with **Next.js**, **React**, **Chart.js**, and **Tailwind CSS**.

---

## **Features**

- **Dynamic Data Updates**: Update rank, percentile, and scores dynamically via a modal, and see the changes reflected in real-time across the dashboard.
- **Visual Analysis**:
  - **Syllabus-Wise Analysis**: Horizontal progress bars for different syllabus topics.
  - **Question Analysis**: A dynamic doughnut chart displaying correct, incorrect, and unattempted questions.
  - **Comparison Graph**: Line graph to compare performance across percentile ranges.
- **Fully Responsive UI**:
  - Optimized for all screen sizes.
  - Sidebar navigation with active tab highlighting.

---

## **Technologies Used**

- **Next.js**: Framework for building server-rendered React applications.
- **React**: JavaScript library for building user interfaces.
- **Chart.js**: For visualizing data in graphs and charts.
- **React Chart.js 2**: React wrapper for Chart.js.
- **Tailwind CSS**: Utility-first CSS framework for styling.

---

## **Installation**

### Prerequisites
- **Node.js**: Make sure Node.js is installed on your system.
- **npm or yarn**: A package manager for managing dependencies.

### Steps
1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd <repository_folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open the application in your browser:
   ```bash
   http://localhost:3000
   ```

---

## **Project Structure**

```
src/
├── app/
│   ├── page.js                # Main entry point for the app
│   ├── components/
│   │   ├── Navbar.js          # Sidebar navigation component
│   │   ├── SkillTest.js       # Skill test card and modal trigger
│   │   ├── QuickStats.js      # Quick statistics display
│   │   ├── SyllabusAnalysis.js# Syllabus-wise analysis progress bars
│   │   ├── ComparisonGraph.js # Performance comparison graph
│   │   ├── QuestionAnalysis.js# Doughnut chart for question analysis
│   │   ├── Modal.js           # Modal for updating stats
├── styles/
│   └── globals.css            # Global styles using Tailwind CSS
├── public/                    # Static assets
```

---

## **Usage**

1. **Navigate through tabs**:
   - Use the sidebar to switch between sections: Skill Test, Syllabus Analysis, Comparison Graph, and Question Analysis.

2. **Update Parameters**:
   - Click the "Update" button in the Skill Test section to open the modal.
   - Modify the rank, percentile, or score.
   - Click "Save" to see real-time updates in the dashboard.

3. **View Graphs and Charts**:
   - Check the syllabus progress bars, doughnut chart, and comparison graph for detailed analysis.

---

## **Customization**

### Update Syllabus Data
Modify the syllabus topics and percentages in `SyllabusAnalysis.js`:
```javascript
const syllabusData = [
  { title: "HTML Tools, Forms, History", percentage: 80, color: "bg-blue-600" },
  { title: "Tags & References in HTML", percentage: 60, color: "bg-orange-500" },
  { title: "Tables & References in HTML", percentage: 24, color: "bg-red-500" },
  { title: "Tables & CSS Basics", percentage: 96, color: "bg-green-600" },
];
```

### Update Chart Data
Update the initial doughnut and line chart data in `QuestionAnalysis.js` and `ComparisonGraph.js`.

---

## **Contributing**

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add a feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## **Acknowledgments**

Special thanks to:
- **Next.js Documentation**: For guidance on building scalable React apps.
- **Chart.js**: For creating beautiful, interactive charts.
- **Tailwind CSS**: For simplifying the styling process.

---
