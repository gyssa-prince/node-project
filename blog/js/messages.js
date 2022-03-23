let Messages = document.querySelector('#tb1');

var tbody = document.getElementById('tb1');

                            function AddItemTotable(doc){
                                let trow = document.createElement("tr");
                                let td1 = document.createElement('td');
                                let td2 = document.createElement('td');
                                let td3 = document.createElement('td');

                                td1.innerHTML=doc.date;
                                td2.innerHTML= doc.Email;
                                td3.innerHTML= doc.Message;
 
                                trow.appendChild(td1);
                                trow.appendChild(td2);
                                trow.appendChild(td3);

                                tbody.appendChild(trow);

                            }
                            fetch('https://gyssablog.herokuapp.com/message',{method: "GET",
                            headers:{
                                'Content-Type': 'application/json',
                                'auth-token':localStorage.getItem("auth-token") 
                            }}).then((data)=>{

                                return data.json();
                                }).then((completedata)=>{
                                    for(let i=0;i<completedata.length;i++){
                                        AddItemTotable(completedata[i]);
                                }
                                }).catch((err)=>{
                                    console.log(err);
                                })