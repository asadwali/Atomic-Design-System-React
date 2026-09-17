import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DashboardLayout from "./components/HOCLayout/HOCLayout";
import CustomPage from "./components/pages/customPage";
import AlertTemplate from "./components/templates/AlertTemplate/AlertTemplate";
import AvatarTemplate from "./components/templates/AvatarTemplate/AvatarTemplate";
import BadgesTemplate from "./components/templates/BadgesTemplate/BadgesTemplate";
import ButtonsTemplate from "./components/templates/ButtonsTemplate/ButtonsTemplate";
import ChatTemplate from "./components/templates/ChatTemplate/ChatTemplate";
import CheckBoxGroupTemplate from "./components/templates/CheckBoxGroupTemplate/CheckBoxGroupTemplate";
import CheckBoxRadioTemplate from "./components/templates/CheckBoxRadioTemplate/CheckBoxRadioTemplate";
import DataTableTemplates from "./components/templates/DataTablesTemplate/DataTablesTemplate";
import DropdownsTemplate from "./components/templates/DropdownsTemplate/DropdownsTemplate";
import InputFieldsTemplate from "./components/templates/InputFieldsTemplate/InputFieldsTemplate";
import ModalTemplate from "./components/templates/ModalsTemplate/ModalsTemplate";
import PaginationTemplate from "./components/templates/PaginationTemplate/PaginationTemplate";
import ProgressIndicatorTemplate from "./components/templates/ProgressIndicatorTemplate/ProgressIndicatorTemplate";
import StepperTemplate from "./components/templates/StepperTemplate/StepperTemplate";
import TabsTemplate from "./components/templates/TabsTemplate/TabsTemplate";
import ToastAlertsTemplate from "./components/templates/ToastAlertsTemplate/ToastAlertsTemplate";
import ToggleSwitchTemplate from "./components/templates/ToggleSwitchTemplate/ToggleSwitchTemplate";
import TooltipTemplate from "./components/templates/TooltipsTemplate/TooltipsTemplate";
import CalendarTemplate from "./components/templates/CalenderTemplate/CalenderTemplate";
import DataTableGridTemplate from "./components/templates/DataTableTemplate/DataTableTemplate";



function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<CustomPage />} />
          <Route path="/buttons" element={<ButtonsTemplate />} />
          <Route path="/avatars" element={<AvatarTemplate />} />
          <Route path="/toast-alerts" element={<ToastAlertsTemplate />} />
          <Route path="/badges" element={<BadgesTemplate />} />
          <Route path="/progress-indicator" element={<ProgressIndicatorTemplate />} />
          <Route path="/input-fields" element={<InputFieldsTemplate />} />
          <Route path="/toggle-switch" element={<ToggleSwitchTemplate />} />
          <Route path="/pagination" element={<PaginationTemplate />} />
          <Route path="/checkbox-radio" element={<CheckBoxRadioTemplate />} />
          <Route path="/checkbox-group" element={<CheckBoxGroupTemplate />} />
          <Route path="/tabs" element={<TabsTemplate />} />
          <Route path="/tooltips" element={<TooltipTemplate />} />
          <Route path="/stepper" element={<StepperTemplate />} />
          <Route path="/dropdowns" element={<DropdownsTemplate />} />
          <Route path="/tables" element={<DataTableTemplates />} />
          <Route path="/chat" element={<ChatTemplate />} />
          <Route path="/modals" element={<ModalTemplate />} />
          <Route path="/alerts" element={<AlertTemplate />} />
          <Route path="/calender-picker" element={<CalendarTemplate />} />
          <Route path="/data-table" element={<DataTableGridTemplate />} />

        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
