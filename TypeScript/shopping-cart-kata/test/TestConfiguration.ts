import 'mocha'
import 'verify-it'
import * as chai from 'chai'
import * as chaiAsPromised from 'chai-as-promised'
import { rejectedWithError, throwError } from 'connections-chai-extensions'

chai.use(chaiAsPromised)
chai.use(rejectedWithError)
chai.use(throwError)
chai.should()