import { Employee } from "../interfaces/employee-interface";

interface ModalProps {
    onClose: () => void;
    employee: Employee;
}
  
interface ModalEmpProps {
    employee: Employee;
}

export type { ModalProps, ModalEmpProps };