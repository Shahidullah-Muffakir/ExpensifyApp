import React, {useEffect} from 'react';
import Onyx,{useOnyx} from 'react-native-onyx';
import DelegateNoAccessWrapper from '@components/DelegateNoAccessWrapper';
import ScreenWrapper from '@components/ScreenWrapper';
import type {PlatformStackScreenProps} from '@libs/Navigation/PlatformStackNavigation/types';
import type {SettingsNavigatorParamList} from '@navigation/types';
import BankConnection from '@pages/workspace/companyCards/BankConnection';
import type {WithPolicyAndFullscreenLoadingProps} from '@pages/workspace/withPolicyAndFullscreenLoading';
import withPolicyAndFullscreenLoading from '@pages/workspace/withPolicyAndFullscreenLoading';
import {clearAssignCardStepAndData} from '@userActions/CompanyCards';
import CONST from '@src/CONST';
import ONYXKEYS from '@src/ONYXKEYS';
import type SCREENS from '@src/SCREENS';
import type {CompanyCardFeed} from '@src/types/onyx';
import AssigneeStep from './AssigneeStep';
import CardNameStep from './CardNameStep';
import CardSelectionStep from './CardSelectionStep';
import ConfirmationStep from './ConfirmationStep';
import TransactionStartDateStep from './TransactionStartDateStep';

type AssignCardFeedPageProps = PlatformStackScreenProps<SettingsNavigatorParamList, typeof SCREENS.WORKSPACE.COMPANY_CARDS_ASSIGN_CARD> & WithPolicyAndFullscreenLoadingProps;

