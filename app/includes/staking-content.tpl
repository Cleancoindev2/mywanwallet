<!-- Content -->
<div class="col-sm-8">

  <!-- If unlocked with PK -->
  <article class="block" ng-hide="wallet.type=='addressOnly'">
    <p>

      Stake your Wan using MyWanWallet! Note: The ChainLayer Validator is operated by the creator of MyWanWallet and WanMask: Tyrion70. You can find more info on
      <img class="validatorIcon" src="data:image/png;base64,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">
      ChainLayer <a href="https://chainlayer.io" target="_blank" rel="noopener noreferrer">here</a>
    </p>

    <!-- Validator Dropdown -->
    <section class="row form-group">
        <div class="col-sm-11 clearfix">
            <label translate="STAKING_Title_2">
                Select Validator
            </label>

            <div class="dropdown ">
                <a class="btn btn-default dropdown-toggle "
                   class="dropdown-toggle"
                   style="background-color: white;"
                   ng-click="dropdownExistingValidators = !dropdownExistingValidators">
                    <img class="validatorIcon" ng-src="{{validator.logo}}" ng-show="validator.logo && validator.logo!=''"/>
                    <img class="validatorIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgDTD2qgAAAAASUVORK5CYII=" ng-hide="validator.logo && validator.logo!=''"/>
                    {{selectedValidator.name}} (Capacity left: {{selectedValidator.leftovercapacity}})
                    <i class="caret"></i>
                </a>

                <ul class="dropdown-menu dropdown-menu-left" ng-show="dropdownExistingValidators">
                    <li ng-repeat="validator in ajaxReq.validatorList track by $index">
                        <a ng-click="selectExistingValidator($index)">
                            <img class="validatorIcon" ng-src="{{validator.logo}}" ng-show="validator.logo && validator.logo!=''"/>
                            <img class="validatorIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgDTD2qgAAAAASUVORK5CYII=" ng-hide="validator.logo && validator.logo!=''"/>
                            {{validator.name}} (Capacity left: {{validator.leftovercapacity}})
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <!-- Validator Info -->
    <div class="row"><div class="col-sm-4 clearfix">Validator Self Stake:</div>
    <div class="col-sm-2 clearfix" style="text-align:right">{{selectedValidator.selfstake}}</div></div>
    <div class="row"><div class="col-sm-4 clearfix">Validator Total Stake:</div>
    <div class="col-sm-2 clearfix" style="text-align:right">{{selectedValidator.totalstake}}</div></div>
    <div class="row"><div class="col-sm-4 clearfix">Validator Total Capacity:</div>
    <div class="col-sm-2 clearfix" style="text-align:right">{{selectedValidator.capacity}}</div></div>
    <div class="row"><div class="col-sm-4 clearfix">Validator Remaining Capacity:</div>
    <div class="col-sm-2 clearfix" style="text-align:right">{{selectedValidator.leftovercapacity}}</div></div>
    <div class="row"><div class="col-sm-4 clearfix">Fee:</div>
    <div class="col-sm-2 clearfix" style="text-align:right">{{selectedValidator.feestring}}</div></div>

    <!-- Validator Address -->
    <section class="row form-group">
        <address-field labeltranslated="STAKING_Title" var-name="validator.address">{{selectedValidator.address}}</address-field>
    </section>

    <!-- Amount to Send -->
    <section class="row form-group">
        <div class="col-sm-11 clearfix">
            <a class="account-help-icon"
                href="#">
                <img src="images/icon-help.svg" class="help-icon" />
                <p class="account-help-text" translate="STAKE_Amount_Desc"></p>
            </a>
            <label translate="STAKE_amount">
                Amount to Stake (Min 100 for new delegation)
            </label>

            <input type="text"
                class="form-control"
                placeholder="{{ 'SEND_amount_short' | translate }}"
                ng-model="tx.value"
                ng-disabled="tx.readOnly || checkTxReadOnly"
                ng-class="Validator.isPositiveNumber(tx.value) ? 'is-valid' : 'is-invalid'"/>
        </div>
    </section>


    <!-- Gas Limit -->
    <section class="row form-group">
        <div class="col-sm-11 clearfix">
            <a class="account-help-icon"
                href="#">
                <img src="images/icon-help.svg" class="help-icon" />
                <p class="account-help-text" translate="STAKE_GAS_LIMIT_Desc"></p>
            </a>
            <label translate="STAKE_gas">
            Gas Limit (-1 means validator is full or you are not delegating minimum 100 Wan)
            </label>
            <input type="text"
                class="form-control"
                placeholder="21000"
                ng-model="tx.gasLimit"
                ng-change="gasLimitChanged=true"
                ng-disabled="tx.readOnly || checkTxReadOnly"
                ng-class="Validator.isPositiveNumber(tx.gasLimit) ? 'is-valid' : 'is-invalid'" />
        </div>
    </section>


    <div class="row form-group">
      <div class="col-xs-12 clearfix">
        <a class="btn btn-info btn-block"
           ng-click="generateTx()"
           translate="SEND_generate">
              Generate Transaction
        </a>
      </div>
    </div>

    <div class="row form-group" ng-show="rootScopeShowRawTx">

      <div class="col-sm-6">
        <label translate="SEND_raw">
          Raw Transaction
        </label>
        <textarea class="form-control" rows="4" readonly>{{rawTx}}</textarea>
      </div>

      <div class="col-sm-6">
        <label translate="SEND_signed">
          Signed Transaction
        </label>
        <textarea class="form-control" rows="4" readonly>{{signedTx}}</textarea>
      </div>

    </div>

    <div class="clearfix form-group" ng-show="rootScopeShowRawTx">
      <a class="btn btn-primary btn-block col-sm-11"
         data-toggle="modal"
         data-target="#sendTransaction"
         translate="SEND_trans"
         ng-click="parseSignedTx( signedTx )">
             Send Transaction
      </a>
    </div>


  </article>

</div>
<!-- / Content -->





<!-- Sidebar -->
<section class="col-sm-4">

  <div class="block block--danger"
       ng-show="wallet!=null && globalService.currentTab==globalService.tabs.staking.id && !hasEnoughBalance()">

    <h5 translate="STAKING_Warning_1">
      Warning! You do not have enough funds to complete this transaction.
    </h5>

    <p translate="STAKING_Warning_2">
      Please add more funds to your wallet or access a different wallet.
    </p>

  </div>

  <wallet-balance-drtv></wallet-balance-drtv>

  <div ng-show="checkTxPage"
       ng-click="checkTxReadOnly=!checkTxReadOnly"
       class="small text-right text-gray-lighter">
        <small translate="X_Advanced">
          Advanced Users Only.
        </small>
  </div>

</section>
<!-- / Sidebar -->
