import { ButtonClicked_bTxSB } from './buttonclicked_btxsb.js';
import { PageLoaded_bTxcp } from './pageloaded_btxcp.js';
import { ButtonClicked_bTxhr } from './buttonclicked_btxhr.js';
import { PageLoaded_bTxib } from './pageloaded_btxib.js';
import { update_subscription } from './update_subscription.js';
import { failed_payment_alert } from './failed_payment_alert.js';
import { ButtonClicked_bTxDJ1 } from './buttonclicked_btxdj1.js';
import { ButtonClicked_bTxDT1 } from './buttonclicked_btxdt1.js';
import { ButtonClicked_bTxDa1 } from './buttonclicked_btxda1.js';
import { ButtonClicked_bTxDh1 } from './buttonclicked_btxdh1.js';
import { ButtonClicked_bTxDr1 } from './buttonclicked_btxdr1.js';
import { ButtonClicked_bTxha1 } from './buttonclicked_btxha1.js';
import { ButtonClicked_bTxhl1 } from './buttonclicked_btxhl1.js';
import { create_stripe_session } from './create_stripe_session.js';
import { PageLoaded_bTxkx1 } from './pageloaded_btxkx1.js';
import { check_payment_status } from './check_payment_status.js';

export const workflows = {
  "bTxSB": ButtonClicked_bTxSB,
  "bTxcp": PageLoaded_bTxcp,
  "bTxhr": ButtonClicked_bTxhr,
  "bTxib": PageLoaded_bTxib,
  "bTxoj": update_subscription,
  "bTxro": failed_payment_alert,
  "bTxDJ1": ButtonClicked_bTxDJ1,
  "bTxDT1": ButtonClicked_bTxDT1,
  "bTxDa1": ButtonClicked_bTxDa1,
  "bTxDh1": ButtonClicked_bTxDh1,
  "bTxDr1": ButtonClicked_bTxDr1,
  "bTxha1": ButtonClicked_bTxha1,
  "bTxhl1": ButtonClicked_bTxhl1,
  "bTxkI1": create_stripe_session,
  "bTxkx1": PageLoaded_bTxkx1,
  "bTxnI1": check_payment_status,
};
