# Project README

## Getting Started

Follow these steps to run the application:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/mr-kh13/test-frontend-engineer.git
   cd ./test-frontend-engineer
   ```

2. **Install Dependencies:**
   This project uses `pnpm` as the package manager. Install dependencies by running:

   ```bash
   pnpm install
   ```

3. **Run the Development Server:**
   Start the application in development mode:

   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the application in the browser.

4. **Build for Production:**
   To create an optimized production build:
   ```bash
   pnpm build
   ```
   To preview the production build:
   ```bash
   pnpm start
   ```

---

## Thought Process and Architectural Decisions

The application is designed to be scalable and maintainable. The folder structure is as follows:

### **Folder Structure:**

- **core:** Contains core functionalities and critical components/logic essential to the application.
- **data:** Handles the data layer, including API calls and custom hooks built with React Query.
- **modules:** Contains application modules organized by domain, ensuring clear separation of concerns.
- **shared:** Holds shared resources like atomic components, hooks, utilities, etc.

This organization ensures that the application is easy to scale as features grow and simplifies team collaboration.

---

## Trade-Offs and Assumptions

### **Cart Functionality:**

- **Current Implementation:**
  The cart functionality is implemented using React Context.
- **Reasoning:**
  Context is a simple and lightweight solution suitable for the current scope of the project. As the project grows, migrating to a more robust state management library like Redux or Zustand can be considered.

### **API Client:**

- **Current Implementation:**
  The `fetch` API is used for making network requests.
- **Reasoning:**
  Since this is a simple project, using `fetch` avoids increasing the bundle size. For future iterations, migrating to `axios` is recommended for its advanced features and improved maintainability.

### **Testing:**

- **Current Status:**
  Testing for critical logic and components like the cart has been deferred due to time constraints.
- **Recommendation:**
  Adding unit and integration tests to core functionalities should be prioritized in future development phases.

### **Package Manager:**

- **Choice:**
  `pnpm` is used as the package manager.
- **Reasoning:**
  It optimizes disk space usage and typically offers faster install and build times compared to `npm`.
