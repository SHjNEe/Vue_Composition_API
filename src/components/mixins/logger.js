import useAlert from "../hook/alert";
const { showAlert } = useAlert("Hello");

export default {
  mounted() {
    console.log("Component Mounted");
  },
  methods: {
    show(text) {
      showAlert(text);
    },
  },
};
