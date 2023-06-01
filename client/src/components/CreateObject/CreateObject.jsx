import styles from './CreateObject.module.scss';
import CreateObjectForm from '../common/CreateObjectForm/CreateObjectForm';

const CreateObject = () => {
  return (
    <>
    <h4 className={styles.createObject__title}>This is CreateObject page!</h4>
    <CreateObjectForm />
    </>
    

  )
}
export default CreateObject;