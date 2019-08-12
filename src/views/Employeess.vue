<template>
  <div>

      <!-- <a href="javascript:;" @click="showModal()">Pay</a> -->
      <div class="space"></div>
      <div class="center">
        <a-button type="primary" @click="showModal()">Pay</a-button>
      </div>
      <div class="space"></div>


    
    <a-table :columns="columns" :dataSource="data" :rowSelection="rowSelection" @change="onChange">

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
  .center{
    display: block;
    text-align: center;
  }
  .space{
    height: 20px;
  }
</style>

<script>
const columns = [
{
  title: 'ID',
  dataIndex: 'key',
  key: 'key',
},{
  title: 'Last Name',
  dataIndex: 'lastname',
  key: 'lastname',

},{
  title: 'First Name',
  dataIndex: 'firstname',
  key: 'firstname'
},{
  title: 'Middle Name',
  dataIndex: 'middlename',
  key: 'middlename'

},{
  title: 'Gender',
  dataIndex: 'gender',
  key: 'gender'

},{
  title: 'Birthday',
  dataIndex: 'birthday',
  key: 'birthday'

}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Birth Place',
  dataIndex: 'birthplace',
  key: 'birthplace'

}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'Contact No',
  dataIndex: 'contactno',
  key: 'contactno',

}, {
  title: 'Position',
  dataIndex: 'position',
  key: 'position',

}, {
  title: 'Date Hired',
  dataIndex: 'datehired',
  key: 'datehired',

}, {
  title: 'Status',
  dataIndex: 'status',
  key: 'status',
  
},

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

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
};

export default {
  data() {
    return {
      data,
      columns,
      rowSelection,
      ModalText: 'Content of the modal',
      visible: false,
      confirmLoading: false,
      pay: '',
    }
  },
  methods: {
    // onChange,
    showModal() {
      this.visible = true
      this.pay = "Pay";
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