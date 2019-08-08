<template>
  <div class="about">
    <h1>All Employees</h1>
    <div class="space"></div>

    <a-table :columns="columns" :dataSource="data" @change="onChange">
      <span slot="action" slot-scope="text, record">
      <a href="javascript:;" @click="showModal(record.lastname)">Pay 一 {{record.lastname}}</a>
    </span>

    </a-table>

    <a-modal
      :title="pay"
      :visible="visible"
      @ok="handleOk"
      :confirmLoading="confirmLoading"
      @cancel="handleCancel"
    >
      <p></p>

      <a-form-item
        v-bind="formItemLayout"
        label="Amount (Ghs)"
      >
        <a-input
          v-decorator="[
            'amount',
            {
              rules: [{ required: true, message: 'Please input employee pay amount!', whitespace: true }]
            }
          ]"
        />
      </a-form-item>


    </a-modal>

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
const columns = [
{
  title: 'ID',
  dataIndex: 'key',
  sorter: (a, b) => a.age - b.age,
},{
  title: 'Last Name',
  dataIndex: 'lastname',
},{
  title: 'First Name',
  dataIndex: 'firstname',
},{
  title: 'Middle Name',
  dataIndex: 'middlename',
},{
  title: 'Gender',
  dataIndex: 'gender',
},{
  title: 'Birthday',
  dataIndex: 'birthday',
}, {
  title: 'Age',
  dataIndex: 'age',
  sorter: (a, b) => a.age - b.age,
}, {
  title: 'Birth Place',
  dataIndex: 'birthplace',
}, {
  title: 'Address',
  dataIndex: 'address',
  filters: [{
    text: 'London',
    value: 'London',
  }, {
    text: 'New York',
    value: 'New York',
  }],
  filterMultiple: false,
  onFilter: (value, record) => record.address.indexOf(value) === 0,
  sorter: (a, b) => a.address.length - b.address.length,
}, {
  title: 'Contact No',
  dataIndex: 'contactno',
}, {
  title: 'Position',
  dataIndex: 'position',
}, {
  title: 'Date Hired',
  dataIndex: 'datehired',
}, {
  title: 'Status',
  dataIndex: 'status',
}, {
  title: 'Action',
  key: 'action',
  scopedSlots: { customRender: 'action' },
}

];

const data = [{
  key: '1',
  lastname: 'Mega',
  firstname: 'Litto',
  middlename: 'Champion',
  gender: 'antoine',
  birthday: '5/24/1994',
  age: 25,
  birthplace: "New York City",
  address: 'New York No. 1 Lake Park',
  contactno: '+233269056873',
  position: 'IT Specialist',
  datehired: '5/24/2018',
  status: 'active',

}, {
  key: '2',
  lastname: 'John',
  firstname: 'Brown',
  middlename: 'antoine',
  gender: 'antoine',
  birthday: '5/24/1994',
  age: 25,
  birthplace: "New York City",
  address: 'London No. 2 Lake Park',
  contactno: '+233269056873',
  position: 'IT Specialist',
  datehired: '5/24/2018',
  status: 'active',
}, {
  key: '3',
  lastname: 'Joe',
  firstname: 'Black',
  middlename: 'James',
  gender: 'antoine',
  birthday: '5/24/1994',
  age: 25,
  birthplace: "New York City",
  address: 'Sidney No. 1 Lake Park',
  contactno: '+233269056873',
  position: 'IT Specialist',
  datehired: '5/24/2018',
  status: 'active',
}, {
  key: '4',
  lastname: 'Anthony',
  firstname: 'Joshua',
  middlename: 'Nana',
  gender: 'antoine',
  birthday: '5/24/1994',
  age: 25,
  birthplace: "New York City",
  address: 'Sidney No. 1 Lake Park',
  contactno: '+233269056873',
  position: 'IT Specialist',
  datehired: '5/24/2018',
  status: 'active',
}];

function onChange(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter);
}


export default {
  data() {
    return {
      data,
      columns,
      ModalText: 'Content of the modal',
      visible: false,
      confirmLoading: false,
      pay: '',
    }
  },
  methods: {
    onChange,
    showModal(lastname) {
      this.visible = true
      this.pay = "Pay " + lastname;
    },
    handleOk(e) {
      this.ModalText = 'The modal will be closed after two seconds';
      this.confirmLoading = true;
      setTimeout(() => {
        this.visible = false;
        this.confirmLoading = false;
      }, 2000);
    },
    handleCancel(e) {
      console.log('Clicked cancel button');
      this.visible = false
    },
  }
}
</script>