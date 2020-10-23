<template>
  <div>
    <Navbar />
    <div class="main-content">
      <AsideLeft class="aside-left" />
      <div class="content">
        <div class="main-content">
          <main>
            <!-- Content -->
            <div class="content">
              <!-- Card History -->
              <div class="card-history">
                <div class="today-income">
                  <span class="circle1"></span>
                  <span class="circle2"></span>
                  <span class="circle3"></span>
                  <span class="info1">Today's Income</span>
                  <span class="info2" v-for="(histories, index) in isSetHistory[1]" :key="index">
                    <span v-if="histories.length < 1">Tidak ada pemasukan</span>
                    <span>{{histories.amountDate}}</span>
                  </span>
                  <span class="info3">+2% Yesterday</span>
                </div>
                <div class="order">
                  <span class="circle1"></span>
                  <span class="circle2"></span>
                  <span class="circle3"></span>
                  <span class="info1">Order</span>
                  <span class="info2" v-for="(histories, index) in isSetHistory[2]" :key="index">
                    <span v-if="histories.length < 1">Tidak ada pemasukan</span>
                    <span>{{histories.amountMonth}}</span>
                  </span>
                  <span class="info3">+5% Last Week</span>
                </div>
                <div class="year-income">
                  <span class="circle1"></span>
                  <span class="circle2"></span>
                  <span class="circle3"></span>
                  <span class="info1">year's Income</span>
                  <span class="info2" v-for="(histories, index) in isSetHistory[3]" :key="index">
                    <span v-if="histories.length < 1">Tidak ada pemasukan</span>
                    <span>{{histories.amountYear}}</span>
                  </span>
                  <span class="info3">+10% Last Year</span>
                </div>
              </div>
              <!-- End Card History -->

              <!-- Graphic history -->
              <div class="graphic-history">
                <div class="graphic-history-item">
                  <span class="title">Revenue</span>
                  <!-- DropDown History Month Income -->
                  <div class="dropdown">
                    <button
                      class="btn dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Month Income
                    </button>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a class="dropdown-item" href="#">This Month</a>
                      <a class="dropdown-item" href="#">Last Month</a>
                    </div>
                  </div>
                </div>
                <div class="graphic-curva">
                  <span class="num">50k</span>
                  <span class="line1"></span>
                  <span class="num">40k</span>
                  <span class="line2"></span>
                  <span class="num">30k</span>
                  <span class="line3"></span>
                  <span class="num">20k</span>
                  <span class="line4"></span>
                  <span class="num">10k</span>
                  <span class="line5"></span>
                  <span class="num">0</span>
                  <span class="line6"></span>
                  <div class="img-line1"></div>
                  <div class="img-line2"></div>
                </div>
              </div>
              <!-- End Graphic history -->

              <!-- Date History -->
              <div class="date-history">
                <div class="title-history">
                  <span class="title">Recent Order</span>
                  <!-- DropDown History Today Income-->
                  <div class="dropdown">
                    <button
                      class="btn dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Day Income
                    </button>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a class="dropdown-item">Today</a>
                      <a class="dropdown-item">This Week</a>
                      <a class="dropdown-item">This Month</a>
                    </div>
                  </div>
                </div>
                <!-- Table Looping Data History -->
                <table class="table">
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">INVOICES</th>
                    <th scope="col">CASHIER</th>
                    <th scope="col">DATE</th>
                    <th scope="col">ORDERS</th>
                    <th scope="col">AMOUNT</th>
                  </tr>
                  <tbody>
                    <tr v-for="histories in isSetHistory[0]" :key="histories.id">
                      <th scope="row">{{ histories.id }}</th>
                      <td>{{ histories.invoice }}</td>
                      <td>{{ histories.cashier }}</td>
                      <td>{{ histories.date }}</td>
                      <td>{{ histories.orders }}</td>
                      <td>Rp. {{ histories.amount }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- End Date History -->
            </div>
            <!-- End Content -->
            <!-- End Of Main -->
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/navbar'
import AsideLeft from '../../../components/_base/Aside-left'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'History',
  data () {
    return {
    }
  },
  components: {
    Navbar,
    AsideLeft
  },
  methods: {
    ...mapActions(['getHistory'])
  },
  computed: mapGetters({
    isSetHistory: 'isSetHistory'
  }),
  mounted () {
    this.getHistory()
  }
}
</script>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
}

