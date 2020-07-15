import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import "@ventrata/checkout/dist/esm";

const Comp = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            maxWidth: "400px",
            padding: "20px",
          }}
        >
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
            quam vel nibh consequat posuere. Sed laoreet dictum malesuada. Proin
            magna nunc, congue ut convallis ac, porta et risus. Aenean egestas
            nisi a tortor luctus efficitur. In fermentum velit eget pharetra
            ultricies. Mauris auctor porttitor felis, vel pellentesque tortor
            ultricies vitae. Morbi elementum sapien turpis, id commodo diam
            laoreet nec. Aenean cursus nibh ut magna aliquet egestas. Donec vel
            elit scelerisque, finibus quam id, sagittis felis. Aenean mauris
            metus, luctus ut urna eget, tempor mollis augue. Donec eget bibendum
            turpis. Duis eu diam eget orci imperdiet varius. Pellentesque
            consequat turpis at nibh feugiat mollis. Duis euismod, neque a
            placerat tempus, risus sem rhoncus tortor, quis aliquet dolor eros
            eget lacus. In volutpat sem quis dolor rhoncus malesuada. Aenean non
            sagittis leo. Fusce condimentum rutrum ex vel porta. Integer quis
            justo id nulla volutpat placerat. In ultricies condimentum mauris,
            sed sodales lorem scelerisque at. Morbi nec viverra lacus. Etiam
            eget sagittis purus, at pulvinar arcu. In porttitor aliquam eros
            eget vestibulum. Vestibulum ullamcorper, mauris vitae rutrum
            placerat, neque nibh consectetur risus, et dignissim metus justo sed
            est. Sed dapibus molestie velit, vel venenatis purus. Duis lobortis
            tempor dui, nec consectetur metus dignissim quis. In vel felis id
            quam feugiat egestas id id nunc. Duis sed dolor et ligula pharetra
            lobortis non quis sapien. Morbi quis pulvinar nisi, sed mollis
            ligula. Cras quis massa non enim varius rutrum eget in nunc. In diam
            augue, fringilla eu odio id, fermentum rutrum nibh. Ut at
            scelerisque arcu. Proin pulvinar sapien ut erat fringilla, ut cursus
            urna varius. Fusce finibus vulputate scelerisque. Integer ac
            dignissim enim, id viverra massa. Integer tellus augue, cursus eu
            erat nec, dignissim hendrerit dolor. Mauris sagittis leo sit amet
            fermentum imperdiet. Suspendisse in porttitor neque, nec malesuada
            elit. In vitae luctus ipsum. Suspendisse sapien magna, sagittis ut
            turpis nec, ultrices pharetra velit. Nunc suscipit varius augue a
            gravida. Suspendisse ut nisi porta, aliquet nisl nec, luctus nisl.
            Pellentesque non est et magna tristique ullamcorper. Duis
            consectetur placerat dignissim. Nullam eu tincidunt leo. Vestibulum
            dictum nulla tellus, vitae consequat orci tempor vel. Aenean commodo
            mi et luctus rhoncus. Cras sit amet interdum est. Praesent nec
            ligula lacus. Curabitur fringilla mauris viverra nisi fermentum, in
            tempus ligula euismod. Sed mollis dui non fermentum fringilla. Morbi
            nec libero lorem. Phasellus quis pharetra enim, non gravida ex.
            Etiam in rhoncus turpis. Phasellus ultrices, purus sit amet varius
            sodales, nulla erat sollicitudin elit, nec condimentum metus ipsum
            at lectus. Cras eget eros eget turpis aliquam placerat. Sed
            condimentum ipsum pretium mauris aliquet dictum. Phasellus consequat
            arcu libero, nec fermentum turpis luctus at. Integer in vulputate
            neque. Etiam sapien odio, consectetur nec tincidunt non, rutrum ut
            nibh. Donec vel sem a ex euismod blandit. Nam pharetra dui tortor,
            id auctor urna facilisis vitae. Pellentesque sodales dolor eu turpis
            viverra, id eleifend felis scelerisque. In ac elit nec tortor rutrum
            convallis. Maecenas hendrerit eget tortor a dignissim. Etiam
            pellentesque at neque non placerat. Curabitur gravida ipsum id enim
            vulputate dapibus. Vivamus iaculis ultrices libero sed viverra.
            Quisque nulla purus, volutpat id libero ac, auctor posuere arcu. Ut
            ex nibh, fringilla et porta vel, tempus id ligula. Nulla in ex ac
            lacus mattis consequat ac et nisl. Integer eu facilisis lectus.
            Proin ante enim, ornare cursus consequat eget, eleifend vel risus.
            Fusce non mattis ligula. Sed posuere ligula nec dolor tempor
            maximus. Suspendisse potenti. Donec posuere erat nibh, in porttitor
            felis sagittis ut. Sed fermentum sollicitudin leo, ac tincidunt ante
            condimentum eget. Curabitur fermentum elit elit, eu hendrerit elit
            sodales id. In condimentum tincidunt lorem. Nunc euismod dui diam,
            ut vehicula nibh dictum id. Aliquam eu erat urna. Duis faucibus at
            augue et condimentum. Donec eget nisl dapibus velit viverra
            imperdiet vel sit amet mi. Integer sit amet est eget arcu pharetra
            vestibulum id ut massa. Morbi auctor turpis justo, sed imperdiet
            augue scelerisque eu. Duis scelerisque nulla id mauris viverra, sit
            amet scelerisque sapien congue. Nulla et mattis dolor, in eleifend
            erat. Duis eget gravida ligula. Integer consectetur nulla nunc, in
            vestibulum urna pretium in. Nulla vestibulum pretium libero, quis
            tincidunt lectus congue in. Donec quis aliquet lorem. Nunc sit amet
            pulvinar velit, nec sodales quam. Suspendisse potenti. Phasellus
            tincidunt rhoncus massa sit amet pretium. Aliquam erat volutpat.
            Praesent condimentum pulvinar sem vel euismod. Nullam in odio
            euismod libero vestibulum ultricies id et dui. Cras quis odio arcu.
            Suspendisse tincidunt in magna ultrices sagittis. Phasellus varius
            ligula quis quam rhoncus, eu porttitor mi blandit. Proin vehicula
            varius condimentum. Integer lectus odio, lacinia at diam ut, congue
            maximus lectus. Etiam at gravida libero. Pellentesque pharetra
            tortor eu viverra pretium. Mauris massa lacus, venenatis ut
            fringilla at, accumsan id est. Nam quis semper lacus. Quisque ut
            tortor rutrum, pellentesque tortor et, imperdiet sem. Aenean blandit
            egestas risus, sit amet ornare nibh gravida quis. Quisque id nulla
            eu nunc rhoncus sollicitudin. In eget sollicitudin odio. Vivamus
            posuere congue ipsum, nec luctus enim auctor nec. Sed bibendum
            imperdiet sem, eu ultrices neque luctus id. Vivamus sit amet lacus
            vestibulum, tempor sapien quis, dictum eros. Integer accumsan justo
            sit amet lectus consectetur efficitur. Donec sit amet fermentum sem.
            Aliquam sed elementum magna. Sed consectetur mattis odio quis
            accumsan. Donec auctor diam et tortor consectetur, a aliquam purus
            gravida. Praesent eu aliquam felis. Nulla eu mauris eu neque
            tincidunt euismod eu sit amet nulla. Vestibulum placerat in lacus
            vel consectetur. Nunc sit amet ex lorem. Aenean a pharetra nibh, sed
            laoreet arcu. Vestibulum id sapien fringilla, varius odio ut, mattis
            lectus. Ut vel dolor blandit risus porttitor molestie et at diam.
            Mauris porttitor risus id aliquam maximus. Fusce nec nibh sed ante
            gravida posuere non nec sem. Duis dapibus molestie nulla eu sodales.
            Proin sollicitudin et nulla in viverra. Aliquam euismod vulputate
            nisi, in congue risus pellentesque quis. Donec facilisis dui ac nisl
            condimentum, ac aliquet velit egestas. Donec ut vestibulum enim.
            Vestibulum nulla arcu, pulvinar at volutpat volutpat, accumsan ut
            velit. Duis tincidunt libero sed egestas tempor. Vivamus tristique
            ante tellus, eget convallis lacus aliquet sit amet. Praesent at arcu
            sed nulla posuere sollicitudin. Sed gravida ante enim, in interdum
            tortor vulputate a. Sed feugiat enim ut velit tempus venenatis.
            Integer eget faucibus nunc, ac gravida erat. Proin risus nisl,
            molestie ut pharetra eu, ornare quis urna. Nullam non rutrum mauris.
            Pellentesque in iaculis nulla, eu hendrerit arcu. Etiam sit amet
            pretium dolor. Praesent tincidunt diam vitae turpis commodo
            imperdiet. Maecenas viverra, odio interdum pulvinar porttitor, ex
            eros convallis ligula, et ullamcorper urna massa sed odio. Sed ut
            sem nunc. Aliquam mi elit, auctor nec posuere vitae, faucibus ut
            leo. Nam ornare fringilla risus at venenatis. Vestibulum magna diam,
            condimentum quis rutrum vel, consequat vel eros. Duis iaculis mi
            eget justo sodales molestie. Morbi vel euismod nisi, non maximus
            sem. Aenean fringilla, urna eu lacinia tempor, nulla tortor
            sollicitudin nisl, sit amet finibus nulla nisl id ante. In hac
            habitasse platea dictumst. Aliquam quis arcu hendrerit arcu volutpat
            posuere nec vitae est. Integer mollis ipsum id diam gravida, quis
            faucibus arcu sodales. Maecenas sit amet quam quis diam facilisis
            ornare. Sed sed tortor scelerisque, tristique diam aliquet, placerat
            justo. Vivamus laoreet nisl nunc, nec pharetra turpis fringilla
            efficitur. Suspendisse condimentum tempus lectus, sit amet ultrices
            justo aliquam eget. Maecenas at vehicula odio. Aliquam ullamcorper
            finibus metus, vitae viverra nibh pellentesque ac. Quisque laoreet
            in ex eleifend eleifend. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Vivamus eu turpis
            eleifend, fermentum ex ac, ultricies enim. Phasellus mollis vitae
            turpis in pharetra. Aliquam erat volutpat. Aliquam semper augue vel
            odio hendrerit ullamcorper. Sed aliquam feugiat est, at imperdiet
            ante. Maecenas eu justo ut nisi tristique vulputate. Donec at
            venenatis diam, non malesuada eros. In at posuere lectus. Donec eget
            eros sodales, tempus ligula in, tristique libero. Morbi eu consequat
            dui, quis placerat ligula. Cras bibendum lectus vitae libero
            accumsan placerat. In bibendum sem at ante euismod fringilla. Etiam
            eu sem eu lorem molestie feugiat. Phasellus vestibulum in mi nec
            pharetra. Integer non augue tincidunt, egestas arcu et, imperdiet
            orci. Duis vestibulum elit et commodo pretium. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Nunc at nisl et mauris
          </p>
        </div>
        <div style={{ padding: "20px" }}>
          <ventrata-checkout
            product="44c797ef-4197-49d2-94c0-824e0aa70ecf"
            token="45d4f9e9-c649-4a74-87e3-63c3fd3ecb04"
          ></ventrata-checkout>
        </div>
      </div>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Comp />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
