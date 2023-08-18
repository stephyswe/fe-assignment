import "./container.css";

export const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="app-container">
    <div className="app_inner-container">
      {children}
    </div>
  </div>
);