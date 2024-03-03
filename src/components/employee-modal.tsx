import React, { useState } from 'react';
import { ContainerOpen, ContainerClosed, ContentOpen, ContentClosed, OpenButton, CloseButton, Text, Image } from '../styles/employee-modal-styles';
import { Employee } from "../interfaces/employee-interface";

interface ModalProps {
  onClose: () => void;
  employee: Employee;
}

interface ModalEmpProps {
  employee: Employee;
}

const Modal: React.FC<ModalProps> = ({ onClose, employee }) => {
  return (
    <ContainerOpen>
      <ContentOpen>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <Text>Cargo {employee.job}</Text>
        <Text>Data de admissão {employee.admission_date}</Text>
        <Text>Telefone {employee.phone}</Text>
      </ContentOpen>
    </ContainerOpen>
  );
};

const ModalEmp: React.FC<ModalEmpProps> = ({ employee }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const openModal = () => {setShowModal(true);};
  const closeModal = () => {setShowModal(false);};

  return (
    <ContainerClosed>
      <ContentClosed>
        <Image src={employee.image} alt={employee.name} />
        <Text>{employee.name}</Text>
        <OpenButton onClick={openModal}>Open</OpenButton>
      </ContentClosed>
      {showModal && <Modal onClose={closeModal} employee={employee} />}
    </ContainerClosed>
  );
};

export default ModalEmp;