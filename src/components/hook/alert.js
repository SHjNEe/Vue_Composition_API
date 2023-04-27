// import { ref } from "vue";
function useAlert() {
  //   const message = ref(text);
  function showAlert(text) {
    alert(text);
  }
  return {
    showAlert,
  };
}
export default useAlert;