.main-content {
  display: flex;
  flex-direction: row;

  overflow: scroll;
}

.main-content::-webkit-scrollbar {
  display: none;
}

.aside-left {
  flex: 0.5;
}

/* Start Main */
main {
  /* border: 1px solid black; */
  width: 100%;
  height: inherit;
  box-sizing: border-box;
  display: flex;
  flex: 1;
  /* margin-left: -20px; */
}

/* Main content */
.content {
  /* border: 1px solid black; */
  flex: 7.84;
  box-sizing: border-box;
  background-color: #f1f1f1;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
  align-items: center;
}

/* Card History */
.card-history {
  /* border: 1px solid black; */
  width: 1200px;
  height: 240px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.card-history .today-income {
  /* border: 1px solid black; */
  border-radius: 10px;
  width: 350px;
  height: 200px;

  background: linear-gradient(
    285.38deg,
    #fbb2b4 30.05%,
    rgba(255, 143, 178, 0) 133.19%
  );
  filter: drop-shadow(10px 15px 10px rgba(255, 143, 178, 0.25));
}

.today-income span.info1 {
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  position: absolute;
  left: 30px;
  top: 60px;
}

.today-income span.info2 {
  font-family: 'Poppins', sans-serif;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 0.03em;

  position: absolute;
  left: 30px;
  top: 80px;
}

.today-income span.info3 {
  font-family: 'work sans', sans-serif;
  font-size: 14px;
  font-weight: bold;

  position: absolute;
  left: 30px;
  top: 130px;
}

.circle1 {
  /* border: 1px solid black; */
  display: inline-block;
  background: rgba(253, 211, 228, 0.3);
  width: 75px;
  height: 75px;
  border-radius: 40px;
  margin-left: 215px;
  margin-top: 50px;

  box-sizing: border-box;
}

.circle2 {
  /* border: 1px solid black; */
  display: inline-block;
  background: rgba(253, 211, 228, 0.3);
  width: 75px;
  height: 75px;
  border-radius: 40px;
  margin-left: -45px;
  margin-bottom: 30px;

  box-sizing: border-box;
}

.circle3 {
  /* border: 1px solid black; */
  display: inline-block;
  background: rgba(253, 211, 228, 0.3);
  width: 75px;
  height: 75px;
  border-radius: 40px;
  margin-left: -65px;
  margin-bottom: 40px;
  box-sizing: border-box;
}

.card-history .order {
  /* border: 1px solid black; */
  border-radius: 10px;
  width: 350px;
  height: 200px;

  background: linear-gradient(
    285.38deg,
    #29dfff 30.05%,
    rgba(41, 223, 255, 0) 133.19%
  );
  filter: drop-shadow(10px 15px 10px rgba(41, 223, 255, 0.25));
}

.order span.info1 {
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  position: absolute;
  left: 30px;
  top: 60px;
}

.order span.info2 {
  font-family: 'work sans', sans-serif;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 0.03em;

  position: absolute;
  left: 30px;
  top: 80px;
}

.order span.info3 {
  font-family: 'work sans', sans-serif;
  font-size: 14px;
  font-weight: bold;

  position: absolute;
  left: 30px;
  top: 130px;
}

.card-history .year-income {
  /* border: 1px solid black; */
  border-radius: 10px;
  width: 350px;
  height: 200px;

  background: linear-gradient(
    285.38deg,
    #ab84c8 30.05%,
    rgba(241, 201, 236, 0) 133.19%
  );
  filter: drop-shadow(10px 15px 10px rgba(241, 201, 236, 0.25));
  border-radius: 10px;
}

.year-income span.info1 {
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  position: absolute;
  left: 30px;
  top: 60px;
}

.year-income span.info2 {
  font-family: 'work sans', sans-serif;
  font-size: 30px;
  font-weight: bold;

  position: absolute;
  left: 30px;
  top: 80px;
}

.year-income span.info3 {
  font-family: 'work sans', sans-serif;
  font-size: 14px;
  font-weight: bold;

  position: absolute;
  left: 30px;
  top: 130px;
}

/* End Of Card History */

/* ====================================================================== */

/* Grafik history */
.graphic-history {
  /* border: 1px solid black; */
  width: 1130px;
  height: 450px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 10px;

  background: #ffffff;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
}

.graphic-history-item {
  /* border: 1px solid black; */
  width: 1000;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  margin: 20px 15px 0px 15px;
}

.graphic-history-item .title {
  /* border: 1px solid black; */
  font-family: 'Nunito', sans-serif;
  font-size: 25px;
  font-weight: bolder;
}

.graphic-history-item .month {
  /* border: 1px solid black; */
  width: 65px;
  height: 20px;
  padding-top: 4px;
  background: #cecece;
  border-radius: 5px;
}

.graphic-curva {
  /* border: 1px solid black; */
  width: 100%;
  flex: 1;
  height: 300px;
  overflow: scroll;
}

.graphic-curva .num {
  display: inline-block;
  margin-top: 30px;
  margin-left: 20px;
}

.graphic-curva .line1 {
  border: 1px solid #cecece;

  font-family: 'Nunito', sans-serif;
  height: 0;
  width: 1050px;
  margin-left: 10px;
  display: inline-block;
  margin-top: 50px;
  margin-bottom: 3px;
}

.graphic-curva .line2 {
  border: 1px solid #cecece;

  font-family: 'Nunito', sans-serif;
  height: 0;
  width: 1050px;
  margin-left: 10px;
  display: inline-block;
  margin-top: 50px;

  margin-bottom: 3px;
}

.graphic-curva .line3 {
  border: 1px solid #cecece;

  font-family: 'Nunito', sans-serif;
  height: 0;
  width: 1050px;
  margin-left: 10px;
  display: inline-block;
  margin-top: 50px;

  margin-bottom: 3px;
}

.graphic-curva .line4 {
  border: 1px solid #cecece;

  font-family: 'Nunito', sans-serif;
  height: 0;
  width: 1050px;
  margin-left: 10px;
  display: inline-block;
  margin-top: 50px;

  margin-bottom: 3px;
}

.graphic-curva .line5 {
  border: 1px solid #cecece;

  font-family: 'Nunito', sans-serif;
  height: 0;
  width: 1050px;
  margin-left: 10px;
  display: inline-block;
  margin-top: 50px;

  margin-bottom: 3px;
}

.graphic-curva .line6 {
  border: 1px solid #cecece;

  font-family: 'Nunito', sans-serif;
  height: 20;
  width: 1050px;
  margin-left: 25px;
  display: inline-block;
  margin-top: 50px;

  margin-bottom: 3px;
}

/* End Of Grafik History */

/* Date History */
.date-history {
  /* border: 1px solid black; */
  width: 1130px;
  height: 400px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);

  overflow: scroll;
}

.date-history::-webkit-scrollbar {
  display: none;
}

.title-history {
  display: flex;
  justify-content: space-between;
}
.date-history .title {
  /* border: 1px solid black; */
  font-family: 'Nunito', sans-serif;
  font-size: 25px;
  height: max-content;
  font-weight: bolder;
  margin: 20px 0px 0px 20px;

  position: relative;
  top: -10px;
}

.dropdown .btn.dropdown-toggle {
  background-color: #cecece;
  margin: 10px 10px 0px 0px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
}
/* End Of Struc */

/* Style Tabel looping */
.table {
  /* border: 1px solid black; */
  text-align: center;
  width: 96%;
  margin: 10px auto;
}
/* End of Date History */
</style>
