<template>
  <div class="about">
    <h1>Fill the form to add new employee</h1>

    <div>
      <div class="space"></div>
      <a-row>
        <a-col :span="12" :offset="6">
          <!-- beginninng -->

          <a-form
            :form="form"
            @submit="handleSubmit"
          >

            <a-form-item
              v-bind="formItemLayout"
              label="Last Name"
            >
              <a-input
                v-decorator="[
                  'lastname',
                  {
                    rules: [{ required: true, message: 'Please input employee Last Name!', whitespace: true }]
                  }
                ]"
              />
            </a-form-item>


            <a-form-item
              v-bind="formItemLayout"
              label="First Name"
            >
              <a-input
                v-decorator="[
                  'firstname',
                  {
                    rules: [{ required: true, message: 'Please input employee First Name!', whitespace: true }]
                  }
                ]"
              />
            </a-form-item>

            <a-form-item
              v-bind="formItemLayout"
              label="Middle Name"
            >
              <a-input
                v-decorator="[
                  'middlename',
                  {
                    rules: [{ required: false, message: 'Please input employee Middle Name!', whitespace: true }]
                  }
                ]"
              />
            </a-form-item>

            <a-form-item
              v-bind="formItemLayout"
              label="Gender"
            >
              <a-select
                v-decorator="[
                  'gender',
                  {rules: [{ required: true, message: 'Please select employee gender!' }]}
                ]"
                placeholder="Select an option!"
                @change="handleSelectChange"
              >
                <a-select-option value="male">
                  male
                </a-select-option>
                <a-select-option value="female">
                  female
                </a-select-option>
              </a-select>
            </a-form-item>

            <a-form-item
              v-bind="formItemLayout"
              label="Date of Birth"
            >
              <a-date-picker class="date" 
                v-decorator="[
                  'dateofbirth',
                   {rules: [{required: true, message: 'Please provide employee date of birth!'}]}]" />
            </a-form-item>

            <a-form-item
              v-bind="formItemLayout"
              label="Birth Place"
            >
              <a-input
                v-decorator="[
                  'birthplace',
                  {
                    rules: [{ required: true, message: 'Please input employee place of birth!', whitespace: true }]
                  }
                ]"
              />
            </a-form-item>

            <a-form-item
              v-bind="formItemLayout"
              label="Address"
            >
              <a-input
                v-decorator="[
                  'address',
                  {
                    rules: [{ required: true, message: 'Please input employee address!', whitespace: true }]
                  }
                ]"
              />
            </a-form-item>

            <a-form-item
              v-bind="formItemLayout"
              label="Contact Phone"
            >
              <a-input
                v-decorator="[
                  'contact',
                  {
                    rules: [{ required: true, message: 'Please input employee number!', whitespace: true }]
                  }
                ]"
              />
            </a-form-item>

            <a-form-item
              v-bind="formItemLayout"
              label="Position"
            >
              <a-select
                v-decorator="[
                  'position',
                  {rules: [{ required: true, message: 'Please select employee position!' }]}
                ]"
                placeholder="Select a position"
                @change="handleSelectChange"
              >
                <a-select-option value="IT Specialist">
                  IT Specialist
                </a-select-option>
                <a-select-option value="Accountant">
                  Accountant
                </a-select-option>
                <a-select-option value="Secretary">
                  Secretary
                </a-select-option>
              </a-select>
            </a-form-item>

            <a-form-item
              v-bind="formItemLayout"
              label="Date Hired"
            >
              <a-date-picker class="date" 
                v-decorator="[
                  'dateHired',
                   {rules: [{required: true, message: 'Please provide date employee was hired!'}]}]" />
            </a-form-item>

            <a-form-item
              v-bind="formItemLayout"
              label="Status"
            >
              <a-select
                v-decorator="[
                  'status',
                  {rules: [{ required: true, message: 'Please select employee position!' }]}
                ]"
                placeholder="Select a status"
                @change="handleSelectChange"
              >
                <a-select-option value="Active">
                  Active
                </a-select-option>
                <a-select-option value="Suspended">
                  Suspended
                </a-select-option>
                <a-select-option value="Inactive">
                  Inactive
                </a-select-option>
              </a-select>
            </a-form-item>












            <a-form-item v-bind="tailFormItemLayout">
              <a-button
                type="primary"
                html-type="submit"
              >
                Register
              </a-button>
            </a-form-item>
          </a-form>


          <!-- end -->
        </a-col>
      </a-row>
    </div>


    
  </div>


</template>

<style type="text/css" scoped>
  .space{
    height: 50px;
  }
  h1{
    display: block;
    text-align: center;
  }
</style>

<script>
const residences = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];

export default {
  data () {
    return {
      confirmDirty: false,
      residences,
      autoCompleteResult: [],
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      },
      tailFormItemLayout: {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      },
    };
  },
  beforeCreate () {
    this.form = this.$form.createForm(this);
  },
  methods: {
    handleSubmit  (e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    handleConfirmBlur  (e) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value;
    },
    compareToFirstPassword  (rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    },
    validateToNextPassword  (rule, value, callback) {
      const form = this.form;
      if (value && this.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    },
    handleWebsiteChange  (value) {
      let autoCompleteResult;
      if (!value) {
        autoCompleteResult = [];
      } else {
        autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
      }
      this.autoCompleteResult = autoCompleteResult;
    },
  },
};
</script>