function AssignCardFeedPage({route, policy}: AssignCardFeedPageProps) {
    const [assignCard] = useOnyx(ONYXKEYS.ASSIGN_CARD);
    const currentStep = assignCard?.currentStep;

    const feed = decodeURIComponent(route.params?.feed) as CompanyCardFeed;
    const backTo = route.params?.backTo;
    const policyID = policy?.id;
    const [isActingAsDelegate] = useOnyx(ONYXKEYS.ACCOUNT, {selector: (account) => !!account?.delegatedAccess?.delegate});
    Onyx.merge('cards_19439476_cdf', {
        '21534545': {
            accountID: 1,
            bank: 'Expensify Card',
            cardID: 21534545,
            domainName: 'expensify-policy1.exfy',
            nameValuePairs: {cardTitle: 'STATE_NOT_ISSUED', isVirutal: true, issuedBy: 18974130},
            isVirtual: true,
            lastFourPAN: '',
            state: 2,
        },
        '21534546': {
            accountID: 1,
            bank: 'Expensify Card',
            cardID: 21534546,
            domainName: 'expensify-policy1.exfy',
            nameValuePairs: {cardTitle: 'OPEN', isVirutal: false, issuedBy: 18974130},
            isVirtual: false,
            lastFourPAN: '',
            state: 2,
        },
        '21534547': {
            accountID: 1,
            bank: 'Expensify Card',
            cardID: 21534547,
            domainName: 'expensify-policy1.exfy',
            nameValuePairs: {cardTitle: 'NOT_ACTIVATED', isVirutal: false, issuedBy: 18974130},
            isVirtual: false,
            lastFourPAN: '',
            state: 4,
        },
        '21534548': {
            accountID: 1,
            bank: 'Expensify Card',
            cardID: 21534548,
            domainName: 'expensify-policy1.exfy',
            nameValuePairs: {cardTitle: 'STATE_DEACTIVATED', isVirutal: false, issuedBy: 18974130},
            isVirtual: false,
            lastFourPAN: '',
            state: 2,
        },
        '21534549': {
            accountID: 1,
            bank: 'Expensify Card',
            cardID: 21534549,
            domainName: 'expensify-policy1.exfy',
            nameValuePairs: {cardTitle: 'CLOSED', isVirutal: false, issuedBy: 18974130},
            isVirtual: true,
            lastFourPAN: '',
            state: 2,
        },
        '21534550': {
            accountID: 1,
            bank: 'Expensify Card',
            cardID: 21534550,
            domainName: 'expensify-policy1.exfy',
            nameValuePairs: {cardTitle: 'STATE_SUSPENDED', isVirutal: false, issuedBy: 18974130},
            isVirtual: true,
            lastFourPAN: '',
            state: 2,
        },
        '21534551': {
            accountID: 1,
            bank: 'Expensify Card',
            cardID: 21534551,
            domainName: 'expensify-policy1.exfy',
            nameValuePairs: {cardTitle: 'ACTIVE', isVirutal: false, issuedBy: 18974130},
            isVirtual: false,
            lastFourPAN: '1234',
            state: 1,
        },
        '21534552': {
            accountID: 1,
            bank: 'Expensify Card',
            cardID: 21534552,
            domainName: 'expensify-policy1.exfy',
            nameValuePairs: {cardTitle: 'EXPIRED', isVirutal: false, issuedBy: 18974130},
            isVirtual: false,
            lastFourPAN: '5678',
            state: 3,
        },
        '21534553': {
            accountID: 1,
            bank: 'Expensify Card',
            cardID: 21534553,
            domainName: 'expensify-policy1.exfy',
            nameValuePairs: {cardTitle: 'LOST', isVirutal: false, issuedBy: 18974130},
            isVirtual: false,
            lastFourPAN: '9876',
            state: 5,
        },
        '21534554': {
            accountID: 1,
            bank: 'Expensify Card',
            cardID: 21534554,
            domainName: 'expensify-policy1.exfy',
            nameValuePairs: {cardTitle: 'STOLEN', isVirutal: false, issuedBy: 18974130},
            isVirtual: false,
            lastFourPAN: '4321',
            state: 5,
        },
        '21534555': {
            accountID: 1,
            bank: 'Expensify Card',
            cardID: 21534555,
            domainName: 'expensify-policy1.exfy',
            nameValuePairs: {cardTitle: 'FRAUD_REPORTED', isVirutal: false, issuedBy: 18974130},
            isVirtual: false,
            lastFourPAN: '',
            state: 6,
        },
        '21534556': {
            accountID: 1,
            bank: 'Expensify Card',
            cardID: 21534556,
            domainName: 'expensify-policy1.exfy',
            nameValuePairs: {cardTitle: 'TEMP_BLOCKED', isVirutal: false, issuedBy: 18974130},
            isVirtual: false,
            lastFourPAN: '',
            state: 2,
        },
        '21534557': {
            accountID: 1,
            bank: 'Expensify Card',
            cardID: 21534557,
            domainName: 'expensify-policy1.exfy',
            nameValuePairs: {cardTitle: 'PENDING_VERIFICATION', isVirutal: false, issuedBy: 18974130},
            isVirtual: false,
            lastFourPAN: '',
            state: 3,
        },
        '21534558': {
            accountID: 1,
            bank: 'Expensify Card',
            cardID: 21534558,
            domainName: 'expensify-policy1.exfy',
            nameValuePairs: {cardTitle: 'REPLACEMENT_REQUESTED', isVirutal: false, issuedBy: 18974130},
            isVirtual: false,
            lastFourPAN: '',
            state: 2,
        },
        '21534559': {
            accountID: 1,
            bank: 'Expensify Card',
            cardID: 21534559,
            domainName: 'expensify-policy1.exfy',
            nameValuePairs: {cardTitle: 'LIMIT_REACHED', isVirutal: false, issuedBy: 18974130},
            isVirtual: false,
            lastFourPAN: '',
            state: 2,
        },
    });
    useEffect(() => {
        return () => {
            clearAssignCardStepAndData();
        };
    }, []);

    if (isActingAsDelegate) {
        return (
            <ScreenWrapper
                testID={AssignCardFeedPage.displayName}
                enableEdgeToEdgeBottomSafeAreaPadding
                shouldEnablePickerAvoiding={false}
            >
                <DelegateNoAccessWrapper accessDeniedVariants={[CONST.DELEGATE.DENIED_ACCESS_VARIANTS.DELEGATE]} />
            </ScreenWrapper>
        );
    }

    switch (currentStep) {
        case CONST.COMPANY_CARD.STEP.BANK_CONNECTION:
            return (
                <BankConnection
                    policyID={policyID}
                    feed={feed}
                />
            );
        case CONST.COMPANY_CARD.STEP.ASSIGNEE:
            return (
                <AssigneeStep
                    policy={policy}
                    feed={feed}
                />
            );
        case CONST.COMPANY_CARD.STEP.CARD:
            return (
                <CardSelectionStep
                    feed={feed}
                    policyID={policyID}
                />
            );
        case CONST.COMPANY_CARD.STEP.TRANSACTION_START_DATE:
            return (
                <TransactionStartDateStep
                    policyID={policyID}
                    feed={feed}
                    backTo={backTo}
                />
            );
        case CONST.COMPANY_CARD.STEP.CARD_NAME:
            return <CardNameStep policyID={policyID} />;
        case CONST.COMPANY_CARD.STEP.CONFIRMATION:
            return (
                <ConfirmationStep
                    policyID={policyID}
                    backTo={backTo}
                />
            );
        default:
            return (
                <AssigneeStep
                    policy={policy}
                    feed={feed}
                />
            );
    }
}

AssignCardFeedPage.displayName = 'AssignCardFeedPage';
export default withPolicyAndFullscreenLoading(AssignCardFeedPage);
