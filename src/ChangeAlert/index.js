import  React from 'react'
import { withStorageListener } from './withStorageListener'
import { Modal } from '../Modal'
import { Load } from '../Icons/Load'
import './ChangeAlert.css'

function ChangeAlert({show, toggleShow}) {

    // console.log('toggleShow:', toggleShow);
    if (show) {
        return (
            <Modal >
            <div className='ModalBackground'>
                <div className='ModalContent'>
                    <Load width={24} height={24} />
                    <p><span>¡Actualización de tareas!</span></p>
                    <p>Por favor, actualiza la página</p>
                    <button
                    onClick={toggleShow}>
                        Volver a cargar la información
                    </button>
                </div>
            </div>
            </Modal>
        )
    } else {
        return null  
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlertWithStorageListener }