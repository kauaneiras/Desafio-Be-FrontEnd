import React, { useState } from 'react';
import { ContainerOpen, ContainerClosed, ContentOpen, ContentClosed, OpenCloseButton, Text, Image, Container, Title, ContainerText } from '../styles/employee-modal-styles';
import { Employee } from "../interfaces/employee-interface";
import OpenIcon from '../assets/icons/open.svg';
import CloseIcon from '../assets/icons/close.svg';
import { formatPhone } from '../utils/format-phone-utils';
import { formatDate } from '../utils/format-date-utils';

interface ModalProps {
  onClose: () => void;
  employee: Employee;
}

interface ModalEmpProps {
  employee: Employee;
}

const Modal: React.FC<ModalProps> = ({ employee }) => {
  return (
    <ContainerOpen>
      <ContentOpen>
        <ContainerText>
          <Title>Cargo</Title>
          <Text>{employee.job}</Text>
        </ContainerText>
        <ContainerText>
          <Title>Data de admissão</Title>
          <Text>{formatDate(employee.admission_date)}</Text>
        </ContainerText>
        <ContainerText>
          <Title>Telefone</Title>
          <Text>{formatPhone(employee.phone)}</Text>
        </ContainerText>
      </ContentOpen>
    </ContainerOpen>
  );
};

const ModalEmp: React.FC<ModalEmpProps> = ({ employee }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {setShowModal(true); setIsModalOpen(true);};
  const closeModal = () => {setShowModal(false); setIsModalOpen(false);};

  return (
    <ContainerClosed showModal={showModal}>
      <ContentClosed>
        <Container>
          <Image src={employee.image} alt={employee.name} />
        </Container>
        <Container>
          <Text>{employee.name}</Text>
        </Container>
        <Container>
         {isModalOpen ? (
            <OpenCloseButton src={CloseIcon} onClick={closeModal} />
          ) : (
            <OpenCloseButton src={OpenIcon} onClick={openModal} />
          )}
        </Container>
      </ContentClosed>
      {showModal && <Modal onClose={closeModal} employee={employee} />}
    </ContainerClosed>
  );
};

export default ModalEmp;