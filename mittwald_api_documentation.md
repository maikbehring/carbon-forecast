# mittwald API v2 Dokumentation

*Diese Dokumentation wurde automatisch aus der OpenAPI-Spezifikation generiert.*

---


## Inhaltsverzeichnis

- [API Informationen](#api-informationen)
- [Authentifizierung](#authentifizierung)
  - [de.mittwald.v1.common.LegacyAccessToken](#demittwaldv1commonlegacyaccesstoken)
  - [de.mittwald.v1.commons.AccessToken](#demittwaldv1commonsaccesstoken)
  - [de.mittwald.v1.commons.LegacyBearerAuthentication](#demittwaldv1commonslegacybearerauthentication)
- [API Endpoints](#api-endpoints)
  - [App](#app)
  - [Article](#article)
  - [Backup](#backup)
  - [Container](#container)
  - [Contract](#contract)
  - [Conversation](#conversation)
  - [Cronjob](#cronjob)
  - [Customer](#customer)
  - [Database](#database)
  - [Domain](#domain)
  - [File](#file)
  - [LeadFyndr](#leadfyndr)
  - [Mail](#mail)
  - [Marketplace](#marketplace)
  - [Misc](#misc)
  - [Notification](#notification)
  - [Page Insights](#page-insights)
  - [Project](#project)
  - [Project File System](#project-file-system)
  - [Relocation](#relocation)
  - [SSH/SFTP User](#sshsftp-user)
  - [User](#user)
- [Schema-Definitionen](#schema-definitionen)
  - [de.mittwald.v1.aihosting.ContainerMeta](#demittwaldv1aihostingcontainermeta)
  - [de.mittwald.v1.aihosting.Licence](#demittwaldv1aihostinglicence)
  - [de.mittwald.v1.aihosting.Model](#demittwaldv1aihostingmodel)
  - [de.mittwald.v1.app.Action](#demittwaldv1appaction)
  - [de.mittwald.v1.app.ActionCapabilities](#demittwaldv1appactioncapabilities)
  - [de.mittwald.v1.app.AdditionalValidationSchema](#demittwaldv1appadditionalvalidationschema)
  - [de.mittwald.v1.app.AdditionalValidationSchemaKind](#demittwaldv1appadditionalvalidationschemakind)
  - [de.mittwald.v1.app.App](#demittwaldv1appapp)
  - [de.mittwald.v1.app.AppInstallation](#demittwaldv1appappinstallation)
  - [de.mittwald.v1.app.AppInstallationLifecycle](#demittwaldv1appappinstallationlifecycle)
  - [de.mittwald.v1.app.AppInstallationStatus](#demittwaldv1appappinstallationstatus)
  - [de.mittwald.v1.app.AppJobImage](#demittwaldv1appappjobimage)
  - [de.mittwald.v1.app.AppJobImages](#demittwaldv1appappjobimages)
  - [de.mittwald.v1.app.AppUpdatePolicy](#demittwaldv1appappupdatepolicy)
  - [de.mittwald.v1.app.AppVersion](#demittwaldv1appappversion)
  - [de.mittwald.v1.app.BreakingNote](#demittwaldv1appbreakingnote)
  - [de.mittwald.v1.app.CronjobCommand](#demittwaldv1appcronjobcommand)
  - [de.mittwald.v1.app.DatabaseDependency](#demittwaldv1appdatabasedependency)
  - [de.mittwald.v1.app.DefaultCronjob](#demittwaldv1appdefaultcronjob)
  - [de.mittwald.v1.app.Error](#demittwaldv1apperror)
  - [de.mittwald.v1.app.InstalledSystemSoftware](#demittwaldv1appinstalledsystemsoftware)
  - [de.mittwald.v1.app.LinkedDatabase](#demittwaldv1applinkeddatabase)
  - [de.mittwald.v1.app.LockPurpose](#demittwaldv1applockpurpose)
  - [de.mittwald.v1.app.Phase](#demittwaldv1appphase)
  - [de.mittwald.v1.app.RequestHandlerRequirement](#demittwaldv1apprequesthandlerrequirement)
  - [de.mittwald.v1.app.SavedUserInput](#demittwaldv1appsaveduserinput)
  - [de.mittwald.v1.app.SystemSoftware](#demittwaldv1appsystemsoftware)
  - [de.mittwald.v1.app.SystemSoftwareDependency](#demittwaldv1appsystemsoftwaredependency)
  - [de.mittwald.v1.app.SystemSoftwareUpdatePolicy](#demittwaldv1appsystemsoftwareupdatepolicy)
  - [de.mittwald.v1.app.SystemSoftwareVersion](#demittwaldv1appsystemsoftwareversion)
  - [de.mittwald.v1.app.UserInput](#demittwaldv1appuserinput)
  - [de.mittwald.v1.app.UserInputDataType](#demittwaldv1appuserinputdatatype)
  - [de.mittwald.v1.app.UserInputFormat](#demittwaldv1appuserinputformat)
  - [de.mittwald.v1.app.UserInputPositionMeta](#demittwaldv1appuserinputpositionmeta)
  - [de.mittwald.v1.app.VersionStatus](#demittwaldv1appversionstatus)
  - [de.mittwald.v1.article.ArticleAddons](#demittwaldv1articlearticleaddons)
  - [de.mittwald.v1.article.ArticleAttributes](#demittwaldv1articlearticleattributes)
  - [de.mittwald.v1.article.ArticleTag](#demittwaldv1articlearticletag)
  - [de.mittwald.v1.article.ArticleTemplate](#demittwaldv1articlearticletemplate)
  - [de.mittwald.v1.article.ReadableArticle](#demittwaldv1articlereadablearticle)
  - [de.mittwald.v1.article.ReadableBookableArticleOptions](#demittwaldv1articlereadablebookablearticleoptions)
  - [de.mittwald.v1.article.ReadableChangeArticleOptions](#demittwaldv1articlereadablechangearticleoptions)
  - [de.mittwald.v1.article.ReadableModifierArticleOptions](#demittwaldv1articlereadablemodifierarticleoptions)
  - [de.mittwald.v1.backup.BackupSortOrder](#demittwaldv1backupbackupsortorder)
  - [de.mittwald.v1.backup.BackupTemplate](#demittwaldv1backupbackuptemplate)
  - [de.mittwald.v1.backup.DatabaseReference](#demittwaldv1backupdatabasereference)
  - [de.mittwald.v1.backup.IgnoredSources](#demittwaldv1backupignoredsources)
  - [de.mittwald.v1.backup.ProjectBackup](#demittwaldv1backupprojectbackup)
  - [de.mittwald.v1.backup.ProjectBackupExport](#demittwaldv1backupprojectbackupexport)
  - [de.mittwald.v1.backup.ProjectBackupPath](#demittwaldv1backupprojectbackuppath)
  - [de.mittwald.v1.backup.ProjectBackupRestorePath](#demittwaldv1backupprojectbackuprestorepath)
  - [de.mittwald.v1.backup.ProjectBackupRestorePathRequest](#demittwaldv1backupprojectbackuprestorepathrequest)
  - [de.mittwald.v1.backup.ProjectBackupSchedule](#demittwaldv1backupprojectbackupschedule)
  - [de.mittwald.v1.backup.RestorePathPhase](#demittwaldv1backuprestorepathphase)
  - [de.mittwald.v1.commons.Address](#demittwaldv1commonsaddress)
  - [de.mittwald.v1.commons.Contact](#demittwaldv1commonscontact)
  - [de.mittwald.v1.commons.Error](#demittwaldv1commonserror)
  - [de.mittwald.v1.commons.Person](#demittwaldv1commonsperson)
  - [de.mittwald.v1.commons.Salutation](#demittwaldv1commonssalutation)
  - [de.mittwald.v1.commons.ValidationErrorSchema](#demittwaldv1commonsvalidationerrorschema)
  - [de.mittwald.v1.commons.ValidationErrors](#demittwaldv1commonsvalidationerrors)
  - [de.mittwald.v1.container.ContainerImageConfig](#demittwaldv1containercontainerimageconfig)
  - [de.mittwald.v1.container.ContainerImageConfigEnv](#demittwaldv1containercontainerimageconfigenv)
  - [de.mittwald.v1.container.ContainerImageConfigExposedPort](#demittwaldv1containercontainerimageconfigexposedport)
  - [de.mittwald.v1.container.ContainerImageConfigVolume](#demittwaldv1containercontainerimageconfigvolume)
  - [de.mittwald.v1.container.CreateRegistry](#demittwaldv1containercreateregistry)
  - [de.mittwald.v1.container.Deploy](#demittwaldv1containerdeploy)
  - [de.mittwald.v1.container.Registry](#demittwaldv1containerregistry)
  - [de.mittwald.v1.container.RegistryCredentials](#demittwaldv1containerregistrycredentials)
  - [de.mittwald.v1.container.ResourceSpec](#demittwaldv1containerresourcespec)
  - [de.mittwald.v1.container.Resources](#demittwaldv1containerresources)
  - [de.mittwald.v1.container.ServiceDeclareRequest](#demittwaldv1containerservicedeclarerequest)
  - [de.mittwald.v1.container.ServiceRequest](#demittwaldv1containerservicerequest)
  - [de.mittwald.v1.container.ServiceResponse](#demittwaldv1containerserviceresponse)
  - [de.mittwald.v1.container.ServiceSortOrder](#demittwaldv1containerservicesortorder)
  - [de.mittwald.v1.container.ServiceState](#demittwaldv1containerservicestate)
  - [de.mittwald.v1.container.ServiceStatus](#demittwaldv1containerservicestatus)
  - [de.mittwald.v1.container.SetRegistryCredentials](#demittwaldv1containersetregistrycredentials)
  - [de.mittwald.v1.container.StackResponse](#demittwaldv1containerstackresponse)
  - [de.mittwald.v1.container.UpdateRegistry](#demittwaldv1containerupdateregistry)
  - [de.mittwald.v1.container.VolumeDeclareRequest](#demittwaldv1containervolumedeclarerequest)
  - [de.mittwald.v1.container.VolumeRequest](#demittwaldv1containervolumerequest)
  - [de.mittwald.v1.container.VolumeResponse](#demittwaldv1containervolumeresponse)
  - [de.mittwald.v1.container.VolumeSortOrder](#demittwaldv1containervolumesortorder)
  - [de.mittwald.v1.contract.AggregateReference](#demittwaldv1contractaggregatereference)
  - [de.mittwald.v1.contract.Article](#demittwaldv1contractarticle)
  - [de.mittwald.v1.contract.Contact](#demittwaldv1contractcontact)
  - [de.mittwald.v1.contract.Contract](#demittwaldv1contractcontract)
  - [de.mittwald.v1.contract.ContractItem](#demittwaldv1contractcontractitem)
  - [de.mittwald.v1.contract.Error](#demittwaldv1contracterror)
  - [de.mittwald.v1.contract.Price](#demittwaldv1contractprice)
  - [de.mittwald.v1.contract.TariffChange](#demittwaldv1contracttariffchange)
  - [de.mittwald.v1.contract.Termination](#demittwaldv1contracttermination)
  - [de.mittwald.v1.conversation.AggregateReference](#demittwaldv1conversationaggregatereference)
  - [de.mittwald.v1.conversation.Category](#demittwaldv1conversationcategory)
  - [de.mittwald.v1.conversation.CategoryReferenceType](#demittwaldv1conversationcategoryreferencetype)
  - [de.mittwald.v1.conversation.Conversation](#demittwaldv1conversationconversation)
  - [de.mittwald.v1.conversation.ConversationMembers](#demittwaldv1conversationconversationmembers)
  - [de.mittwald.v1.conversation.ConversationPreferences](#demittwaldv1conversationconversationpreferences)
  - [de.mittwald.v1.conversation.DeletedFile](#demittwaldv1conversationdeletedfile)
  - [de.mittwald.v1.conversation.Department](#demittwaldv1conversationdepartment)
  - [de.mittwald.v1.conversation.Error](#demittwaldv1conversationerror)
  - [de.mittwald.v1.conversation.File](#demittwaldv1conversationfile)
  - [de.mittwald.v1.conversation.GetConversationIdResponse](#demittwaldv1conversationgetconversationidresponse)
  - [de.mittwald.v1.conversation.Group](#demittwaldv1conversationgroup)
  - [de.mittwald.v1.conversation.Message](#demittwaldv1conversationmessage)
  - [de.mittwald.v1.conversation.NotificationRole](#demittwaldv1conversationnotificationrole)
  - [de.mittwald.v1.conversation.RelatedAggregateReference](#demittwaldv1conversationrelatedaggregatereference)
  - [de.mittwald.v1.conversation.RequestedFile](#demittwaldv1conversationrequestedfile)
  - [de.mittwald.v1.conversation.ServiceRequest](#demittwaldv1conversationservicerequest)
  - [de.mittwald.v1.conversation.ServiceRequestRelocationPayload](#demittwaldv1conversationservicerequestrelocationpayload)
  - [de.mittwald.v1.conversation.ShareableAggregateReference](#demittwaldv1conversationshareableaggregatereference)
  - [de.mittwald.v1.conversation.Status](#demittwaldv1conversationstatus)
  - [de.mittwald.v1.conversation.StatusUpdate](#demittwaldv1conversationstatusupdate)
  - [de.mittwald.v1.conversation.UploadedFile](#demittwaldv1conversationuploadedfile)
  - [de.mittwald.v1.conversation.User](#demittwaldv1conversationuser)
  - [de.mittwald.v1.cronjob.Cronjob](#demittwaldv1cronjobcronjob)
  - [de.mittwald.v1.cronjob.CronjobCommand](#demittwaldv1cronjobcronjobcommand)
  - [de.mittwald.v1.cronjob.CronjobExecution](#demittwaldv1cronjobcronjobexecution)
  - [de.mittwald.v1.cronjob.CronjobExecutionAnalysis](#demittwaldv1cronjobcronjobexecutionanalysis)
  - [de.mittwald.v1.cronjob.CronjobExecutionSortOrder](#demittwaldv1cronjobcronjobexecutionsortorder)
  - [de.mittwald.v1.cronjob.CronjobRequest](#demittwaldv1cronjobcronjobrequest)
  - [de.mittwald.v1.cronjob.CronjobUrl](#demittwaldv1cronjobcronjoburl)
  - [de.mittwald.v1.customer.Contact](#demittwaldv1customercontact)
  - [de.mittwald.v1.customer.Customer](#demittwaldv1customercustomer)
  - [de.mittwald.v1.customer.CustomerFlag](#demittwaldv1customercustomerflag)
  - [de.mittwald.v1.customer.CustomerMeta](#demittwaldv1customercustomermeta)
  - [de.mittwald.v1.customer.Role](#demittwaldv1customerrole)
  - [de.mittwald.v1.database.CreateMySqlDatabase](#demittwaldv1databasecreatemysqldatabase)
  - [de.mittwald.v1.database.CreateMySqlUser](#demittwaldv1databasecreatemysqluser)
  - [de.mittwald.v1.database.CreateMySqlUserWithDatabase](#demittwaldv1databasecreatemysqluserwithdatabase)
  - [de.mittwald.v1.database.DatabaseStatus](#demittwaldv1databasedatabasestatus)
  - [de.mittwald.v1.database.DatabaseUserStatus](#demittwaldv1databasedatabaseuserstatus)
  - [de.mittwald.v1.database.MySqlCharacterSettings](#demittwaldv1databasemysqlcharactersettings)
  - [de.mittwald.v1.database.MySqlDatabase](#demittwaldv1databasemysqldatabase)
  - [de.mittwald.v1.database.MySqlUser](#demittwaldv1databasemysqluser)
  - [de.mittwald.v1.database.MySqlVersion](#demittwaldv1databasemysqlversion)
  - [de.mittwald.v1.database.PhpMyAdminURL](#demittwaldv1databasephpmyadminurl)
  - [de.mittwald.v1.database.RedisDatabase](#demittwaldv1databaseredisdatabase)
  - [de.mittwald.v1.database.RedisDatabaseConfiguration](#demittwaldv1databaseredisdatabaseconfiguration)
  - [de.mittwald.v1.database.RedisVersion](#demittwaldv1databaseredisversion)
  - [de.mittwald.v1.database.characterSettings](#demittwaldv1databasecharactersettings)
  - [de.mittwald.v1.directus.Domain](#demittwaldv1directusdomain)
  - [de.mittwald.v1.directus.EmailInbox](#demittwaldv1directusemailinbox)
  - [de.mittwald.v1.dns.CombinedACustom](#demittwaldv1dnscombinedacustom)
  - [de.mittwald.v1.dns.CombinedAManaged](#demittwaldv1dnscombinedamanaged)
  - [de.mittwald.v1.dns.CombinedAManagedAAAARecord](#demittwaldv1dnscombinedamanagedaaaarecord)
  - [de.mittwald.v1.dns.CombinedAManagedARecord](#demittwaldv1dnscombinedamanagedarecord)
  - [de.mittwald.v1.dns.RecordCAA](#demittwaldv1dnsrecordcaa)
  - [de.mittwald.v1.dns.RecordCAAComponent](#demittwaldv1dnsrecordcaacomponent)
  - [de.mittwald.v1.dns.RecordCAARecord](#demittwaldv1dnsrecordcaarecord)
  - [de.mittwald.v1.dns.RecordCNAME](#demittwaldv1dnsrecordcname)
  - [de.mittwald.v1.dns.RecordCNAMEComponent](#demittwaldv1dnsrecordcnamecomponent)
  - [de.mittwald.v1.dns.RecordCombinedA](#demittwaldv1dnsrecordcombineda)
  - [de.mittwald.v1.dns.RecordMX](#demittwaldv1dnsrecordmx)
  - [de.mittwald.v1.dns.RecordMXCustom](#demittwaldv1dnsrecordmxcustom)
  - [de.mittwald.v1.dns.RecordMXManaged](#demittwaldv1dnsrecordmxmanaged)
  - [de.mittwald.v1.dns.RecordMXRecord](#demittwaldv1dnsrecordmxrecord)
  - [de.mittwald.v1.dns.RecordSRV](#demittwaldv1dnsrecordsrv)
  - [de.mittwald.v1.dns.RecordSRVComponent](#demittwaldv1dnsrecordsrvcomponent)
  - [de.mittwald.v1.dns.RecordSRVRecord](#demittwaldv1dnsrecordsrvrecord)
  - [de.mittwald.v1.dns.RecordSettings](#demittwaldv1dnsrecordsettings)
  - [de.mittwald.v1.dns.RecordTXT](#demittwaldv1dnsrecordtxt)
  - [de.mittwald.v1.dns.RecordTXTComponent](#demittwaldv1dnsrecordtxtcomponent)
  - [de.mittwald.v1.dns.RecordUnset](#demittwaldv1dnsrecordunset)
  - [de.mittwald.v1.dns.TtlAuto](#demittwaldv1dnsttlauto)
  - [de.mittwald.v1.dns.TtlSeconds](#demittwaldv1dnsttlseconds)
  - [de.mittwald.v1.dns.Zone](#demittwaldv1dnszone)
  - [de.mittwald.v1.domain.AuthCode](#demittwaldv1domainauthcode)
  - [de.mittwald.v1.domain.AuthCode2](#demittwaldv1domainauthcode2)
  - [de.mittwald.v1.domain.CreateDomainHandleData](#demittwaldv1domaincreatedomainhandledata)
  - [de.mittwald.v1.domain.Domain](#demittwaldv1domaindomain)
  - [de.mittwald.v1.domain.HandleData](#demittwaldv1domainhandledata)
  - [de.mittwald.v1.domain.HandleField](#demittwaldv1domainhandlefield)
  - [de.mittwald.v1.domain.HandleReadable](#demittwaldv1domainhandlereadable)
  - [de.mittwald.v1.domain.Process](#demittwaldv1domainprocess)
  - [de.mittwald.v1.domain.ProcessState](#demittwaldv1domainprocessstate)
  - [de.mittwald.v1.domain.ProcessType](#demittwaldv1domainprocesstype)
  - [de.mittwald.v1.domain.Registrar](#demittwaldv1domainregistrar)
  - [de.mittwald.v1.domain.SuggestedDomains](#demittwaldv1domainsuggesteddomains)
  - [de.mittwald.v1.domain.TopLevel](#demittwaldv1domaintoplevel)
  - [de.mittwald.v1.domain.TransferAuthentication](#demittwaldv1domaintransferauthentication)
  - [de.mittwald.v1.extension.ExtensionInstanceContract](#demittwaldv1extensionextensioninstancecontract)
  - [de.mittwald.v1.extension.PricePlan](#demittwaldv1extensionpriceplan)
  - [de.mittwald.v1.extension.SubscriptionBasedContract](#demittwaldv1extensionsubscriptionbasedcontract)
  - [de.mittwald.v1.extension.Variant](#demittwaldv1extensionvariant)
  - [de.mittwald.v1.fee.FeeStrategy](#demittwaldv1feefeestrategy)
  - [de.mittwald.v1.fee.OneTimePaymentFeeStrategy](#demittwaldv1feeonetimepaymentfeestrategy)
  - [de.mittwald.v1.fee.PeriodBasedFeeStrategy](#demittwaldv1feeperiodbasedfeestrategy)
  - [de.mittwald.v1.fee.ResourceFee](#demittwaldv1feeresourcefee)
  - [de.mittwald.v1.file.FileMeta](#demittwaldv1filefilemeta)
  - [de.mittwald.v1.file.FileType](#demittwaldv1filefiletype)
  - [de.mittwald.v1.file.FileUploadRules](#demittwaldv1filefileuploadrules)
  - [de.mittwald.v1.ingress.Ingress](#demittwaldv1ingressingress)
  - [de.mittwald.v1.ingress.IngressDeprecated](#demittwaldv1ingressingressdeprecated)
  - [de.mittwald.v1.ingress.Ownership](#demittwaldv1ingressownership)
  - [de.mittwald.v1.ingress.Path](#demittwaldv1ingresspath)
  - [de.mittwald.v1.ingress.TargetContainer](#demittwaldv1ingresstargetcontainer)
  - [de.mittwald.v1.ingress.TargetInstallation](#demittwaldv1ingresstargetinstallation)
  - [de.mittwald.v1.ingress.TargetUrl](#demittwaldv1ingresstargeturl)
  - [de.mittwald.v1.ingress.TargetUseDefaultPage](#demittwaldv1ingresstargetusedefaultpage)
  - [de.mittwald.v1.ingress.TlsAcme](#demittwaldv1ingresstlsacme)
  - [de.mittwald.v1.ingress.TlsAcmeDeprecated](#demittwaldv1ingresstlsacmedeprecated)
  - [de.mittwald.v1.ingress.TlsCertificate](#demittwaldv1ingresstlscertificate)
  - [de.mittwald.v1.invoice.BankingInformation](#demittwaldv1invoicebankinginformation)
  - [de.mittwald.v1.invoice.Cancellation](#demittwaldv1invoicecancellation)
  - [de.mittwald.v1.invoice.ContractInvoiceDefinition](#demittwaldv1invoicecontractinvoicedefinition)
  - [de.mittwald.v1.invoice.ContractItemInvoiceDefinition](#demittwaldv1invoicecontractiteminvoicedefinition)
  - [de.mittwald.v1.invoice.CorrectionDefinition](#demittwaldv1invoicecorrectiondefinition)
  - [de.mittwald.v1.invoice.DatePeriod](#demittwaldv1invoicedateperiod)
  - [de.mittwald.v1.invoice.Error](#demittwaldv1invoiceerror)
  - [de.mittwald.v1.invoice.Invoice](#demittwaldv1invoiceinvoice)
  - [de.mittwald.v1.invoice.InvoiceItem](#demittwaldv1invoiceinvoiceitem)
  - [de.mittwald.v1.invoice.InvoiceSettings](#demittwaldv1invoiceinvoicesettings)
  - [de.mittwald.v1.invoice.InvoiceSettingsStatus](#demittwaldv1invoiceinvoicesettingsstatus)
  - [de.mittwald.v1.invoice.PaymentSettings](#demittwaldv1invoicepaymentsettings)
  - [de.mittwald.v1.invoice.PaymentSettingsDebit](#demittwaldv1invoicepaymentsettingsdebit)
  - [de.mittwald.v1.invoice.PaymentSettingsInvoice](#demittwaldv1invoicepaymentsettingsinvoice)
  - [de.mittwald.v1.invoice.Price](#demittwaldv1invoiceprice)
  - [de.mittwald.v1.invoice.Recipient](#demittwaldv1invoicerecipient)
  - [de.mittwald.v1.leadfyndr.BasicCompany](#demittwaldv1leadfyndrbasiccompany)
  - [de.mittwald.v1.leadfyndr.BasicMetrics](#demittwaldv1leadfyndrbasicmetrics)
  - [de.mittwald.v1.leadfyndr.City](#demittwaldv1leadfyndrcity)
  - [de.mittwald.v1.leadfyndr.Contact](#demittwaldv1leadfyndrcontact)
  - [de.mittwald.v1.leadfyndr.DetailCompany](#demittwaldv1leadfyndrdetailcompany)
  - [de.mittwald.v1.leadfyndr.DetailMetrics](#demittwaldv1leadfyndrdetailmetrics)
  - [de.mittwald.v1.leadfyndr.Hoster](#demittwaldv1leadfyndrhoster)
  - [de.mittwald.v1.leadfyndr.Lead](#demittwaldv1leadfyndrlead)
  - [de.mittwald.v1.leadfyndr.LeadsExport](#demittwaldv1leadfyndrleadsexport)
  - [de.mittwald.v1.leadfyndr.LeadsExportExporter](#demittwaldv1leadfyndrleadsexportexporter)
  - [de.mittwald.v1.leadfyndr.Lighthouse](#demittwaldv1leadfyndrlighthouse)
  - [de.mittwald.v1.leadfyndr.Metric](#demittwaldv1leadfyndrmetric)
  - [de.mittwald.v1.leadfyndr.Profile](#demittwaldv1leadfyndrprofile)
  - [de.mittwald.v1.leadfyndr.ProfileRequest](#demittwaldv1leadfyndrprofilerequest)
  - [de.mittwald.v1.leadfyndr.SocialMedia](#demittwaldv1leadfyndrsocialmedia)
  - [de.mittwald.v1.leadfyndr.TariffOptions](#demittwaldv1leadfyndrtariffoptions)
  - [de.mittwald.v1.leadfyndr.Technology](#demittwaldv1leadfyndrtechnology)
  - [de.mittwald.v1.leadfyndr.UnlockedLead](#demittwaldv1leadfyndrunlockedlead)
  - [de.mittwald.v1.leadfyndr.User](#demittwaldv1leadfyndruser)
  - [de.mittwald.v1.mail.CreateForwardAddress](#demittwaldv1mailcreateforwardaddress)
  - [de.mittwald.v1.mail.CreateMailAddress](#demittwaldv1mailcreatemailaddress)
  - [de.mittwald.v1.mail.Deliverybox](#demittwaldv1maildeliverybox)
  - [de.mittwald.v1.mail.Error](#demittwaldv1mailerror)
  - [de.mittwald.v1.mail.MailAddress](#demittwaldv1mailmailaddress)
  - [de.mittwald.v1.mail.MailAddressBackup](#demittwaldv1mailmailaddressbackup)
  - [de.mittwald.v1.mail.MailsystemSettings](#demittwaldv1mailmailsystemsettings)
  - [de.mittwald.v1.mailmigration.AutoResponder](#demittwaldv1mailmigrationautoresponder)
  - [de.mittwald.v1.mailmigration.CheckMigrationIsPossibleErrorActiveMailArchiveForAddress](#demittwaldv1mailmigrationcheckmigrationispossibleerroractivemailarchiveforaddress)
  - [de.mittwald.v1.mailmigration.CheckMigrationIsPossibleErrorAlreadyExistingMailAddress](#demittwaldv1mailmigrationcheckmigrationispossibleerroralreadyexistingmailaddress)
  - [de.mittwald.v1.mailmigration.CheckMigrationIsPossibleErrorAmbiguousMailAddressDelivery](#demittwaldv1mailmigrationcheckmigrationispossibleerrorambiguousmailaddressdelivery)
  - [de.mittwald.v1.mailmigration.CheckMigrationIsPossibleErrorAmbiguousMailboxDelivery](#demittwaldv1mailmigrationcheckmigrationispossibleerrorambiguousmailboxdelivery)
  - [de.mittwald.v1.mailmigration.CheckMigrationIsPossibleErrorCatchAllMissingAddress](#demittwaldv1mailmigrationcheckmigrationispossibleerrorcatchallmissingaddress)
  - [de.mittwald.v1.mailmigration.CheckMigrationIsPossibleErrorCatchAllTargetWithoutAlias](#demittwaldv1mailmigrationcheckmigrationispossibleerrorcatchalltargetwithoutalias)
  - [de.mittwald.v1.mailmigration.CheckMigrationIsPossibleErrorMissingVerifiedIngress](#demittwaldv1mailmigrationcheckmigrationispossibleerrormissingverifiedingress)
  - [de.mittwald.v1.mailmigration.CheckMigrationIsPossibleErrorResponse](#demittwaldv1mailmigrationcheckmigrationispossibleerrorresponse)
  - [de.mittwald.v1.mailmigration.MailSystemSettings](#demittwaldv1mailmigrationmailsystemsettings)
  - [de.mittwald.v1.mailmigration.Mailbox](#demittwaldv1mailmigrationmailbox)
  - [de.mittwald.v1.mailmigration.MigrateMailAddressCommandRequirements](#demittwaldv1mailmigrationmigratemailaddresscommandrequirements)
  - [de.mittwald.v1.mailmigration.MigrateMailboxCommandRequirements](#demittwaldv1mailmigrationmigratemailboxcommandrequirements)
  - [de.mittwald.v1.mailmigration.Migration](#demittwaldv1mailmigrationmigration)
  - [de.mittwald.v1.mailmigration.MigrationFinalizeJob](#demittwaldv1mailmigrationmigrationfinalizejob)
  - [de.mittwald.v1.mailmigration.MigrationFinalizeJobDisableLegacyEntities](#demittwaldv1mailmigrationmigrationfinalizejobdisablelegacyentities)
  - [de.mittwald.v1.mailmigration.MigrationFinalizeJobProjectSetting](#demittwaldv1mailmigrationmigrationfinalizejobprojectsetting)
  - [de.mittwald.v1.mailmigration.MigrationMailAddress](#demittwaldv1mailmigrationmigrationmailaddress)
  - [de.mittwald.v1.mailmigration.MigrationMailAddressMigrationJob](#demittwaldv1mailmigrationmigrationmailaddressmigrationjob)
  - [de.mittwald.v1.mailmigration.MigrationMailAddressMigrationJobMigrate](#demittwaldv1mailmigrationmigrationmailaddressmigrationjobmigrate)
  - [de.mittwald.v1.mailmigration.MigrationMailAddressPreMigrationJob](#demittwaldv1mailmigrationmigrationmailaddresspremigrationjob)
  - [de.mittwald.v1.mailmigration.MigrationMailAddressPreMigrationJobAliasSet](#demittwaldv1mailmigrationmigrationmailaddresspremigrationjobaliasset)
  - [de.mittwald.v1.mailmigration.MigrationMailAddressPreMigrationJobDeliveryMigration](#demittwaldv1mailmigrationmigrationmailaddresspremigrationjobdeliverymigration)
  - [de.mittwald.v1.mailmigration.MigrationMailbox](#demittwaldv1mailmigrationmigrationmailbox)
  - [de.mittwald.v1.mailmigration.MigrationMailboxJob](#demittwaldv1mailmigrationmigrationmailboxjob)
  - [de.mittwald.v1.mailmigration.MigrationMailboxJobMigrate](#demittwaldv1mailmigrationmigrationmailboxjobmigrate)
  - [de.mittwald.v1.mailmigration.PossibleCheckErrors](#demittwaldv1mailmigrationpossiblecheckerrors)
  - [de.mittwald.v1.mailmigration.SpamProtection](#demittwaldv1mailmigrationspamprotection)
  - [de.mittwald.v1.marketplace.AggregateReference](#demittwaldv1marketplaceaggregatereference)
  - [de.mittwald.v1.marketplace.AggregateReferenceFilter](#demittwaldv1marketplaceaggregatereferencefilter)
  - [de.mittwald.v1.marketplace.BackendComponent](#demittwaldv1marketplacebackendcomponent)
  - [de.mittwald.v1.marketplace.BackendComponents](#demittwaldv1marketplacebackendcomponents)
  - [de.mittwald.v1.marketplace.Context](#demittwaldv1marketplacecontext)
  - [de.mittwald.v1.marketplace.ContractOwner](#demittwaldv1marketplacecontractowner)
  - [de.mittwald.v1.marketplace.ContractPartner](#demittwaldv1marketplacecontractpartner)
  - [de.mittwald.v1.marketplace.Contributor](#demittwaldv1marketplacecontributor)
  - [de.mittwald.v1.marketplace.ContributorImprint](#demittwaldv1marketplacecontributorimprint)
  - [de.mittwald.v1.marketplace.ContributorState](#demittwaldv1marketplacecontributorstate)
  - [de.mittwald.v1.marketplace.DescriptionFormats](#demittwaldv1marketplacedescriptionformats)
  - [de.mittwald.v1.marketplace.DetailedDescriptions](#demittwaldv1marketplacedetaileddescriptions)
  - [de.mittwald.v1.marketplace.Extension](#demittwaldv1marketplaceextension)
  - [de.mittwald.v1.marketplace.ExtensionAsset](#demittwaldv1marketplaceextensionasset)
  - [de.mittwald.v1.marketplace.ExtensionDeprecation](#demittwaldv1marketplaceextensiondeprecation)
  - [de.mittwald.v1.marketplace.ExtensionHealth](#demittwaldv1marketplaceextensionhealth)
  - [de.mittwald.v1.marketplace.ExtensionInstance](#demittwaldv1marketplaceextensioninstance)
  - [de.mittwald.v1.marketplace.ExtensionInstanceChargeability](#demittwaldv1marketplaceextensioninstancechargeability)
  - [de.mittwald.v1.marketplace.ExtensionInstanceHealth](#demittwaldv1marketplaceextensioninstancehealth)
  - [de.mittwald.v1.marketplace.ExtensionSecret](#demittwaldv1marketplaceextensionsecret)
  - [de.mittwald.v1.marketplace.ExtensionStatistics](#demittwaldv1marketplaceextensionstatistics)
  - [de.mittwald.v1.marketplace.ExternalComponent](#demittwaldv1marketplaceexternalcomponent)
  - [de.mittwald.v1.marketplace.FrontendFragment](#demittwaldv1marketplacefrontendfragment)
  - [de.mittwald.v1.marketplace.LocalizedDescription](#demittwaldv1marketplacelocalizeddescription)
  - [de.mittwald.v1.marketplace.MonthlyPricePlanStrategy](#demittwaldv1marketplacemonthlypriceplanstrategy)
  - [de.mittwald.v1.marketplace.OwnContributor](#demittwaldv1marketplaceowncontributor)
  - [de.mittwald.v1.marketplace.OwnExtension](#demittwaldv1marketplaceownextension)
  - [de.mittwald.v1.marketplace.PricePlanDetails](#demittwaldv1marketplacepriceplandetails)
  - [de.mittwald.v1.marketplace.PublicKey](#demittwaldv1marketplacepublickey)
  - [de.mittwald.v1.marketplace.SubTitle](#demittwaldv1marketplacesubtitle)
  - [de.mittwald.v1.marketplace.SupportMeta](#demittwaldv1marketplacesupportmeta)
  - [de.mittwald.v1.marketplace.UnpublishedExtension](#demittwaldv1marketplaceunpublishedextension)
  - [de.mittwald.v1.marketplace.UrlFrontendFragment](#demittwaldv1marketplaceurlfrontendfragment)
  - [de.mittwald.v1.marketplace.WebhookKind](#demittwaldv1marketplacewebhookkind)
  - [de.mittwald.v1.marketplace.WebhookUrl](#demittwaldv1marketplacewebhookurl)
  - [de.mittwald.v1.marketplace.WebhookUrls](#demittwaldv1marketplacewebhookurls)
  - [de.mittwald.v1.membership.CustomerInheritedRoles](#demittwaldv1membershipcustomerinheritedroles)
  - [de.mittwald.v1.membership.CustomerInvite](#demittwaldv1membershipcustomerinvite)
  - [de.mittwald.v1.membership.CustomerMembership](#demittwaldv1membershipcustomermembership)
  - [de.mittwald.v1.membership.CustomerRoles](#demittwaldv1membershipcustomerroles)
  - [de.mittwald.v1.membership.InviteInformation](#demittwaldv1membershipinviteinformation)
  - [de.mittwald.v1.membership.ProjectInvite](#demittwaldv1membershipprojectinvite)
  - [de.mittwald.v1.membership.ProjectMembership](#demittwaldv1membershipprojectmembership)
  - [de.mittwald.v1.membership.ProjectRoles](#demittwaldv1membershipprojectroles)
  - [de.mittwald.v1.messaging.AggregateReference](#demittwaldv1messagingaggregatereference)
  - [de.mittwald.v1.messaging.Notification](#demittwaldv1messagingnotification)
  - [de.mittwald.v1.messaging.NotificationStatus](#demittwaldv1messagingnotificationstatus)
  - [de.mittwald.v1.order.Addons](#demittwaldv1orderaddons)
  - [de.mittwald.v1.order.ArticleAddons](#demittwaldv1orderarticleaddons)
  - [de.mittwald.v1.order.AttributeConfiguration](#demittwaldv1orderattributeconfiguration)
  - [de.mittwald.v1.order.CustomerOrder](#demittwaldv1ordercustomerorder)
  - [de.mittwald.v1.order.DomainHandleField](#demittwaldv1orderdomainhandlefield)
  - [de.mittwald.v1.order.DomainOrder](#demittwaldv1orderdomainorder)
  - [de.mittwald.v1.order.DomainOrderPreview](#demittwaldv1orderdomainorderpreview)
  - [de.mittwald.v1.order.DomainOrderPreviewResponse](#demittwaldv1orderdomainorderpreviewresponse)
  - [de.mittwald.v1.order.ExternalCertificateOrder](#demittwaldv1orderexternalcertificateorder)
  - [de.mittwald.v1.order.ExternalCertificateOrderPreview](#demittwaldv1orderexternalcertificateorderpreview)
  - [de.mittwald.v1.order.ExternalCertificateOrderPreviewResponse](#demittwaldv1orderexternalcertificateorderpreviewresponse)
  - [de.mittwald.v1.order.HardwareSpec](#demittwaldv1orderhardwarespec)
  - [de.mittwald.v1.order.HostingOrderPreviewResponse](#demittwaldv1orderhostingorderpreviewresponse)
  - [de.mittwald.v1.order.LeadFyndrOrder](#demittwaldv1orderleadfyndrorder)
  - [de.mittwald.v1.order.LeadFyndrOrderPreview](#demittwaldv1orderleadfyndrorderpreview)
  - [de.mittwald.v1.order.LeadFyndrOrderPreviewResponse](#demittwaldv1orderleadfyndrorderpreviewresponse)
  - [de.mittwald.v1.order.LeadFyndrTariffChange](#demittwaldv1orderleadfyndrtariffchange)
  - [de.mittwald.v1.order.MachineTypeSpec](#demittwaldv1ordermachinetypespec)
  - [de.mittwald.v1.order.MailArchiveOrder](#demittwaldv1ordermailarchiveorder)
  - [de.mittwald.v1.order.MailArchiveOrderPreview](#demittwaldv1ordermailarchiveorderpreview)
  - [de.mittwald.v1.order.MailArchiveOrderPreviewResponse](#demittwaldv1ordermailarchiveorderpreviewresponse)
  - [de.mittwald.v1.order.OrderItem](#demittwaldv1orderorderitem)
  - [de.mittwald.v1.order.OrderStatus](#demittwaldv1orderorderstatus)
  - [de.mittwald.v1.order.OrderSummary](#demittwaldv1orderordersummary)
  - [de.mittwald.v1.order.OrderType](#demittwaldv1orderordertype)
  - [de.mittwald.v1.order.Profile](#demittwaldv1orderprofile)
  - [de.mittwald.v1.order.ProjectHostingOrder](#demittwaldv1orderprojecthostingorder)
  - [de.mittwald.v1.order.ProjectHostingOrderPreview](#demittwaldv1orderprojecthostingorderpreview)
  - [de.mittwald.v1.order.ProjectHostingTariffChange](#demittwaldv1orderprojecthostingtariffchange)
  - [de.mittwald.v1.order.Reference](#demittwaldv1orderreference)
  - [de.mittwald.v1.order.ServerOrder](#demittwaldv1orderserverorder)
  - [de.mittwald.v1.order.ServerOrderPreview](#demittwaldv1orderserverorderpreview)
  - [de.mittwald.v1.order.ServerTariffChange](#demittwaldv1orderservertariffchange)
  - [de.mittwald.v1.policy.Policy](#demittwaldv1policypolicy)
  - [de.mittwald.v1.poll.UserPollSettings](#demittwaldv1polluserpollsettings)
  - [de.mittwald.v1.project.AvatarRules](#demittwaldv1projectavatarrules)
  - [de.mittwald.v1.project.DeprecatedProjectReadinessStatus](#demittwaldv1projectdeprecatedprojectreadinessstatus)
  - [de.mittwald.v1.project.DeprecatedServerReadinessStatus](#demittwaldv1projectdeprecatedserverreadinessstatus)
  - [de.mittwald.v1.project.DisableReason](#demittwaldv1projectdisablereason)
  - [de.mittwald.v1.project.FilesystemDirectoryListing](#demittwaldv1projectfilesystemdirectorylisting)
  - [de.mittwald.v1.project.FilesystemUsagesDisk](#demittwaldv1projectfilesystemusagesdisk)
  - [de.mittwald.v1.project.FsApiJwt](#demittwaldv1projectfsapijwt)
  - [de.mittwald.v1.project.HardwareSpec](#demittwaldv1projecthardwarespec)
  - [de.mittwald.v1.project.MachineType](#demittwaldv1projectmachinetype)
  - [de.mittwald.v1.project.Project](#demittwaldv1projectproject)
  - [de.mittwald.v1.project.ProjectFeature](#demittwaldv1projectprojectfeature)
  - [de.mittwald.v1.project.ProjectStatus](#demittwaldv1projectprojectstatus)
  - [de.mittwald.v1.project.Server](#demittwaldv1projectserver)
  - [de.mittwald.v1.project.ServerDisableReason](#demittwaldv1projectserverdisablereason)
  - [de.mittwald.v1.project.ServerStatus](#demittwaldv1projectserverstatus)
  - [de.mittwald.v1.project.VisitorSpec](#demittwaldv1projectvisitorspec)
  - [de.mittwald.v1.screenshot.LifecycleState](#demittwaldv1screenshotlifecyclestate)
  - [de.mittwald.v1.screenshot.ScreenshotSettings](#demittwaldv1screenshotscreenshotsettings)
  - [de.mittwald.v1.screenshot.Target](#demittwaldv1screenshottarget)
  - [de.mittwald.v1.screenshot.Task](#demittwaldv1screenshottask)
  - [de.mittwald.v1.signup.Account](#demittwaldv1signupaccount)
  - [de.mittwald.v1.signup.ApiToken](#demittwaldv1signupapitoken)
  - [de.mittwald.v1.signup.DeviceInfo](#demittwaldv1signupdeviceinfo)
  - [de.mittwald.v1.signup.DomainError](#demittwaldv1signupdomainerror)
  - [de.mittwald.v1.signup.Location](#demittwaldv1signuplocation)
  - [de.mittwald.v1.signup.OAuthClient](#demittwaldv1signupoauthclient)
  - [de.mittwald.v1.signup.Profile](#demittwaldv1signupprofile)
  - [de.mittwald.v1.signup.SshKey](#demittwaldv1signupsshkey)
  - [de.mittwald.v1.signup.UserSession](#demittwaldv1signupusersession)
  - [de.mittwald.v1.sshuser.AccessLevel](#demittwaldv1sshuseraccesslevel)
  - [de.mittwald.v1.sshuser.AuthType](#demittwaldv1sshuserauthtype)
  - [de.mittwald.v1.sshuser.Authentication](#demittwaldv1sshuserauthentication)
  - [de.mittwald.v1.sshuser.EntityTypes](#demittwaldv1sshuserentitytypes)
  - [de.mittwald.v1.sshuser.PublicKey](#demittwaldv1sshuserpublickey)
  - [de.mittwald.v1.sshuser.SftpUser](#demittwaldv1sshusersftpuser)
  - [de.mittwald.v1.sshuser.SshUser](#demittwaldv1sshusersshuser)
  - [de.mittwald.v1.ssl.Certificate](#demittwaldv1sslcertificate)
  - [de.mittwald.v1.ssl.CertificateData](#demittwaldv1sslcertificatedata)
  - [de.mittwald.v1.ssl.CertificateError](#demittwaldv1sslcertificateerror)
  - [de.mittwald.v1.ssl.CertificateRequest](#demittwaldv1sslcertificaterequest)
  - [de.mittwald.v1.ssl.CertificateRequestCreateRequest](#demittwaldv1sslcertificaterequestcreaterequest)
  - [de.mittwald.v1.ssl.CertificateRequestCreateResponse](#demittwaldv1sslcertificaterequestcreateresponse)
  - [de.mittwald.v1.ssl.CertificateRequestCreateWithCSRRequest](#demittwaldv1sslcertificaterequestcreatewithcsrrequest)
  - [de.mittwald.v1.ssl.CertificateType](#demittwaldv1sslcertificatetype)
  - [de.mittwald.v1.ssl.CheckReplaceCertificateResponse](#demittwaldv1sslcheckreplacecertificateresponse)
  - [de.mittwald.v1.ssl.CheckReplaceChanges](#demittwaldv1sslcheckreplacechanges)
  - [de.mittwald.v1.ssl.CheckReplaceDateChange](#demittwaldv1sslcheckreplacedatechange)
  - [de.mittwald.v1.ssl.CheckReplaceFieldChange](#demittwaldv1sslcheckreplacefieldchange)
  - [de.mittwald.v1.ssl.CheckReplaceSliceChange](#demittwaldv1sslcheckreplaceslicechange)
  - [de.mittwald.v1.ssl.Contact](#demittwaldv1sslcontact)
  - [de.mittwald.v1.storagespace.Statistics](#demittwaldv1storagespacestatistics)
  - [de.mittwald.v1.storagespace.StatisticsCategory](#demittwaldv1storagespacestatisticscategory)
  - [de.mittwald.v1.storagespace.StatisticsCategoryKind](#demittwaldv1storagespacestatisticscategorykind)
  - [de.mittwald.v1.storagespace.StatisticsKind](#demittwaldv1storagespacestatisticskind)
  - [de.mittwald.v1.storagespace.StatisticsMeta](#demittwaldv1storagespacestatisticsmeta)
  - [de.mittwald.v1.storagespace.StatisticsResource](#demittwaldv1storagespacestatisticsresource)
  - [de.mittwald.v1.strace.Data](#demittwaldv1stracedata)
  - [de.mittwald.v1.strace.Error](#demittwaldv1straceerror)
  - [de.mittwald.v1.strace.Statistics](#demittwaldv1stracestatistics)
  - [de.mittwald.v1.task.AggregateReference](#demittwaldv1taskaggregatereference)
  - [de.mittwald.v1.user.CustomerMembership](#demittwaldv1usercustomermembership)
  - [de.mittwald.v1.user.ProjectMembership](#demittwaldv1userprojectmembership)
  - [de.mittwald.v1.user.User](#demittwaldv1useruser)
  - [de.mittwald.v1.user.UserFeedback](#demittwaldv1useruserfeedback)
  - [de.mittwald.v1.varnish.ConfigExpiration](#demittwaldv1varnishconfigexpiration)
  - [de.mittwald.v1.varnish.ConfigFile](#demittwaldv1varnishconfigfile)
  - [de.mittwald.v1.varnish.ConfigFileMetadata](#demittwaldv1varnishconfigfilemetadata)
  - [de.mittwald.v1.varnish.ConfigFileRef](#demittwaldv1varnishconfigfileref)
  - [de.mittwald.v1.varnish.ConfigRevision](#demittwaldv1varnishconfigrevision)
  - [de.mittwald.v1.varnish.ConfigTemplate](#demittwaldv1varnishconfigtemplate)
  - [de.mittwald.v1.varnish.GlobalConfigTemplate](#demittwaldv1varnishglobalconfigtemplate)
  - [de.mittwald.v1.varnish.Software](#demittwaldv1varnishsoftware)
  - [de.mittwald.v1.varnish.SoftwareConfig](#demittwaldv1varnishsoftwareconfig)
  - [de.mittwald.v1.varnish.SoftwareConfigFileAccessToken](#demittwaldv1varnishsoftwareconfigfileaccesstoken)
  - [de.mittwald.v1.varnish.SoftwareSetting](#demittwaldv1varnishsoftwaresetting)
  - [de.mittwald.v1.verification.EmailDetectPhishingMailResponse](#demittwaldv1verificationemaildetectphishingmailresponse)
  - [de.mittwald.v1.verification.EmailOrigin](#demittwaldv1verificationemailorigin)

---

## API Informationen

**Titel:** Mittwald API
**Version:** 2.0

### Beschreibung

## Introduction

This OpenAPI spec documents the mittwald API. It follows the
[OpenAPI 3.0.0 specification](https://spec.openapis.org/oas/v3.0.0.html).

## Authentication

You will need an API token to access the API. You can obtain one by logging into the
[mStudio](https://studio.mittwald.de) and navigating to the
["API Tokens" section in the user menu](https://studio.mittwald.de/app/profile/api-tokens).

When making requests to the API, you can authenticate by passing your API token in the `X-Access-Token` header or as a
bearer token.

## Rate Limiting

Please note that usage of the API is rate-limited to prevent abuse. You can inspect the rate limiting for your current
user by observing the `X-Ratelimit-*` headers included in each response.

## mStudio

A main consumer of the mittwald API is the management interface for our customers, the
[mStudio](https://studio.mittwald.de).

## Contact and support

For support, please use the [mStudio support area](https://studio.mittwald.de/app/support/conversations) or drop us an
email at [support@mittwald.de](mailto:support@mittwald.de).

For security issues, please report to [security@mittwald.de](mailto:security@mittwald.de).


### Kontakt
- **Name:** Mittwald CM Service GmbH & Co. KG

---

## Authentifizierung

### de.mittwald.v1.common.LegacyAccessToken

- **Typ:** apiKey
- **Beschreibung:** Legacy Access Token is required in header
- **In:** header
- **Name:** Authorization

### de.mittwald.v1.commons.AccessToken

- **Typ:** apiKey
- **Beschreibung:** Access Token is required in header
- **In:** header
- **Name:** x-access-token

### de.mittwald.v1.commons.LegacyBearerAuthentication

- **Typ:** http
- **Beschreibung:** 'Authorization: Bearer xyz' is required
- **Scheme:** bearer

---

## API Endpoints

### App

#### `GET /v2/app-installations`

**Zusammenfassung:** List AppInstallations that a user has access to.

**Operation ID:** `app-list-appinstallations-for-user`

**Tags:** App

**Parameter:**

- `appIds` (query) (optional)
  - IDs of Apps to filter for.
  - Schema: Array<string (uuid)>
- `searchTerm` (query) (optional)
  - Search term to filter for. The fields id, shortId, description, appVersion, systemSoftwareVersion and customerId are searchable.
  - Schema: string
- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer (Standard: `1000`)
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer

**Responses:**

- **200**
  - Object containing the list of AppInstallations.

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.app.AppInstallation` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.app.AppInstallation` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/app-installations/{appInstallationId}`

**Zusammenfassung:** Get an AppInstallation.

**Operation ID:** `app-get-appinstallation`

**Tags:** App

**Parameter:**

- `appInstallationId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **200**
  - The AppInstallation.

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.app.AppInstallation` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/app-installations/{appInstallationId}`

**Zusammenfassung:** Trigger an uninstallation process for an AppInstallation.

**Operation ID:** `app-uninstall-appinstallation`

**Tags:** App

**Parameter:**

- `appInstallationId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **204**
  - The app installation is going to be deleted.
- **404**
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/app-installations/{appInstallationId}`

**Zusammenfassung:** Update properties belonging to an AppInstallation.

**Operation ID:** `app-patch-appinstallation`

**Tags:** App

**Parameter:**

- `appInstallationId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

Properties to update for an AppInstallation.

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `appVersionId`: string (uuid)
  - `customDocumentRoot`: string
  - `description`: string
  - `systemSoftware`: Object
  - `updatePolicy`: `de.mittwald.v1.app.AppUpdatePolicy` (siehe Schema-Definition)
  - `userInputs`: Array<`de.mittwald.v1.app.SavedUserInput` (siehe Schema-Definition)>

**Responses:**

- **204**
  - The AppInstallation has been patched.
- **404**
- **429**
- **default**

---

#### `GET /v2/app-installations/{appInstallationId}`

**Zusammenfassung:** Get an AppInstallation.

**Operation ID:** `app-get-appinstallation`

**Tags:** App

**Parameter:**

- `appInstallationId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **200**
  - The AppInstallation.

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.app.AppInstallation` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/app-installations/{appInstallationId}`

**Zusammenfassung:** Trigger an uninstallation process for an AppInstallation.

**Operation ID:** `app-uninstall-appinstallation`

**Tags:** App

**Parameter:**

- `appInstallationId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **204**
  - The app installation is going to be deleted.
- **404**
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/app-installations/{appInstallationId}`

**Zusammenfassung:** Update properties belonging to an AppInstallation.

**Operation ID:** `app-patch-appinstallation`

**Tags:** App

**Parameter:**

- `appInstallationId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

Properties to update for an AppInstallation.

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `appVersionId`: string (uuid)
  - `customDocumentRoot`: string
  - `description`: string
  - `systemSoftware`: Object
  - `updatePolicy`: `de.mittwald.v1.app.AppUpdatePolicy` (siehe Schema-Definition)
  - `userInputs`: Array<`de.mittwald.v1.app.SavedUserInput` (siehe Schema-Definition)>

**Responses:**

- **204**
  - The AppInstallation has been patched.
- **404**
- **429**
- **default**

---

#### `GET /v2/app-installations/{appInstallationId}`

**Zusammenfassung:** Get an AppInstallation.

**Operation ID:** `app-get-appinstallation`

**Tags:** App

**Parameter:**

- `appInstallationId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **200**
  - The AppInstallation.

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.app.AppInstallation` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/app-installations/{appInstallationId}`

**Zusammenfassung:** Trigger an uninstallation process for an AppInstallation.

**Operation ID:** `app-uninstall-appinstallation`

**Tags:** App

**Parameter:**

- `appInstallationId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **204**
  - The app installation is going to be deleted.
- **404**
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/app-installations/{appInstallationId}`

**Zusammenfassung:** Update properties belonging to an AppInstallation.

**Operation ID:** `app-patch-appinstallation`

**Tags:** App

**Parameter:**

- `appInstallationId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

Properties to update for an AppInstallation.

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `appVersionId`: string (uuid)
  - `customDocumentRoot`: string
  - `description`: string
  - `systemSoftware`: Object
  - `updatePolicy`: `de.mittwald.v1.app.AppUpdatePolicy` (siehe Schema-Definition)
  - `userInputs`: Array<`de.mittwald.v1.app.SavedUserInput` (siehe Schema-Definition)>

**Responses:**

- **204**
  - The AppInstallation has been patched.
- **404**
- **429**
- **default**

---

#### `POST /v2/app-installations/{appInstallationId}/actions/copy`

**Zusammenfassung:** Request a copy of an AppInstallation.

**Operation ID:** `app-request-appinstallation-copy`

**Tags:** App

**Parameter:**

- `appInstallationId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

Properties to copy an app installation.

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `description` (erforderlich): string
  - `installationPath`: string
  - `targetProjectId`: string (uuid)

**Responses:**

- **201**
  - The AppInstallation copy has been requested.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `id` (erforderlich): string (uuid)
- **404**
- **429**
- **default**

---

#### `POST /v2/app-installations/{appInstallationId}/actions/{action}`

**Zusammenfassung:** Trigger a runtime action belonging to an AppInstallation.

**Operation ID:** `app-execute-action`

**Tags:** App

**Parameter:**

- `appInstallationId` (path) **(erforderlich)**
  - Schema: string
- `action` (path) **(erforderlich)**
  - Schema: `de.mittwald.v1.app.Action` (siehe Schema-Definition)

**Responses:**

- **204**
  - The given action has been executed.
- **404**
- **429**
- **default**

---

#### `PATCH /v2/app-installations/{appInstallationId}/database`

**Zusammenfassung:** Create linkage between an AppInstallation and a MySQLDatabase.

**Operation ID:** `app-link-database`

**Tags:** App

**Parameter:**

- `appInstallationId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `databaseId` (erforderlich): string (uuid)
  - `databaseUserIds`: Object
  - `purpose` (erforderlich): string - Enum: `primary`, `cache`, `custom`

**Responses:**

- **204**
  - The database has been linked.
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/app-installations/{appInstallationId}/database/replace`

**Zusammenfassung:** Replace a MySQL Database with another MySQL Database.

**Operation ID:** `app-replace-database`

**Tags:** App

**Parameter:**

- `appInstallationId` (path) **(erforderlich)**
  - The ID of the appinstallation you want the database to be replaced for.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `databaseUserIds`: Object
  - `newDatabaseId` (erforderlich): string (uuid)
  - `oldDatabaseId` (erforderlich): string (uuid)

**Responses:**

- **204**
  - The database has been linked.
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/app-installations/{appInstallationId}/databases/{databaseId}`

**Zusammenfassung:** Create linkage between an AppInstallation and DatabaseUsers.

This route is deprecated. Please use /v2/app-installations/{appInstallationId}/databases/{databaseId}/users instead.

**Tags:** App

**Parameter:**

- `appInstallationId` (path) **(erforderlich)**
  - Schema: string
- `databaseId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

Properties to update for the specified system software.

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `databaseUserIds` (erforderlich): Object

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/app-installations/{appInstallationId}/databases/{databaseId}`

**Zusammenfassung:** Remove linkage between an AppInstallation and a Database.

**Operation ID:** `app-unlink-database`

**Tags:** App

**Parameter:**

- `appInstallationId` (path) **(erforderlich)**
  - Schema: string
- `databaseId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **204**
  - The database has been unlinked.
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/app-installations/{appInstallationId}/databases/{databaseId}`

**Zusammenfassung:** Create linkage between an AppInstallation and DatabaseUsers.

This route is deprecated. Please use /v2/app-installations/{appInstallationId}/databases/{databaseId}/users instead.

**Tags:** App

**Parameter:**

- `appInstallationId` (path) **(erforderlich)**
  - Schema: string
- `databaseId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

Properties to update for the specified system software.

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `databaseUserIds` (erforderlich): Object

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/app-installations/{appInstallationId}/databases/{databaseId}`

**Zusammenfassung:** Remove linkage between an AppInstallation and a Database.

**Operation ID:** `app-unlink-database`

**Tags:** App

**Parameter:**

- `appInstallationId` (path) **(erforderlich)**
  - Schema: string
- `databaseId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **204**
  - The database has been unlinked.
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/app-installations/{appInstallationId}/databases/{databaseId}/users`

**Zusammenfassung:** Create linkage between an AppInstallation and DatabaseUsers.

**Operation ID:** `app-set-database-users`

**Tags:** App

**Parameter:**

- `appInstallationId` (path) **(erforderlich)**
  - Schema: string
- `databaseId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

Properties to update for the specified system software.

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `databaseUserIds` (erforderlich): Object

**Responses:**

- **204**
  - The database users have been set.
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/app-installations/{appInstallationId}/missing-dependencies`

**Zusammenfassung:** Get the missing requirements of an appInstallation for a specific target AppVersion.

**Operation ID:** `app-get-missing-dependencies-for-appinstallation`

**Tags:** App

**Parameter:**

- `appInstallationId` (path) **(erforderlich)**
  - Schema: string
- `targetAppVersionID` (query) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **200**
  - The missing dependencies of the AppInstallation for the target AppVersion.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `missingSystemSoftwareDependencies`: Array<`de.mittwald.v1.app.SystemSoftwareDependency` (siehe Schema-Definition)>
    - `missingUserInputs`: Array<`de.mittwald.v1.app.UserInput` (siehe Schema-Definition)>
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/app-installations/{appInstallationId}/status`

**Zusammenfassung:** Get runtime status belonging to an AppInstallation.

**Operation ID:** `app-retrieve-status`

**Tags:** App

**Parameter:**

- `appInstallationId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **200**
  - The appInstallation status.

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.app.AppInstallationStatus` (siehe Schema-Definition)
- **404**
- **429**
- **default**

---

#### `GET /v2/app-installations/{appInstallationId}/systemSoftware`

**Zusammenfassung:** Get the installed `SystemSoftware' for a specific `AppInstallation`.

**Operation ID:** `app-get-installed-systemsoftware-for-appinstallation`

**Tags:** App

**Parameter:**

- `appInstallationId` (path) **(erforderlich)**
  - Schema: string
- `tagFilter` (query) (optional)
  - Schema: string

**Responses:**

- **200**
  - The list of installed 'SystemSoftware'.

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.app.SystemSoftware` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.app.SystemSoftware` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/appinstallations/{appInstallationId}`

**Zusammenfassung:** Get an AppInstallation.

This route is deprecated. Please use /v2/app-installations/{appInstallationId} instead.

**Tags:** App

**Parameter:**

- `appInstallationId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/appinstallations/{appInstallationId}`

**Zusammenfassung:** Trigger an uninstallation process for an AppInstallation.

This route is deprecated. Please use /v2/app-installations/{appInstallationId} instead.

**Tags:** App

**Parameter:**

- `appInstallationId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/appinstallations/{appInstallationId}`

**Zusammenfassung:** Update properties belonging to an AppInstallation.

This route is deprecated. Please use /v2/app-installations/{appInstallationId} instead.

**Tags:** App

**Parameter:**

- `appInstallationId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

Properties to update for an AppInstallation.

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `appVersionId`: string (uuid)
  - `customDocumentRoot`: string
  - `description`: string
  - `systemSoftware`: Object
  - `updatePolicy`: `de.mittwald.v1.app.AppUpdatePolicy` (siehe Schema-Definition)
  - `userInputs`: Array<`de.mittwald.v1.app.SavedUserInput` (siehe Schema-Definition)>

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

---

#### `GET /v2/appinstallations/{appInstallationId}`

**Zusammenfassung:** Get an AppInstallation.

This route is deprecated. Please use /v2/app-installations/{appInstallationId} instead.

**Tags:** App

**Parameter:**

- `appInstallationId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/appinstallations/{appInstallationId}`

**Zusammenfassung:** Trigger an uninstallation process for an AppInstallation.

This route is deprecated. Please use /v2/app-installations/{appInstallationId} instead.

**Tags:** App

**Parameter:**

- `appInstallationId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/appinstallations/{appInstallationId}`

**Zusammenfassung:** Update properties belonging to an AppInstallation.

This route is deprecated. Please use /v2/app-installations/{appInstallationId} instead.

**Tags:** App

**Parameter:**

- `appInstallationId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

Properties to update for an AppInstallation.

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `appVersionId`: string (uuid)
  - `customDocumentRoot`: string
  - `description`: string
  - `systemSoftware`: Object
  - `updatePolicy`: `de.mittwald.v1.app.AppUpdatePolicy` (siehe Schema-Definition)
  - `userInputs`: Array<`de.mittwald.v1.app.SavedUserInput` (siehe Schema-Definition)>

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

---

#### `GET /v2/appinstallations/{appInstallationId}`

**Zusammenfassung:** Get an AppInstallation.

This route is deprecated. Please use /v2/app-installations/{appInstallationId} instead.

**Tags:** App

**Parameter:**

- `appInstallationId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/appinstallations/{appInstallationId}`

**Zusammenfassung:** Trigger an uninstallation process for an AppInstallation.

This route is deprecated. Please use /v2/app-installations/{appInstallationId} instead.

**Tags:** App

**Parameter:**

- `appInstallationId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/appinstallations/{appInstallationId}`

**Zusammenfassung:** Update properties belonging to an AppInstallation.

This route is deprecated. Please use /v2/app-installations/{appInstallationId} instead.

**Tags:** App

**Parameter:**

- `appInstallationId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

Properties to update for an AppInstallation.

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `appVersionId`: string (uuid)
  - `customDocumentRoot`: string
  - `description`: string
  - `systemSoftware`: Object
  - `updatePolicy`: `de.mittwald.v1.app.AppUpdatePolicy` (siehe Schema-Definition)
  - `userInputs`: Array<`de.mittwald.v1.app.SavedUserInput` (siehe Schema-Definition)>

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

---

#### `POST /v2/appinstallations/{appInstallationId}/actions/copy`

**Zusammenfassung:** Request a copy of an AppInstallation.

This route is deprecated. Please use /v2/app-installations/{appInstallationId}/actions/copy instead.

**Tags:** App

**Parameter:**

- `appInstallationId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

Properties to copy an app installation.

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `description` (erforderlich): string
  - `installationPath`: string
  - `targetProjectId`: string (uuid)

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

---

#### `POST /v2/appinstallations/{appInstallationId}/actions/{action}`

**Zusammenfassung:** Trigger a runtime action belonging to an AppInstallation.

This route is deprecated. Please use /v2/app-installations/{appInstallationId}/actions/{action} instead.

**Tags:** App

**Parameter:**

- `appInstallationId` (path) **(erforderlich)**
  - Schema: string
- `action` (path) **(erforderlich)**
  - Schema: `de.mittwald.v1.app.Action` (siehe Schema-Definition)

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

---

#### `PUT /v2/appinstallations/{appInstallationId}/databases`

**Zusammenfassung:** Create linkage between an AppInstallation and a MySql-Database.

This route is deprecated. Use PATCH /v2/app-installations/{appInstallationId}/database instead.

**Operation ID:** `deprecated-app-link-database`

**Tags:** App

**Parameter:**

- `appInstallationId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

Properties for linking a Database

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `databaseId` (erforderlich): string (uuid)
  - `databaseUserIds`: Object
  - `purpose` (erforderlich): string - Enum: `primary`, `cache`, `custom`

**Responses:**

- **204**
  - The database has been linked.
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/appinstallations/{appInstallationId}/databases/{databaseId}`

**Zusammenfassung:** Create linkage between an AppInstallation and DatabaseUsers.

This route is deprecated. Please use /v2/app-installations/{appInstallationId}/databases/{databaseId}/users instead.

**Tags:** App

**Parameter:**

- `appInstallationId` (path) **(erforderlich)**
  - Schema: string
- `databaseId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

Properties to update for the specified system software.

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `databaseUserIds` (erforderlich): Object

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/appinstallations/{appInstallationId}/databases/{databaseId}`

**Zusammenfassung:** Remove linkage between an AppInstallation and a Database.

This route is deprecated. Please use /v2/app-installations/{appInstallationId}/databases/{databaseId} instead.

**Tags:** App

**Parameter:**

- `appInstallationId` (path) **(erforderlich)**
  - Schema: string
- `databaseId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/appinstallations/{appInstallationId}/databases/{databaseId}`

**Zusammenfassung:** Create linkage between an AppInstallation and DatabaseUsers.

This route is deprecated. Please use /v2/app-installations/{appInstallationId}/databases/{databaseId}/users instead.

**Tags:** App

**Parameter:**

- `appInstallationId` (path) **(erforderlich)**
  - Schema: string
- `databaseId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

Properties to update for the specified system software.

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `databaseUserIds` (erforderlich): Object

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/appinstallations/{appInstallationId}/databases/{databaseId}`

**Zusammenfassung:** Remove linkage between an AppInstallation and a Database.

This route is deprecated. Please use /v2/app-installations/{appInstallationId}/databases/{databaseId} instead.

**Tags:** App

**Parameter:**

- `appInstallationId` (path) **(erforderlich)**
  - Schema: string
- `databaseId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/appinstallations/{appInstallationId}/missing-dependencies`

**Zusammenfassung:** Get the missing requirements of an appInstallation for a specific target AppVersion.

This route is deprecated. Please use /v2/app-installations/{appInstallationId}/missing-dependencies instead.

**Tags:** App

**Parameter:**

- `appInstallationId` (path) **(erforderlich)**
  - Schema: string
- `targetAppVersionID` (query) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/appinstallations/{appInstallationId}/status`

**Zusammenfassung:** Get runtime status belonging to an AppInstallation.

This route is deprecated. Please use /v2/app-installations/{appInstallationId}/status instead.

**Tags:** App

**Parameter:**

- `appInstallationId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

---

#### `GET /v2/apps`

**Zusammenfassung:** List Apps.

**Operation ID:** `app-list-apps`

**Tags:** App

**Parameter:**

- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer

**Responses:**

- **200**
  - Object containing the list of Apps.

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.app.App` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.app.App` (siehe Schema-Definition)
- **429**
- **default**

**Security:**


---

#### `GET /v2/apps/{appId}`

**Zusammenfassung:** Get an App.

**Operation ID:** `app-get-app`

**Tags:** App

**Parameter:**

- `appId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **200**
  - The app object.

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.app.App` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/apps/{appId}/versions`

**Zusammenfassung:** List AppVersions belonging to an App.

**Operation ID:** `app-list-appversions`

**Tags:** App

**Parameter:**

- `appId` (path) **(erforderlich)**
  - Schema: string (uuid)
- `recommended` (query) (optional)
  - Schema: boolean

**Responses:**

- **200**
  - Object containing the list of AppVersions.

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.app.AppVersion` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.app.AppVersion` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/apps/{appId}/versions/{appVersionId}`

**Zusammenfassung:** Get an AppVersion.

**Operation ID:** `app-get-appversion`

**Tags:** App

**Parameter:**

- `appId` (path) **(erforderlich)**
  - Schema: string (uuid)
- `appVersionId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **200**
  - The appVersion object.

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.app.AppVersion` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/apps/{appId}/versions/{baseAppVersionId}/update-candidates`

**Zusammenfassung:** List update candidates belonging to an AppVersion.

**Operation ID:** `app-list-update-candidates-for-appversion`

**Tags:** App

**Parameter:**

- `appId` (path) **(erforderlich)**
  - Schema: string (uuid)
- `baseAppVersionId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **200**
  - Object containing the list of AppVersions.

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.app.AppVersion` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.app.AppVersion` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}/app-installations`

**Zusammenfassung:** List AppInstallations belonging to a Project.

**Operation ID:** `app-list-appinstallations`

**Tags:** App

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - List AppInstallations belonging to a Project.
  - Schema: string
- `appIds` (query) (optional)
  - IDs of Apps to filter for.
  - Schema: Array<string (uuid)>
- `searchTerm` (query) (optional)
  - Search term to filter for. The fields id, shortId, description, appVersion and systemSoftwareVersion are searchable.
  - Schema: string
- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer (Standard: `1000`)
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer

**Responses:**

- **200**
  - Object containing the list of AppInstallations.

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.app.AppInstallation` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.app.AppInstallation` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/projects/{projectId}/app-installations`

**Zusammenfassung:** Request an AppInstallation.

**Operation ID:** `app-request-appinstallation`

**Tags:** App

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `appVersionId` (erforderlich): string (uuid)
  - `description` (erforderlich): string
  - `installationPath`: string
  - `updatePolicy` (erforderlich): `de.mittwald.v1.app.AppUpdatePolicy` (siehe Schema-Definition)
  - `userInputs` (erforderlich): Array<`de.mittwald.v1.app.SavedUserInput` (siehe Schema-Definition)>

**Responses:**

- **201**
  - The AppInstallation has been requested.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `id` (erforderlich): string (uuid)
- **400**
- **404**
- **429**
- **default**

---

#### `GET /v2/projects/{projectId}/app-installations`

**Zusammenfassung:** List AppInstallations belonging to a Project.

**Operation ID:** `app-list-appinstallations`

**Tags:** App

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - List AppInstallations belonging to a Project.
  - Schema: string
- `appIds` (query) (optional)
  - IDs of Apps to filter for.
  - Schema: Array<string (uuid)>
- `searchTerm` (query) (optional)
  - Search term to filter for. The fields id, shortId, description, appVersion and systemSoftwareVersion are searchable.
  - Schema: string
- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer (Standard: `1000`)
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer

**Responses:**

- **200**
  - Object containing the list of AppInstallations.

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.app.AppInstallation` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.app.AppInstallation` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/projects/{projectId}/app-installations`

**Zusammenfassung:** Request an AppInstallation.

**Operation ID:** `app-request-appinstallation`

**Tags:** App

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `appVersionId` (erforderlich): string (uuid)
  - `description` (erforderlich): string
  - `installationPath`: string
  - `updatePolicy` (erforderlich): `de.mittwald.v1.app.AppUpdatePolicy` (siehe Schema-Definition)
  - `userInputs` (erforderlich): Array<`de.mittwald.v1.app.SavedUserInput` (siehe Schema-Definition)>

**Responses:**

- **201**
  - The AppInstallation has been requested.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `id` (erforderlich): string (uuid)
- **400**
- **404**
- **429**
- **default**

---

#### `GET /v2/projects/{projectId}/appinstallations`

**Zusammenfassung:** List AppInstallations belonging to a Project.

This route is deprecated. Please use /v2/projects/{projectId}/app-installations instead.

**Tags:** App

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - List AppInstallations belonging to a Project.
  - Schema: string
- `appIds` (query) (optional)
  - IDs of Apps to filter for.
  - Schema: Array<string (uuid)>
- `searchTerm` (query) (optional)
  - Search term to filter for. The fields id, shortId, description, appVersion and systemSoftwareVersion are searchable.
  - Schema: string
- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer (Standard: `1000`)
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/projects/{projectId}/appinstallations`

**Zusammenfassung:** Request an AppInstallation.

This route is deprecated. Please use /v2/projects/{projectId}/app-installations instead.

**Tags:** App

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `appVersionId` (erforderlich): string (uuid)
  - `description` (erforderlich): string
  - `installationPath`: string
  - `updatePolicy` (erforderlich): `de.mittwald.v1.app.AppUpdatePolicy` (siehe Schema-Definition)
  - `userInputs` (erforderlich): Array<`de.mittwald.v1.app.SavedUserInput` (siehe Schema-Definition)>

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

---

#### `GET /v2/projects/{projectId}/appinstallations`

**Zusammenfassung:** List AppInstallations belonging to a Project.

This route is deprecated. Please use /v2/projects/{projectId}/app-installations instead.

**Tags:** App

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - List AppInstallations belonging to a Project.
  - Schema: string
- `appIds` (query) (optional)
  - IDs of Apps to filter for.
  - Schema: Array<string (uuid)>
- `searchTerm` (query) (optional)
  - Search term to filter for. The fields id, shortId, description, appVersion and systemSoftwareVersion are searchable.
  - Schema: string
- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer (Standard: `1000`)
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/projects/{projectId}/appinstallations`

**Zusammenfassung:** Request an AppInstallation.

This route is deprecated. Please use /v2/projects/{projectId}/app-installations instead.

**Tags:** App

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `appVersionId` (erforderlich): string (uuid)
  - `description` (erforderlich): string
  - `installationPath`: string
  - `updatePolicy` (erforderlich): `de.mittwald.v1.app.AppUpdatePolicy` (siehe Schema-Definition)
  - `userInputs` (erforderlich): Array<`de.mittwald.v1.app.SavedUserInput` (siehe Schema-Definition)>

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

---

#### `GET /v2/system-software/{systemSoftwareId}/versions`

**Zusammenfassung:** List SystemSoftwareVersions belonging to a SystemSoftware.

This route is deprecated. Please use /v2/system-softwares/{systemSoftwareId}/versions instead.

**Tags:** App

**Parameter:**

- `systemSoftwareId` (path) **(erforderlich)**
  - Schema: string (uuid)
- `versionRange` (query) (optional)
  - Schema: string
- `recommended` (query) (optional)
  - Schema: boolean

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/system-software/{systemSoftwareId}/versions/{systemSoftwareVersionId}`

**Zusammenfassung:** Get a SystemSoftwareVersion.

This route is deprecated. Please use /v2/system-softwares/{systemSoftwareId}/versions/{systemSoftwareVersionId} instead.

**Tags:** App

**Parameter:**

- `systemSoftwareId` (path) **(erforderlich)**
  - Schema: string (uuid)
- `systemSoftwareVersionId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/system-softwares`

**Zusammenfassung:** List SystemSoftwares.

**Operation ID:** `app-list-systemsoftwares`

**Tags:** App

**Parameter:**

- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer (Standard: `1000`)
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer

**Responses:**

- **200**
  - Object containing the list of SystemSoftwares.

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.app.SystemSoftware` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.app.SystemSoftware` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/system-softwares/{systemSoftwareId}`

**Zusammenfassung:** Get a SystemSoftware.

**Operation ID:** `app-get-systemsoftware`

**Tags:** App

**Parameter:**

- `systemSoftwareId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **200**
  - The SystemSoftware.

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.app.SystemSoftware` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/system-softwares/{systemSoftwareId}/versions`

**Zusammenfassung:** List SystemSoftwareVersions belonging to a SystemSoftware.

**Operation ID:** `app-list-systemsoftwareversions`

**Tags:** App

**Parameter:**

- `systemSoftwareId` (path) **(erforderlich)**
  - Schema: string (uuid)
- `versionRange` (query) (optional)
  - Schema: string
- `recommended` (query) (optional)
  - Schema: boolean

**Responses:**

- **200**
  - Object containing the list of SystemSoftwareVersions.

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.app.SystemSoftwareVersion` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.app.SystemSoftwareVersion` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/system-softwares/{systemSoftwareId}/versions/{systemSoftwareVersionId}`

**Zusammenfassung:** Get a SystemSoftwareVersion.

**Operation ID:** `app-get-systemsoftwareversion`

**Tags:** App

**Parameter:**

- `systemSoftwareId` (path) **(erforderlich)**
  - Schema: string (uuid)
- `systemSoftwareVersionId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **200**
  - The systemSoftwareVersion object.

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.app.SystemSoftwareVersion` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/systemsoftware/{systemSoftwareId}/versions`

**Zusammenfassung:** List SystemSoftwareVersions belonging to a SystemSoftware.

This route is deprecated. Please use /v2/system-softwares/{systemSoftwareId}/versions instead.

**Tags:** App

**Parameter:**

- `systemSoftwareId` (path) **(erforderlich)**
  - Schema: string (uuid)
- `versionRange` (query) (optional)
  - Schema: string
- `recommended` (query) (optional)
  - Schema: boolean

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/systemsoftware/{systemSoftwareId}/versions/{systemSoftwareVersionId}`

**Zusammenfassung:** Get a SystemSoftwareVersion.

This route is deprecated. Please use /v2/system-softwares/{systemSoftwareId}/versions/{systemSoftwareVersionId} instead.

**Tags:** App

**Parameter:**

- `systemSoftwareId` (path) **(erforderlich)**
  - Schema: string (uuid)
- `systemSoftwareVersionId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/systemsoftwares`

**Zusammenfassung:** List SystemSoftwares.

This route is deprecated. Please use /v2/system-softwares instead.

**Tags:** App

**Parameter:**

- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer (Standard: `1000`)
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/systemsoftwares/{systemSoftwareId}`

**Zusammenfassung:** Get a SystemSoftware.

This route is deprecated. Please use /v2/system-softwares/{systemSoftwareId} instead.

**Tags:** App

**Parameter:**

- `systemSoftwareId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---


### Article

#### `GET /v2/articles`

**Zusammenfassung:** List Articles.

**Operation ID:** `article-list-articles`

**Tags:** Article

**Parameter:**

- `customerId` (query) (optional)
  - not in use.
  - Schema: string
- `tags` (query) (optional)
  - Filters articles that contain at least one of the specified tags (logical OR).
  - Schema: Array<string>
- `templateNames` (query) (optional)
  - Schema: Array<string>
- `articleIds` (query) (optional)
  - Schema: Array<string>
- `orderable` (query) (optional)
  - Schema: Array<string - Enum: `forbidden`, `internal`, `beta_testing`, `full`, `deprecated`>
- `name` (query) (optional)
  - Schema: string
- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer

**Responses:**

- **200**
  - Object containing the list of Articles

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.article.ReadableArticle` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.article.ReadableArticle` (siehe Schema-Definition)
- **429**
- **default**

**Security:**


---

#### `GET /v2/articles/{articleId}`

**Zusammenfassung:** Get an Article.

**Operation ID:** `article-get-article`

**Tags:** Article

**Parameter:**

- `articleId` (path) **(erforderlich)**
  - Schema: string
- `customerId` (query) (optional)
  - not in use.
  - Schema: string

**Responses:**

- **200**
  - The Article object

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.article.ReadableArticle` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**


---


### Backup

#### `GET /v2/project-backup-schedules/{projectBackupScheduleId}`

**Zusammenfassung:** Get a ProjectBackupSchedule.

**Operation ID:** `backup-get-project-backup-schedule`

**Tags:** Backup

**Parameter:**

- `projectBackupScheduleId` (path) **(erforderlich)**
  - ID of the ProjectBackupSchedule to retrieve.
  - Schema: string (uuid)

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.backup.ProjectBackupSchedule` (siehe Schema-Definition)
- **403**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/project-backup-schedules/{projectBackupScheduleId}`

**Zusammenfassung:** Delete a ProjectBackupSchedule.

**Operation ID:** `backup-delete-project-backup-schedule`

**Tags:** Backup

**Parameter:**

- `projectBackupScheduleId` (path) **(erforderlich)**
  - ID of the ProjectBackupSchedule to delete.
  - Schema: string (uuid)

**Responses:**

- **204**
  - NoContent
- **403**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/project-backup-schedules/{projectBackupScheduleId}`

**Zusammenfassung:** Update a ProjectBackupSchedule.

**Operation ID:** `backup-update-project-backup-schedule`

**Tags:** Backup

**Parameter:**

- `projectBackupScheduleId` (path) **(erforderlich)**
  - ID of the ProjectBackupSchedule to be updated.
  - Schema: string (uuid)

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `description`: string
  - `schedule`: string
  - `ttl`: string

**Responses:**

- **204**
  - NoContent
- **400**
- **404**
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/project-backup-schedules/{projectBackupScheduleId}`

**Zusammenfassung:** Get a ProjectBackupSchedule.

**Operation ID:** `backup-get-project-backup-schedule`

**Tags:** Backup

**Parameter:**

- `projectBackupScheduleId` (path) **(erforderlich)**
  - ID of the ProjectBackupSchedule to retrieve.
  - Schema: string (uuid)

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.backup.ProjectBackupSchedule` (siehe Schema-Definition)
- **403**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/project-backup-schedules/{projectBackupScheduleId}`

**Zusammenfassung:** Delete a ProjectBackupSchedule.

**Operation ID:** `backup-delete-project-backup-schedule`

**Tags:** Backup

**Parameter:**

- `projectBackupScheduleId` (path) **(erforderlich)**
  - ID of the ProjectBackupSchedule to delete.
  - Schema: string (uuid)

**Responses:**

- **204**
  - NoContent
- **403**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/project-backup-schedules/{projectBackupScheduleId}`

**Zusammenfassung:** Update a ProjectBackupSchedule.

**Operation ID:** `backup-update-project-backup-schedule`

**Tags:** Backup

**Parameter:**

- `projectBackupScheduleId` (path) **(erforderlich)**
  - ID of the ProjectBackupSchedule to be updated.
  - Schema: string (uuid)

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `description`: string
  - `schedule`: string
  - `ttl`: string

**Responses:**

- **204**
  - NoContent
- **400**
- **404**
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/project-backup-schedules/{projectBackupScheduleId}`

**Zusammenfassung:** Get a ProjectBackupSchedule.

**Operation ID:** `backup-get-project-backup-schedule`

**Tags:** Backup

**Parameter:**

- `projectBackupScheduleId` (path) **(erforderlich)**
  - ID of the ProjectBackupSchedule to retrieve.
  - Schema: string (uuid)

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.backup.ProjectBackupSchedule` (siehe Schema-Definition)
- **403**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/project-backup-schedules/{projectBackupScheduleId}`

**Zusammenfassung:** Delete a ProjectBackupSchedule.

**Operation ID:** `backup-delete-project-backup-schedule`

**Tags:** Backup

**Parameter:**

- `projectBackupScheduleId` (path) **(erforderlich)**
  - ID of the ProjectBackupSchedule to delete.
  - Schema: string (uuid)

**Responses:**

- **204**
  - NoContent
- **403**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/project-backup-schedules/{projectBackupScheduleId}`

**Zusammenfassung:** Update a ProjectBackupSchedule.

**Operation ID:** `backup-update-project-backup-schedule`

**Tags:** Backup

**Parameter:**

- `projectBackupScheduleId` (path) **(erforderlich)**
  - ID of the ProjectBackupSchedule to be updated.
  - Schema: string (uuid)

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `description`: string
  - `schedule`: string
  - `ttl`: string

**Responses:**

- **204**
  - NoContent
- **400**
- **404**
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/project-backups/{projectBackupId}`

**Zusammenfassung:** Get a ProjectBackup.

**Operation ID:** `backup-get-project-backup`

**Tags:** Backup

**Parameter:**

- `projectBackupId` (path) **(erforderlich)**
  - ID of the ProjectBackup to retrieve.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.backup.ProjectBackup` (siehe Schema-Definition)
- **403**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/project-backups/{projectBackupId}`

**Zusammenfassung:** Delete a ProjectBackup.

**Operation ID:** `backup-delete-project-backup`

**Tags:** Backup

**Parameter:**

- `projectBackupId` (path) **(erforderlich)**
  - ID of the ProjectBackup to be deleted.
  - Schema: string

**Responses:**

- **204**
  - NoContent
- **403**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/project-backups/{projectBackupId}`

**Zusammenfassung:** Get a ProjectBackup.

**Operation ID:** `backup-get-project-backup`

**Tags:** Backup

**Parameter:**

- `projectBackupId` (path) **(erforderlich)**
  - ID of the ProjectBackup to retrieve.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.backup.ProjectBackup` (siehe Schema-Definition)
- **403**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/project-backups/{projectBackupId}`

**Zusammenfassung:** Delete a ProjectBackup.

**Operation ID:** `backup-delete-project-backup`

**Tags:** Backup

**Parameter:**

- `projectBackupId` (path) **(erforderlich)**
  - ID of the ProjectBackup to be deleted.
  - Schema: string

**Responses:**

- **204**
  - NoContent
- **403**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/project-backups/{projectBackupId}/description`

**Zusammenfassung:** Change the description of a ProjectBackup.

**Operation ID:** `backup-update-project-backup-description`

**Tags:** Backup

**Parameter:**

- `projectBackupId` (path) **(erforderlich)**
  - ID of the ProjectBackup to change the description of.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `description`: string

**Responses:**

- **204**
  - NoContent
- **400**
- **403**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/project-backups/{projectBackupId}/export`

**Zusammenfassung:** Export a ProjectBackup for download.

**Operation ID:** `backup-create-project-backup-export`

**Tags:** Backup

**Parameter:**

- `projectBackupId` (path) **(erforderlich)**
  - ID of the ProjectBackup to export.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `format` (erforderlich): string - Enum: `tar`, `zip`
  - `password`: string

**Responses:**

- **204**
  - NoContent
- **400**
- **403**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/project-backups/{projectBackupId}/export`

**Zusammenfassung:** Delete a ProjectBackupExport.

**Operation ID:** `backup-delete-project-backup-export`

**Tags:** Backup

**Parameter:**

- `projectBackupId` (path) **(erforderlich)**
  - ID if the ProjectBackup to delete the export of.
  - Schema: string

**Responses:**

- **204**
  - NoContent
- **403**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/project-backups/{projectBackupId}/export`

**Zusammenfassung:** Export a ProjectBackup for download.

**Operation ID:** `backup-create-project-backup-export`

**Tags:** Backup

**Parameter:**

- `projectBackupId` (path) **(erforderlich)**
  - ID of the ProjectBackup to export.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `format` (erforderlich): string - Enum: `tar`, `zip`
  - `password`: string

**Responses:**

- **204**
  - NoContent
- **400**
- **403**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/project-backups/{projectBackupId}/export`

**Zusammenfassung:** Delete a ProjectBackupExport.

**Operation ID:** `backup-delete-project-backup-export`

**Tags:** Backup

**Parameter:**

- `projectBackupId` (path) **(erforderlich)**
  - ID if the ProjectBackup to delete the export of.
  - Schema: string

**Responses:**

- **204**
  - NoContent
- **403**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/project-backups/{projectBackupId}/path`

**Zusammenfassung:** Get table of contents for a ProjectBackup.

**Operation ID:** `backup-get-project-backup-directories`

**Tags:** Backup

**Parameter:**

- `projectBackupId` (path) **(erforderlich)**
  - UUID of the Project Backup to get the table of contents for.
  - Schema: string
- `directory` (query) (optional)
  - The directory to start listing subdirectories from.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.backup.ProjectBackupPath` (siehe Schema-Definition)
- **403**
- **404**
- **429**
- **502**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/project-backups/{projectBackupId}/restore-path`

**Zusammenfassung:** Restore a ProjectBackup's path.

**Operation ID:** `backup-request-project-backup-restore-path`

**Tags:** Backup

**Parameter:**

- `projectBackupId` (path) **(erforderlich)**
  - ID of the ProjectBackup to restore the path.
  - Schema: string

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** `de.mittwald.v1.backup.ProjectBackupRestorePathRequest` (siehe Schema-Definition)

**Responses:**

- **204**
  - NoContent
- **400**
- **403**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}/backup-schedules`

**Zusammenfassung:** List BackupSchedules belonging to a Project.

**Operation ID:** `backup-list-project-backup-schedules`

**Tags:** Backup

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to list BackupSchedules for.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.backup.ProjectBackupSchedule` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.backup.ProjectBackupSchedule` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/projects/{projectId}/backup-schedules`

**Zusammenfassung:** Create a BackupSchedule for a Project.

**Operation ID:** `backup-create-project-backup-schedule`

**Tags:** Backup

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to create a BackupSchedule for.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `description`: string
  - `schedule` (erforderlich): string
  - `ttl` (erforderlich): string

**Responses:**

- **201**
  - Created

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.backup.ProjectBackupSchedule` (siehe Schema-Definition)
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}/backup-schedules`

**Zusammenfassung:** List BackupSchedules belonging to a Project.

**Operation ID:** `backup-list-project-backup-schedules`

**Tags:** Backup

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to list BackupSchedules for.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.backup.ProjectBackupSchedule` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.backup.ProjectBackupSchedule` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/projects/{projectId}/backup-schedules`

**Zusammenfassung:** Create a BackupSchedule for a Project.

**Operation ID:** `backup-create-project-backup-schedule`

**Tags:** Backup

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to create a BackupSchedule for.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `description`: string
  - `schedule` (erforderlich): string
  - `ttl` (erforderlich): string

**Responses:**

- **201**
  - Created

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.backup.ProjectBackupSchedule` (siehe Schema-Definition)
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}/backups`

**Zusammenfassung:** List Backups belonging to a Project.

**Operation ID:** `backup-list-project-backups`

**Tags:** Backup

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to get Backups for.
  - Schema: string
- `searchTerm` (query) (optional)
  - Search term to list Project Backups for. The fields id and description are searchable.
  - Schema: string
- `withExportsOnly` (query) (optional)
  - If true, only backups with exports will be listed.
  - Schema: boolean
- `sortOrder` (query) (optional)
  - Sort order for listing backups. Defaults to backup_sort_order_oldest_first.
  - Schema: `de.mittwald.v1.backup.BackupSortOrder` (siehe Schema-Definition)
- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer (Standard: `1000`)
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.backup.ProjectBackup` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.backup.ProjectBackup` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/projects/{projectId}/backups`

**Zusammenfassung:** Create a Backup of a Project.

**Operation ID:** `backup-create-project-backup`

**Tags:** Backup

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the project to create a Backup for.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `description`: string
  - `expirationTime` (erforderlich): string (date-time)

**Responses:**

- **201**
  - Created

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.backup.ProjectBackup` (siehe Schema-Definition)
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}/backups`

**Zusammenfassung:** List Backups belonging to a Project.

**Operation ID:** `backup-list-project-backups`

**Tags:** Backup

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to get Backups for.
  - Schema: string
- `searchTerm` (query) (optional)
  - Search term to list Project Backups for. The fields id and description are searchable.
  - Schema: string
- `withExportsOnly` (query) (optional)
  - If true, only backups with exports will be listed.
  - Schema: boolean
- `sortOrder` (query) (optional)
  - Sort order for listing backups. Defaults to backup_sort_order_oldest_first.
  - Schema: `de.mittwald.v1.backup.BackupSortOrder` (siehe Schema-Definition)
- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer (Standard: `1000`)
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.backup.ProjectBackup` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.backup.ProjectBackup` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/projects/{projectId}/backups`

**Zusammenfassung:** Create a Backup of a Project.

**Operation ID:** `backup-create-project-backup`

**Tags:** Backup

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the project to create a Backup for.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `description`: string
  - `expirationTime` (erforderlich): string (date-time)

**Responses:**

- **201**
  - Created

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.backup.ProjectBackup` (siehe Schema-Definition)
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---


### Container

#### `POST /v2/actions/validate-container-registry-uri`

**Zusammenfassung:** Validate a Registries' URI.

**Operation ID:** `container-validate-container-registry-uri`

**Tags:** Container

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `registryUri` (erforderlich): string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `reason`: string
    - `valid` (erforderlich): boolean
- **400**
- **403**
- **404**
- **412**
- **429**
- **500**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/container-image-config`

**Zusammenfassung:** Get a ContainerImageConfig.

**Operation ID:** `container-get-container-image-config`

**Tags:** Container

**Parameter:**

- `imageReference` (query) **(erforderlich)**
  - The image reference to get a ContainerImageConfig for.
  - Schema: string
- `useCredentialsForProjectId` (query) (optional)
  - ID of the Project to get a ContainerImageConfig with belonging Registry credentials for.
  - Schema: string (uuid)
- `useCredentialsForRegistryId` (query) (optional)
  - ID of the Registry to get a ContainerImageConfig with credentials for.
  - Schema: string (uuid)
- `generateAiData` (query) (optional)
  - Whether ai data should be generated during request. The request duration can take up to 15 seconds.
  - Schema: boolean

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.container.ContainerImageConfig` (siehe Schema-Definition)
- **400**
- **403**
- **404**
- **412**
- **429**
- **500**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}/registries`

**Zusammenfassung:** List Registries belonging to a Project.

**Operation ID:** `container-list-registries`

**Tags:** Container

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to get Registries for.
  - Schema: string
- `hasCredentials` (query) (optional)
  - Filters the list depending on whether registry credentials exist.
  - Schema: boolean
- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer (Standard: `1000`)
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.container.Registry` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.container.Registry` (siehe Schema-Definition)
- **400**
- **403**
- **429**
- **500**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/projects/{projectId}/registries`

**Zusammenfassung:** Create a Registry.

**Operation ID:** `container-create-registry`

**Tags:** Container

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to create a Registry for.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** `de.mittwald.v1.container.CreateRegistry` (siehe Schema-Definition)

**Responses:**

- **201**
  - Created

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.container.Registry` (siehe Schema-Definition)
- **400**
- **403**
- **404**
- **409**
- **412**
- **429**
- **500**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}/registries`

**Zusammenfassung:** List Registries belonging to a Project.

**Operation ID:** `container-list-registries`

**Tags:** Container

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to get Registries for.
  - Schema: string
- `hasCredentials` (query) (optional)
  - Filters the list depending on whether registry credentials exist.
  - Schema: boolean
- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer (Standard: `1000`)
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.container.Registry` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.container.Registry` (siehe Schema-Definition)
- **400**
- **403**
- **429**
- **500**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/projects/{projectId}/registries`

**Zusammenfassung:** Create a Registry.

**Operation ID:** `container-create-registry`

**Tags:** Container

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to create a Registry for.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** `de.mittwald.v1.container.CreateRegistry` (siehe Schema-Definition)

**Responses:**

- **201**
  - Created

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.container.Registry` (siehe Schema-Definition)
- **400**
- **403**
- **404**
- **409**
- **412**
- **429**
- **500**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}/services`

**Zusammenfassung:** List Services belonging to a Project.

**Operation ID:** `container-list-services`

**Tags:** Container

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to list Services for.
  - Schema: string
- `stackId` (query) (optional)
  - ID of the Stack to list Services for.
  - Schema: string (uuid)
- `status` (query) (optional)
  - Filters the list with given status.
  - Schema: `de.mittwald.v1.container.ServiceStatus` (siehe Schema-Definition)
- `requiresRecreate` (query) (optional)
  - Filters the list depending on whether services requires recreate.
  - Schema: boolean
- `searchTerm` (query) (optional)
  - Search term to list Service for. The fields id, shortId, stackId, projectId, serviceName, message and description are searchable.
  - Schema: string
- `sortOrder` (query) (optional)
  - Sorts the list with given order.
  - Schema: `de.mittwald.v1.container.ServiceSortOrder` (siehe Schema-Definition)
- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer (Standard: `1000`)
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.container.ServiceResponse` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.container.ServiceResponse` (siehe Schema-Definition)
- **400**
- **403**
- **412**
- **429**
- **500**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}/stacks`

**Zusammenfassung:** List Stacks belonging to a Project.

**Operation ID:** `container-list-stacks`

**Tags:** Container

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to list Stacks for.
  - Schema: string
- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer (Standard: `1000`)
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.container.StackResponse` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.container.StackResponse` (siehe Schema-Definition)
- **400**
- **403**
- **429**
- **500**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}/volumes`

**Zusammenfassung:** List Volumes belonging to a Project.

**Operation ID:** `container-list-volumes`

**Tags:** Container

**Parameter:**

- `stackId` (query) (optional)
  - ID of the Stack to list Volumes for.
  - Schema: string (uuid)
- `projectId` (path) **(erforderlich)**
  - ID of the Project to list Volumes for.
  - Schema: string
- `searchTerm` (query) (optional)
  - Search term to list Volumes for. The field name is searchable.
  - Schema: string
- `sortOrder` (query) (optional)
  - Sorts the list with given order.
  - Schema: `de.mittwald.v1.container.VolumeSortOrder` (siehe Schema-Definition)
- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer (Standard: `1000`)
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.container.VolumeResponse` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.container.VolumeResponse` (siehe Schema-Definition)
- **400**
- **403**
- **429**
- **500**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/registries/{registryId}`

**Zusammenfassung:** Get a Registry.

**Operation ID:** `container-get-registry`

**Tags:** Container

**Parameter:**

- `registryId` (path) **(erforderlich)**
  - ID of the Registry to be retrieved.
  - Schema: string (uuid)

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.container.Registry` (siehe Schema-Definition)
- **400**
- **403**
- **429**
- **500**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/registries/{registryId}`

**Zusammenfassung:** Delete a Registry.

**Operation ID:** `container-delete-registry`

**Tags:** Container

**Parameter:**

- `registryId` (path) **(erforderlich)**
  - ID if the Registry to be deleted.
  - Schema: string (uuid)

**Responses:**

- **204**
  - NoContent
- **400**
- **403**
- **404**
- **429**
- **500**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/registries/{registryId}`

**Zusammenfassung:** Update a Registry.

**Operation ID:** `container-update-registry`

**Tags:** Container

**Parameter:**

- `registryId` (path) **(erforderlich)**
  - ID of the Registry to be updated.
  - Schema: string (uuid)

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** `de.mittwald.v1.container.UpdateRegistry` (siehe Schema-Definition)

**Responses:**

- **204**
  - NoContent
- **400**
- **403**
- **409**
- **412**
- **429**
- **500**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/registries/{registryId}`

**Zusammenfassung:** Get a Registry.

**Operation ID:** `container-get-registry`

**Tags:** Container

**Parameter:**

- `registryId` (path) **(erforderlich)**
  - ID of the Registry to be retrieved.
  - Schema: string (uuid)

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.container.Registry` (siehe Schema-Definition)
- **400**
- **403**
- **429**
- **500**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/registries/{registryId}`

**Zusammenfassung:** Delete a Registry.

**Operation ID:** `container-delete-registry`

**Tags:** Container

**Parameter:**

- `registryId` (path) **(erforderlich)**
  - ID if the Registry to be deleted.
  - Schema: string (uuid)

**Responses:**

- **204**
  - NoContent
- **400**
- **403**
- **404**
- **429**
- **500**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/registries/{registryId}`

**Zusammenfassung:** Update a Registry.

**Operation ID:** `container-update-registry`

**Tags:** Container

**Parameter:**

- `registryId` (path) **(erforderlich)**
  - ID of the Registry to be updated.
  - Schema: string (uuid)

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** `de.mittwald.v1.container.UpdateRegistry` (siehe Schema-Definition)

**Responses:**

- **204**
  - NoContent
- **400**
- **403**
- **409**
- **412**
- **429**
- **500**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/registries/{registryId}`

**Zusammenfassung:** Get a Registry.

**Operation ID:** `container-get-registry`

**Tags:** Container

**Parameter:**

- `registryId` (path) **(erforderlich)**
  - ID of the Registry to be retrieved.
  - Schema: string (uuid)

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.container.Registry` (siehe Schema-Definition)
- **400**
- **403**
- **429**
- **500**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/registries/{registryId}`

**Zusammenfassung:** Delete a Registry.

**Operation ID:** `container-delete-registry`

**Tags:** Container

**Parameter:**

- `registryId` (path) **(erforderlich)**
  - ID if the Registry to be deleted.
  - Schema: string (uuid)

**Responses:**

- **204**
  - NoContent
- **400**
- **403**
- **404**
- **429**
- **500**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/registries/{registryId}`

**Zusammenfassung:** Update a Registry.

**Operation ID:** `container-update-registry`

**Tags:** Container

**Parameter:**

- `registryId` (path) **(erforderlich)**
  - ID of the Registry to be updated.
  - Schema: string (uuid)

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** `de.mittwald.v1.container.UpdateRegistry` (siehe Schema-Definition)

**Responses:**

- **204**
  - NoContent
- **400**
- **403**
- **409**
- **412**
- **429**
- **500**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/registries/{registryId}/actions/validate-credentials`

**Zusammenfassung:** Validate a Registries' credentials.

**Operation ID:** `container-validate-registry-credentials`

**Tags:** Container

**Parameter:**

- `registryId` (path) **(erforderlich)**
  - ID if the Registry to validate the credentials for.
  - Schema: string (uuid)

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `valid` (erforderlich): boolean
- **400**
- **403**
- **404**
- **412**
- **429**
- **500**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/stacks/{stackId}`

**Zusammenfassung:** Get a Stack.

**Operation ID:** `container-get-stack`

**Tags:** Container

**Parameter:**

- `stackId` (path) **(erforderlich)**
  - ID of the Stack to be retrieved.
  - Schema: string (uuid)

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.container.StackResponse` (siehe Schema-Definition)
- **400**
- **403**
- **429**
- **500**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/stacks/{stackId}`

**Zusammenfassung:** Declaratively create, update or delete Services or Volumes belonging to a Stack.

**Operation ID:** `container-declare-stack`

**Tags:** Container

**Parameter:**

- `stackId` (path) **(erforderlich)**
  - ID of the Stack to create, update or delete Services or Volumes for.
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `services`: Object
  - `volumes`: Object

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.container.StackResponse` (siehe Schema-Definition)
- **400**
- **403**
- **412**
- **429**
- **500**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/stacks/{stackId}`

**Zusammenfassung:** Create, update or delete Services or Volumes belonging to a Stack.

**Operation ID:** `container-update-stack`

**Tags:** Container

**Parameter:**

- `stackId` (path) **(erforderlich)**
  - ID of the Stack to create, update or delete Services or Volumes for.
  - Schema: string (uuid)
- `recreate` (query) (optional)
  - Whether to recreate Services belonging to a Stack.
  - Schema: boolean

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `services`: Object
  - `volumes`: Object

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.container.StackResponse` (siehe Schema-Definition)
- **400**
- **403**
- **412**
- **429**
- **500**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/stacks/{stackId}`

**Zusammenfassung:** Get a Stack.

**Operation ID:** `container-get-stack`

**Tags:** Container

**Parameter:**

- `stackId` (path) **(erforderlich)**
  - ID of the Stack to be retrieved.
  - Schema: string (uuid)

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.container.StackResponse` (siehe Schema-Definition)
- **400**
- **403**
- **429**
- **500**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/stacks/{stackId}`

**Zusammenfassung:** Declaratively create, update or delete Services or Volumes belonging to a Stack.

**Operation ID:** `container-declare-stack`

**Tags:** Container

**Parameter:**

- `stackId` (path) **(erforderlich)**
  - ID of the Stack to create, update or delete Services or Volumes for.
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `services`: Object
  - `volumes`: Object

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.container.StackResponse` (siehe Schema-Definition)
- **400**
- **403**
- **412**
- **429**
- **500**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/stacks/{stackId}`

**Zusammenfassung:** Create, update or delete Services or Volumes belonging to a Stack.

**Operation ID:** `container-update-stack`

**Tags:** Container

**Parameter:**

- `stackId` (path) **(erforderlich)**
  - ID of the Stack to create, update or delete Services or Volumes for.
  - Schema: string (uuid)
- `recreate` (query) (optional)
  - Whether to recreate Services belonging to a Stack.
  - Schema: boolean

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `services`: Object
  - `volumes`: Object

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.container.StackResponse` (siehe Schema-Definition)
- **400**
- **403**
- **412**
- **429**
- **500**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/stacks/{stackId}`

**Zusammenfassung:** Get a Stack.

**Operation ID:** `container-get-stack`

**Tags:** Container

**Parameter:**

- `stackId` (path) **(erforderlich)**
  - ID of the Stack to be retrieved.
  - Schema: string (uuid)

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.container.StackResponse` (siehe Schema-Definition)
- **400**
- **403**
- **429**
- **500**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/stacks/{stackId}`

**Zusammenfassung:** Declaratively create, update or delete Services or Volumes belonging to a Stack.

**Operation ID:** `container-declare-stack`

**Tags:** Container

**Parameter:**

- `stackId` (path) **(erforderlich)**
  - ID of the Stack to create, update or delete Services or Volumes for.
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `services`: Object
  - `volumes`: Object

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.container.StackResponse` (siehe Schema-Definition)
- **400**
- **403**
- **412**
- **429**
- **500**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/stacks/{stackId}`

**Zusammenfassung:** Create, update or delete Services or Volumes belonging to a Stack.

**Operation ID:** `container-update-stack`

**Tags:** Container

**Parameter:**

- `stackId` (path) **(erforderlich)**
  - ID of the Stack to create, update or delete Services or Volumes for.
  - Schema: string (uuid)
- `recreate` (query) (optional)
  - Whether to recreate Services belonging to a Stack.
  - Schema: boolean

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `services`: Object
  - `volumes`: Object

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.container.StackResponse` (siehe Schema-Definition)
- **400**
- **403**
- **412**
- **429**
- **500**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/stacks/{stackId}/services/{serviceId}`

**Zusammenfassung:** Get a Service belonging to a Stack.

**Operation ID:** `container-get-service`

**Tags:** Container

**Parameter:**

- `stackId` (path) **(erforderlich)**
  - ID of the Stack the Service belongs to. ID of the default Stack equals the ID of the Project.
  - Schema: string (uuid)
- `serviceId` (path) **(erforderlich)**
  - ID of the Service to be retrieved.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.container.ServiceResponse` (siehe Schema-Definition)
- **400**
- **403**
- **404**
- **412**
- **429**
- **500**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/stacks/{stackId}/services/{serviceId}/actions/pull`

**Zusammenfassung:** Pulls the latest version of the Service's image and optionally recreates the Service.

**Operation ID:** `container-pull-image-for-service`

**Tags:** Container

**Parameter:**

- `stackId` (path) **(erforderlich)**
  - ID of the Stack to pull the image of a Service for.
  - Schema: string (uuid)
- `serviceId` (path) **(erforderlich)**
  - ID of the Service to pull the image for.
  - Schema: string
- `skipRecreate` (query) (optional)
  - Whether to skip the Service recreate after pulling the image.
  - Schema: boolean

**Responses:**

- **204**
  - NoContent
- **400**
- **403**
- **404**
- **412**
- **429**
- **500**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/stacks/{stackId}/services/{serviceId}/actions/recreate`

**Zusammenfassung:** Recreate a Service.

**Operation ID:** `container-recreate-service`

**Tags:** Container

**Parameter:**

- `stackId` (path) **(erforderlich)**
  - ID of the Stack to recreate a Service for.
  - Schema: string (uuid)
- `serviceId` (path) **(erforderlich)**
  - ID of the Service to recreate.
  - Schema: string

**Responses:**

- **204**
  - NoContent
- **400**
- **403**
- **404**
- **412**
- **429**
- **500**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/stacks/{stackId}/services/{serviceId}/actions/restart`

**Zusammenfassung:** Restart a started Service.

**Operation ID:** `container-restart-service`

**Tags:** Container

**Parameter:**

- `stackId` (path) **(erforderlich)**
  - ID of the Stack to restart a Service for.
  - Schema: string (uuid)
- `serviceId` (path) **(erforderlich)**
  - ID of the Service to restart.
  - Schema: string

**Responses:**

- **204**
  - NoContent
- **400**
- **403**
- **404**
- **412**
- **429**
- **500**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/stacks/{stackId}/services/{serviceId}/actions/start`

**Zusammenfassung:** Start a stopped Service.

**Operation ID:** `container-start-service`

**Tags:** Container

**Parameter:**

- `stackId` (path) **(erforderlich)**
  - ID of the Stack to start a Service for.
  - Schema: string (uuid)
- `serviceId` (path) **(erforderlich)**
  - ID of the Service to start.
  - Schema: string

**Responses:**

- **204**
  - NoContent
- **400**
- **403**
- **404**
- **412**
- **429**
- **500**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/stacks/{stackId}/services/{serviceId}/actions/stop`

**Zusammenfassung:** Stop a started Service.

**Operation ID:** `container-stop-service`

**Tags:** Container

**Parameter:**

- `stackId` (path) **(erforderlich)**
  - ID of the Stack to stop a Service for.
  - Schema: string (uuid)
- `serviceId` (path) **(erforderlich)**
  - ID of the Service to stop.
  - Schema: string

**Responses:**

- **204**
  - NoContent
- **400**
- **403**
- **404**
- **412**
- **429**
- **500**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/stacks/{stackId}/services/{serviceId}/logs`

**Zusammenfassung:** Get logs belonging to a Service.

**Operation ID:** `container-get-service-logs`

**Tags:** Container

**Parameter:**

- `stackId` (path) **(erforderlich)**
  - ID of the Stack the Service belongs to. ID of the default Stack equals the ID of the Project.
  - Schema: string (uuid)
- `serviceId` (path) **(erforderlich)**
  - ID of the Service to get logs for.
  - Schema: string
- `tail` (query) (optional)
  - Number of last log lines to return. Returns full log if not set.
  - Schema: integer (int64)

**Responses:**

- **200**
  - OK

  - **Content-Type:** `text/plain`
    - Schema: string
- **403**
- **404**
- **429**
- **500**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/stacks/{stackId}/volumes`

**Zusammenfassung:** List Volumes belonging to a Stack.

**Operation ID:** `container-list-stack-volumes`

**Tags:** Container

**Parameter:**

- `stackId` (path) **(erforderlich)**
  - ID of the Stack to list Volumes for.
  - Schema: string (uuid)
- `searchTerm` (query) (optional)
  - Search term to list Volumes for. The field name is searchable.
  - Schema: string
- `sortOrder` (query) (optional)
  - Sorts the list with given order.
  - Schema: `de.mittwald.v1.container.VolumeSortOrder` (siehe Schema-Definition)
- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer (Standard: `1000`)
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.container.VolumeResponse` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.container.VolumeResponse` (siehe Schema-Definition)
- **400**
- **403**
- **429**
- **500**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/stacks/{stackId}/volumes/{volumeId}`

**Zusammenfassung:** Get a Volume belonging to a Stack.

**Operation ID:** `container-get-volume`

**Tags:** Container

**Parameter:**

- `stackId` (path) **(erforderlich)**
  - ID of the Stack the Volume belongs too. ID of the default Stack equals the ID of the Project.
  - Schema: string (uuid)
- `volumeId` (path) **(erforderlich)**
  - ID of the Volume to be retrieved.
  - Schema: string (uuid)

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.container.VolumeResponse` (siehe Schema-Definition)
- **400**
- **403**
- **404**
- **412**
- **429**
- **500**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/stacks/{stackId}/volumes/{volumeId}`

**Zusammenfassung:** Delete a Volume belonging to a Stack.

**Operation ID:** `container-delete-volume`

**Tags:** Container

**Parameter:**

- `stackId` (path) **(erforderlich)**
  - ID of the Stack the Volume belongs too. ID of the default Stack equals the ID of the Project.
  - Schema: string (uuid)
- `volumeId` (path) **(erforderlich)**
  - ID of the Volume to be deleted.
  - Schema: string (uuid)

**Responses:**

- **204**
  - NoContent
- **400**
- **403**
- **412**
- **429**
- **500**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/stacks/{stackId}/volumes/{volumeId}`

**Zusammenfassung:** Get a Volume belonging to a Stack.

**Operation ID:** `container-get-volume`

**Tags:** Container

**Parameter:**

- `stackId` (path) **(erforderlich)**
  - ID of the Stack the Volume belongs too. ID of the default Stack equals the ID of the Project.
  - Schema: string (uuid)
- `volumeId` (path) **(erforderlich)**
  - ID of the Volume to be retrieved.
  - Schema: string (uuid)

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.container.VolumeResponse` (siehe Schema-Definition)
- **400**
- **403**
- **404**
- **412**
- **429**
- **500**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/stacks/{stackId}/volumes/{volumeId}`

**Zusammenfassung:** Delete a Volume belonging to a Stack.

**Operation ID:** `container-delete-volume`

**Tags:** Container

**Parameter:**

- `stackId` (path) **(erforderlich)**
  - ID of the Stack the Volume belongs too. ID of the default Stack equals the ID of the Project.
  - Schema: string (uuid)
- `volumeId` (path) **(erforderlich)**
  - ID of the Volume to be deleted.
  - Schema: string (uuid)

**Responses:**

- **204**
  - NoContent
- **400**
- **403**
- **412**
- **429**
- **500**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---


### Contract

#### `GET /v2/certificates/{certificateId}/contract`

**Zusammenfassung:** Return the Contract for the given Certificate.

**Operation ID:** `contract-get-detail-of-contract-by-certificate`

**Tags:** Contract

**Parameter:**

- `certificateId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **200**
  - Returns an active Contract for the given Certificate.

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.contract.Contract` (siehe Schema-Definition)
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/contracts/{contractId}`

**Zusammenfassung:** Returns the Contract with the given ID.

**Operation ID:** `contract-get-detail-of-contract`

**Tags:** Contract

**Parameter:**

- `contractId` (path) **(erforderlich)**
  - The uuid of the Contract to be returned.
  - Schema: string

**Responses:**

- **200**

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.contract.Contract` (siehe Schema-Definition)
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/contracts/{contractId}/base-items`

**Zusammenfassung:** Return the BaseItem of the Contract with the given ID.

**Operation ID:** `contract-get-base-item-of-contract`

**Tags:** Contract

**Parameter:**

- `contractId` (path) **(erforderlich)**
  - The uuid of the Contract from which the BaseItem is to be issued.
  - Schema: string

**Responses:**

- **200**
  - The BaseItem of the Contract.

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.contract.ContractItem` (siehe Schema-Definition)
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/contracts/{contractId}/items/{contractItemId}`

**Zusammenfassung:** Get the ContractItem with the given ID.

**Operation ID:** `contract-get-detail-of-contract-item`

**Tags:** Contract

**Parameter:**

- `contractId` (path) **(erforderlich)**
  - The uuid of the Contract where the desired ContractItem belongs to.
  - Schema: string
- `contractItemId` (path) **(erforderlich)**
  - The uuid of the ContractItem to be returned.
  - Schema: string (uuid)

**Responses:**

- **200**

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.contract.ContractItem` (siehe Schema-Definition)
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/contracts/{contractId}/items/{contractItemId}/next-termination-dates`

**Zusammenfassung:** Return the next TerminationDate for the ContractItem with the given ID.

This route is deprecated. Use GET /v2/contracts/{contractId}/items/{contractItemId} instead.

**Operation ID:** `deprecated-contract-get-next-termination-date-for-item`

**Tags:** Contract

**Parameter:**

- `contractId` (path) **(erforderlich)**
  - The uuid of the Contract where the desired ContractItem belongs to.
  - Schema: string (uuid)
- `contractItemId` (path) **(erforderlich)**
  - The uuid of the ContractItem whose next TerminationDate is to be displayed.
  - Schema: string (uuid)

**Responses:**

- **200**
  - Return the next possible TerminationDate for the ContractItem as date.

  - **Content-Type:** `application/json`
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/contracts/{contractId}/items/{contractItemId}/tariff-change`

**Zusammenfassung:** Cancel the TariffChange for the referred ContractItem.

**Operation ID:** `contract-cancel-contract-tariff-change`

**Tags:** Contract

**Parameter:**

- `contractId` (path) **(erforderlich)**
  - Schema: string
- `contractItemId` (path) **(erforderlich)**
  - The uuid of the active ContractItem (not the one that would replace the old one after the TariffChange)
for which the TariffChange is to be cancelled. Only works for ContractItems for which a TariffChange is stored.

  - Schema: string (uuid)

**Responses:**

- **200**
  - Returns the contractId of the Contract whose TariffChange was cancelled.

  - **Content-Type:** `application/json`
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/contracts/{contractId}/items/{contractItemId}/termination`

**Zusammenfassung:** Schedule the Termination of a ContractItem.

**Operation ID:** `contract-terminate-contract-item`

**Tags:** Contract

**Parameter:**

- `contractId` (path) **(erforderlich)**
  - Schema: string
- `contractItemId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **201**
  - Return the contractId, the date on which the Termination will take place and the list of affected ContractItems.

  - **Content-Type:** `application/json`
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/contracts/{contractId}/items/{contractItemId}/termination`

**Zusammenfassung:** Cancel the Termination for the referred ContractItem.

**Operation ID:** `contract-cancel-contract-item-termination`

**Tags:** Contract

**Parameter:**

- `contractId` (path) **(erforderlich)**
  - The uuid of the Contract where the terminated ContractItem belongs to.
  - Schema: string
- `contractItemId` (path) **(erforderlich)**
  - The uuid of the ContractItem for which the Termination is to be cancelled. Only works for ContractItem for which a Termination is stored.
  - Schema: string (uuid)

**Responses:**

- **200**
  - Return the contractId and the contractItemId of the ContractItem where the Termination was cancelled.

  - **Content-Type:** `application/json`
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/contracts/{contractId}/items/{contractItemId}/termination`

**Zusammenfassung:** Schedule the Termination of a ContractItem.

**Operation ID:** `contract-terminate-contract-item`

**Tags:** Contract

**Parameter:**

- `contractId` (path) **(erforderlich)**
  - Schema: string
- `contractItemId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **201**
  - Return the contractId, the date on which the Termination will take place and the list of affected ContractItems.

  - **Content-Type:** `application/json`
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/contracts/{contractId}/items/{contractItemId}/termination`

**Zusammenfassung:** Cancel the Termination for the referred ContractItem.

**Operation ID:** `contract-cancel-contract-item-termination`

**Tags:** Contract

**Parameter:**

- `contractId` (path) **(erforderlich)**
  - The uuid of the Contract where the terminated ContractItem belongs to.
  - Schema: string
- `contractItemId` (path) **(erforderlich)**
  - The uuid of the ContractItem for which the Termination is to be cancelled. Only works for ContractItem for which a Termination is stored.
  - Schema: string (uuid)

**Responses:**

- **200**
  - Return the contractId and the contractItemId of the ContractItem where the Termination was cancelled.

  - **Content-Type:** `application/json`
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/contracts/{contractId}/termination`

**Zusammenfassung:** Schedule the Termination of a Contract.

**Operation ID:** `contract-terminate-contract`

**Tags:** Contract

**Parameter:**

- `contractId` (path) **(erforderlich)**
  - The uuid of the Contract to be terminated.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **201**
  - Returns the contractId, the date on which the Termination will take place and the list of affected ContractItems.

  - **Content-Type:** `application/json`
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/contracts/{contractId}/termination`

**Zusammenfassung:** Cancel the Termination for the referred Contract.

**Operation ID:** `contract-cancel-contract-termination`

**Tags:** Contract

**Parameter:**

- `contractId` (path) **(erforderlich)**
  - The uuid of the Contract for which the Termination is to be cancelled. Only works for Contracts for which a
Termination is stored.

  - Schema: string

**Responses:**

- **200**
  - Return the contractId of the Contract whose Termination was cancelled.

  - **Content-Type:** `application/json`
- **400**
- **404**
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/contracts/{contractId}/termination`

**Zusammenfassung:** Schedule the Termination of a Contract.

**Operation ID:** `contract-terminate-contract`

**Tags:** Contract

**Parameter:**

- `contractId` (path) **(erforderlich)**
  - The uuid of the Contract to be terminated.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **201**
  - Returns the contractId, the date on which the Termination will take place and the list of affected ContractItems.

  - **Content-Type:** `application/json`
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/contracts/{contractId}/termination`

**Zusammenfassung:** Cancel the Termination for the referred Contract.

**Operation ID:** `contract-cancel-contract-termination`

**Tags:** Contract

**Parameter:**

- `contractId` (path) **(erforderlich)**
  - The uuid of the Contract for which the Termination is to be cancelled. Only works for Contracts for which a
Termination is stored.

  - Schema: string

**Responses:**

- **200**
  - Return the contractId of the Contract whose Termination was cancelled.

  - **Content-Type:** `application/json`
- **400**
- **404**
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/customers/{customerId}/contracts`

**Zusammenfassung:** Return a list of Contracts for the given Customer.

**Operation ID:** `contract-list-contracts`

**Tags:** Contract

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - The uuid of the Customer from whom all Contracts are to be returned.
  - Schema: string
- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer (Standard: `1000`)
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer

**Responses:**

- **200**
  - Return the Contracts that belong to the Customer.

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.contract.Contract` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.contract.Contract` (siehe Schema-Definition)
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/customers/{customerId}/invoice-settings`

**Zusammenfassung:** Get InvoiceSettings of a Customer.

**Operation ID:** `invoice-get-detail-of-invoice-settings`

**Tags:** Contract

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **200**

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.invoice.InvoiceSettings` (siehe Schema-Definition)
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/customers/{customerId}/invoice-settings`

**Zusammenfassung:** Update InvoiceSettings of a Customer.

**Operation ID:** `invoice-update-invoice-settings`

**Tags:** Contract

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `additionalEmailRecipients`: Array<string (email)>
  - `invoicePeriod` (erforderlich): integer
  - `paymentSettings` (erforderlich): `de.mittwald.v1.invoice.PaymentSettings` (siehe Schema-Definition)
  - `printedInvoices`: boolean
  - `recipient`: `de.mittwald.v1.invoice.Recipient` (siehe Schema-Definition)
  - `recipientSameAsOwner`: boolean
  - `targetDay`: integer

**Responses:**

- **200**

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.invoice.InvoiceSettings` (siehe Schema-Definition)
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/customers/{customerId}/invoice-settings`

**Zusammenfassung:** Get InvoiceSettings of a Customer.

**Operation ID:** `invoice-get-detail-of-invoice-settings`

**Tags:** Contract

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **200**

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.invoice.InvoiceSettings` (siehe Schema-Definition)
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/customers/{customerId}/invoice-settings`

**Zusammenfassung:** Update InvoiceSettings of a Customer.

**Operation ID:** `invoice-update-invoice-settings`

**Tags:** Contract

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `additionalEmailRecipients`: Array<string (email)>
  - `invoicePeriod` (erforderlich): integer
  - `paymentSettings` (erforderlich): `de.mittwald.v1.invoice.PaymentSettings` (siehe Schema-Definition)
  - `printedInvoices`: boolean
  - `recipient`: `de.mittwald.v1.invoice.Recipient` (siehe Schema-Definition)
  - `recipientSameAsOwner`: boolean
  - `targetDay`: integer

**Responses:**

- **200**

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.invoice.InvoiceSettings` (siehe Schema-Definition)
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/customers/{customerId}/invoices`

**Zusammenfassung:** List Invoices of a Customer.

**Operation ID:** `invoice-list-customer-invoices`

**Tags:** Contract

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string
- `invoiceTypes` (query) (optional)
  - Schema: Array<string - Enum: `REGULAR`, `REISSUE`, `CORRECTION`, `CANCELLATION`>
- `status` (query) (optional)
  - Schema: Array<string - Enum: `CONFIRMED`, `PAID`, `PARTIALLY_PAID`, `OVERPAID`>
- `search` (query) (optional)
  - Schema: string
- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer (Standard: `1000`)
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer
- `sort` (query) (optional)
  - List of fields how the result should be sorted.
  - Schema: Array<string - Enum: `invoiceNumber`>
- `order` (query) (optional)
  - Should the result be sorted ascending or descending? You can specify for each field another sorting: sort[0]=foo, order[0]=asc, sort[1]=bar, order[1]=desc.
  - Schema: Array<string - Enum: `asc`, `desc`>

**Responses:**

- **200**

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.invoice.Invoice` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.invoice.Invoice` (siehe Schema-Definition)
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/customers/{customerId}/invoices/{invoiceId}`

**Zusammenfassung:** Get details of an Invoice.

This route is deprecated. Use /v2/invoices/{invoiceId} instead.

**Operation ID:** `deprecated-invoice-detail-of-invoice`

**Tags:** Contract

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string
- `invoiceId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **200**

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.invoice.Invoice` (siehe Schema-Definition)
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/customers/{customerId}/invoices/{invoiceId}/file-access-token`

**Zusammenfassung:** Request an Access Token for the Invoice file.

**Operation ID:** `invoice-get-file-access-token`

**Tags:** Contract

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string
- `invoiceId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **200**
  - The File Access Token required to access the Invoice file.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `accessToken` (erforderlich): string
    - `expiresAt` (erforderlich): string (date-time)
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/customers/{customerId}/lead-fyndr-profile/contract`

**Zusammenfassung:** Return the Contract for the given LeadFyndrProfile.

**Operation ID:** `contract-get-detail-of-contract-by-lead-fyndr`

**Tags:** Contract

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **200**
  - Returns an active Contract for the given LeadFyndrProfile.

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.contract.Contract` (siehe Schema-Definition)
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/customers/{customerId}/orders`

**Zusammenfassung:** Get list of Orders of a Customer.

The list of Orders of a Customer the User has access to, can be filtered by orderStatus, articleTemplate and count.

**Operation ID:** `order-list-customer-orders`

**Tags:** Contract

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string
- `limit` (query) (optional)
  - Schema: integer
- `skip` (query) (optional)
  - Schema: integer
- `page` (query) (optional)
  - Schema: integer
- `includesStatus` (query) (optional)
  - Schema: Array<`de.mittwald.v1.order.OrderStatus` (siehe Schema-Definition)>
- `excludesStatus` (query) (optional)
  - Schema: Array<`de.mittwald.v1.order.OrderStatus` (siehe Schema-Definition)>
- `templateNames` (query) (optional)
  - Schema: Array<string>

**Responses:**

- **200**

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.order.CustomerOrder` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.order.CustomerOrder` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/domains/{domainId}/contract`

**Zusammenfassung:** Return the Contract for the given Domain.

**Operation ID:** `contract-get-detail-of-contract-by-domain`

**Tags:** Contract

**Parameter:**

- `domainId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **200**
  - Returns an active Contract for the given Domain.

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.contract.Contract` (siehe Schema-Definition)
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/invoices/{invoiceId}`

**Zusammenfassung:** Get details of an Invoice.

**Operation ID:** `invoice-detail`

**Tags:** Contract

**Parameter:**

- `invoiceId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **200**

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.invoice.Invoice` (siehe Schema-Definition)
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/mail-addresses/{mailAddressId}/contract`

**Zusammenfassung:** Return the Contract for the given Mail Address.

**Operation ID:** `contract-get-detail-of-contract-by-mail-address`

**Tags:** Contract

**Parameter:**

- `mailAddressId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **200**
  - Returns an active Contract for the given Mail Address.

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.contract.Contract` (siehe Schema-Definition)
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/order-previews`

**Zusammenfassung:** Preview Order.

**Operation ID:** `order-preview-order`

**Tags:** Contract

**Request Body:**

Request Body **(erforderlich)**

Your order information

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `orderData`: 
  - `orderType`: string - Enum: `domain`, `projectHosting`, `server`, `externalCertificate`, `leadFyndr`, `mailArchive`

**Responses:**

- **200**

  - **Content-Type:** `application/json`
- **400**
- **422**
  - Unprocessable Content

  - **Content-Type:** `application/json`
- **429**
- **default**

**Security:**


---

#### `GET /v2/orders`

**Zusammenfassung:** Get list of Orders.

The list of Orders the User has access to.

**Operation ID:** `order-list-orders`

**Tags:** Contract

**Parameter:**

- `includesStatus` (query) (optional)
  - Schema: Array<`de.mittwald.v1.order.OrderStatus` (siehe Schema-Definition)>
- `excludesStatus` (query) (optional)
  - Schema: Array<`de.mittwald.v1.order.OrderStatus` (siehe Schema-Definition)>
- `templateNames` (query) (optional)
  - Schema: Array<string>
- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer (Standard: `1000`)
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer

**Responses:**

- **200**

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.order.CustomerOrder` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.order.CustomerOrder` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/orders`

**Zusammenfassung:** Create an Order.



**Operation ID:** `order-create-order`

**Tags:** Contract

**Request Body:**

Request Body **(erforderlich)**

The Order to create.

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `orderData`: 
  - `orderType`: string - Enum: `domain`, `projectHosting`, `server`, `externalCertificate`, `leadFyndr`, `mailArchive`

**Responses:**

- **201**

  - **Content-Type:** `application/json`
- **400**
- **422**
  - Unprocessable Content

  - **Content-Type:** `application/json`
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/orders`

**Zusammenfassung:** Get list of Orders.

The list of Orders the User has access to.

**Operation ID:** `order-list-orders`

**Tags:** Contract

**Parameter:**

- `includesStatus` (query) (optional)
  - Schema: Array<`de.mittwald.v1.order.OrderStatus` (siehe Schema-Definition)>
- `excludesStatus` (query) (optional)
  - Schema: Array<`de.mittwald.v1.order.OrderStatus` (siehe Schema-Definition)>
- `templateNames` (query) (optional)
  - Schema: Array<string>
- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer (Standard: `1000`)
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer

**Responses:**

- **200**

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.order.CustomerOrder` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.order.CustomerOrder` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/orders`

**Zusammenfassung:** Create an Order.



**Operation ID:** `order-create-order`

**Tags:** Contract

**Request Body:**

Request Body **(erforderlich)**

The Order to create.

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `orderData`: 
  - `orderType`: string - Enum: `domain`, `projectHosting`, `server`, `externalCertificate`, `leadFyndr`, `mailArchive`

**Responses:**

- **201**

  - **Content-Type:** `application/json`
- **400**
- **422**
  - Unprocessable Content

  - **Content-Type:** `application/json`
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/orders/{orderId}`

**Zusammenfassung:** Get Order for Customer.

Get details of a single Order, User must have access to the Order/Customer.

**Operation ID:** `order-get-order`

**Tags:** Contract

**Parameter:**

- `orderId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **200**

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.order.CustomerOrder` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}/contract`

**Zusammenfassung:** Return the Contract for the given Project.

**Operation ID:** `contract-get-detail-of-contract-by-project`

**Tags:** Contract

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **200**
  - Returns an active Contract for the given Project.

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.contract.Contract` (siehe Schema-Definition)
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}/orders`

**Zusammenfassung:** Get list of Orders of a Project.

The list of Order of a Project the User has access to, can be filtered by orderStatus, articleTemplate and count.

**Operation ID:** `order-list-project-orders`

**Tags:** Contract

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - Schema: string
- `limit` (query) (optional)
  - Schema: integer
- `skip` (query) (optional)
  - Schema: integer
- `page` (query) (optional)
  - Schema: integer
- `includesStatus` (query) (optional)
  - Schema: Array<`de.mittwald.v1.order.OrderStatus` (siehe Schema-Definition)>
- `excludesStatus` (query) (optional)
  - Schema: Array<`de.mittwald.v1.order.OrderStatus` (siehe Schema-Definition)>
- `templateNames` (query) (optional)
  - Schema: Array<string>

**Responses:**

- **200**

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.order.CustomerOrder` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.order.CustomerOrder` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/servers/{serverId}/contract`

**Zusammenfassung:** Return the Contract for the given Server.

**Operation ID:** `contract-get-detail-of-contract-by-server`

**Tags:** Contract

**Parameter:**

- `serverId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **200**
  - Returns an active Contract for the given Server.

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.contract.Contract` (siehe Schema-Definition)
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/tariff-change-previews`

**Zusammenfassung:** Preview TariffChange.



**Operation ID:** `order-preview-tariff-change`

**Tags:** Contract

**Request Body:**

Request Body **(erforderlich)**

Your order information

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `tariffChangeData`: 
  - `tariffChangeType`: string - Enum: `projectHosting`, `server`, `leadFyndr`

**Responses:**

- **200**

  - **Content-Type:** `application/json`
- **400**
- **422**
  - Unprocessable Content

  - **Content-Type:** `application/json`
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/tariff-changes`

**Zusammenfassung:** Create TariffChange Order.



**Operation ID:** `order-create-tariff-change`

**Tags:** Contract

**Request Body:**

Request Body **(erforderlich)**

The Order to create.

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `tariffChangeData`: 
  - `tariffChangeType`: string - Enum: `projectHosting`, `server`, `leadFyndr`

**Responses:**

- **201**

  - **Content-Type:** `application/json`
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---


### Conversation

#### `GET /v2/conversation-categories`

**Zusammenfassung:** Get all conversation categories.

**Operation ID:** `conversation-list-categories`

**Tags:** Conversation

**Responses:**

- **200**

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.conversation.Category` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.conversation.Category` (siehe Schema-Definition)
- **429**
- **default**

**Security:**


---

#### `GET /v2/conversation-categories/{categoryId}`

**Zusammenfassung:** Get a specific conversation category.

**Operation ID:** `conversation-get-category`

**Tags:** Conversation

**Parameter:**

- `categoryId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **200**

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.conversation.Category` (siehe Schema-Definition)
- **400**
- **404**
- **429**
- **default**

**Security:**


---

#### `GET /v2/conversations`

**Zusammenfassung:** Get all conversation the authenticated user has created or has access to.

**Operation ID:** `conversation-list-conversations`

**Tags:** Conversation

**Parameter:**

- `sort` (query) (optional)
  - List of fields how the result should be sorted.
  - Schema: Array<string - Enum: `createdAt`, `lastMessage.createdAt`, `title`, `priority`, `shortId`, `conversationId`>
- `order` (query) (optional)
  - Should the result be sorted ascending or descending? You can specify for each field another sorting: sort[0]=foo, order[0]=asc, sort[1]=bar, order[1]=desc.
  - Schema: Array<string - Enum: `asc`, `desc`>

**Responses:**

- **200**
  - The conversations list ordered by creation date

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.conversation.Conversation` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.conversation.Conversation` (siehe Schema-Definition)
- **429**
- **default**

---

#### `POST /v2/conversations`

**Zusammenfassung:** Create a conversation.

**Operation ID:** `conversation-create-conversation`

**Tags:** Conversation

**Request Body:**

Request Body **(erforderlich)**



**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `categoryId`: string
  - `mainUserId`: string (uuid)
  - `notificationRoles`: Array<`de.mittwald.v1.conversation.NotificationRole` (siehe Schema-Definition)>
  - `relatedTo`: `de.mittwald.v1.conversation.RelatedAggregateReference` (siehe Schema-Definition)
  - `sharedWith`: `de.mittwald.v1.conversation.ShareableAggregateReference` (siehe Schema-Definition)
  - `title`: string

**Responses:**

- **201**

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `conversationId` (erforderlich): string (uuid)
- **400**
- **429**
- **default**

---

#### `GET /v2/conversations`

**Zusammenfassung:** Get all conversation the authenticated user has created or has access to.

**Operation ID:** `conversation-list-conversations`

**Tags:** Conversation

**Parameter:**

- `sort` (query) (optional)
  - List of fields how the result should be sorted.
  - Schema: Array<string - Enum: `createdAt`, `lastMessage.createdAt`, `title`, `priority`, `shortId`, `conversationId`>
- `order` (query) (optional)
  - Should the result be sorted ascending or descending? You can specify for each field another sorting: sort[0]=foo, order[0]=asc, sort[1]=bar, order[1]=desc.
  - Schema: Array<string - Enum: `asc`, `desc`>

**Responses:**

- **200**
  - The conversations list ordered by creation date

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.conversation.Conversation` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.conversation.Conversation` (siehe Schema-Definition)
- **429**
- **default**

---

#### `POST /v2/conversations`

**Zusammenfassung:** Create a conversation.

**Operation ID:** `conversation-create-conversation`

**Tags:** Conversation

**Request Body:**

Request Body **(erforderlich)**



**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `categoryId`: string
  - `mainUserId`: string (uuid)
  - `notificationRoles`: Array<`de.mittwald.v1.conversation.NotificationRole` (siehe Schema-Definition)>
  - `relatedTo`: `de.mittwald.v1.conversation.RelatedAggregateReference` (siehe Schema-Definition)
  - `sharedWith`: `de.mittwald.v1.conversation.ShareableAggregateReference` (siehe Schema-Definition)
  - `title`: string

**Responses:**

- **201**

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `conversationId` (erforderlich): string (uuid)
- **400**
- **429**
- **default**

---

#### `GET /v2/conversations/{conversationId}`

**Zusammenfassung:** Get a support conversation.

**Operation ID:** `conversation-get-conversation`

**Tags:** Conversation

**Parameter:**

- `conversationId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **200**
  - The metadata of the conversation.
Does not contain messages send in the conversation.
Use [`/v2/conversations/{conversationId}/messages`](#/Conversation/conversation-service-get-messages-by-conversation-v2) to get the messages.


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.conversation.Conversation` (siehe Schema-Definition)
- **400**
- **403**
- **404**
- **429**
- **default**

---

#### `PUT /v2/conversations/{conversationId}`

**Zusammenfassung:** Update the basic properties of the conversation.

**Operation ID:** `conversation-update-conversation`

**Tags:** Conversation

**Parameter:**

- `conversationId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**



**Content-Type:** `application/json`

**Responses:**

- **200**

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `conversationId` (erforderlich): string (uuid)
- **400**
- **403**
- **404**
- **429**
- **default**

---

#### `GET /v2/conversations/{conversationId}`

**Zusammenfassung:** Get a support conversation.

**Operation ID:** `conversation-get-conversation`

**Tags:** Conversation

**Parameter:**

- `conversationId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **200**
  - The metadata of the conversation.
Does not contain messages send in the conversation.
Use [`/v2/conversations/{conversationId}/messages`](#/Conversation/conversation-service-get-messages-by-conversation-v2) to get the messages.


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.conversation.Conversation` (siehe Schema-Definition)
- **400**
- **403**
- **404**
- **429**
- **default**

---

#### `PUT /v2/conversations/{conversationId}`

**Zusammenfassung:** Update the basic properties of the conversation.

**Operation ID:** `conversation-update-conversation`

**Tags:** Conversation

**Parameter:**

- `conversationId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**



**Content-Type:** `application/json`

**Responses:**

- **200**

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `conversationId` (erforderlich): string (uuid)
- **400**
- **403**
- **404**
- **429**
- **default**

---

#### `POST /v2/conversations/{conversationId}/files`

**Zusammenfassung:** Request a file upload token for the conversation.

**Operation ID:** `conversation-request-file-upload`

**Tags:** Conversation

**Parameter:**

- `conversationId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body (optional)



**Content-Type:** `application/json`
**Schema:** Object

**Responses:**

- **201**
  - The upload token with additional rules describing what files can be uploaded using this token.
The token can be used with [`POST /v2/files`](#/Files/file-service-file-create) to upload a file that is
linked with the conversation.


  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `conversationId` (erforderlich): string (uuid)
    - `rules` (erforderlich): Object
    - `uploadToken` (erforderlich): string
- **400**
- **429**
- **default**

---

#### `GET /v2/conversations/{conversationId}/files/{fileId}/access-token`

**Zusammenfassung:** Request an access token for the File belonging to the Conversation.

**Operation ID:** `conversation-get-file-access-token`

**Tags:** Conversation

**Parameter:**

- `conversationId` (path) **(erforderlich)**
  - Schema: string (uuid)
- `fileId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **200**
  - The file access token required to access the file linked with the conversation.


  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `accessToken` (erforderlich): string
    - `expiresAt` (erforderlich): string (date-time)
- **400**
- **404**
- **429**
- **default**

---

#### `GET /v2/conversations/{conversationId}/members`

**Zusammenfassung:** Get members of a support conversation.

**Operation ID:** `conversation-get-conversation-members`

**Tags:** Conversation

**Parameter:**

- `conversationId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **200**
  - The members of the conversation.


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.conversation.ConversationMembers` (siehe Schema-Definition)
- **400**
- **403**
- **404**
- **429**
- **default**

---

#### `GET /v2/conversations/{conversationId}/messages`

**Zusammenfassung:** Get all message of the conversation.

**Operation ID:** `conversation-list-messages-by-conversation`

**Tags:** Conversation

**Parameter:**

- `conversationId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **200**

  - **Content-Type:** `application/json`
    - Schema: Array<>
    **Array Items:** 
- **403**
- **404**
- **429**
- **default**

---

#### `POST /v2/conversations/{conversationId}/messages`

**Zusammenfassung:** Send a new message in the conversation.

**Operation ID:** `conversation-create-message`

**Tags:** Conversation

**Parameter:**

- `conversationId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**



**Content-Type:** `application/json`

**Responses:**

- **201**

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `conversationId` (erforderlich): string (uuid)
    - `messageId` (erforderlich): string (uuid)
- **400**
- **403**
- **404**
- **429**
- **default**

---

#### `GET /v2/conversations/{conversationId}/messages`

**Zusammenfassung:** Get all message of the conversation.

**Operation ID:** `conversation-list-messages-by-conversation`

**Tags:** Conversation

**Parameter:**

- `conversationId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **200**

  - **Content-Type:** `application/json`
    - Schema: Array<>
    **Array Items:** 
- **403**
- **404**
- **429**
- **default**

---

#### `POST /v2/conversations/{conversationId}/messages`

**Zusammenfassung:** Send a new message in the conversation.

**Operation ID:** `conversation-create-message`

**Tags:** Conversation

**Parameter:**

- `conversationId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**



**Content-Type:** `application/json`

**Responses:**

- **201**

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `conversationId` (erforderlich): string (uuid)
    - `messageId` (erforderlich): string (uuid)
- **400**
- **403**
- **404**
- **429**
- **default**

---

#### `PATCH /v2/conversations/{conversationId}/messages/{messageId}`

**Zusammenfassung:** Update the content of the message

**Operation ID:** `conversation-update-message`

**Tags:** Conversation

**Parameter:**

- `conversationId` (path) **(erforderlich)**
  - Schema: string (uuid)
- `messageId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**



**Content-Type:** `application/json`

**Responses:**

- **200**

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `messageId` (erforderlich): string (uuid)
- **400**
- **403**
- **404**
- **429**
- **default**

---

#### `PUT /v2/conversations/{conversationId}/status`

**Zusammenfassung:** Update the status of a conversation.

**Operation ID:** `conversation-set-conversation-status`

**Tags:** Conversation

**Parameter:**

- `conversationId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

The object containing the new status of the conversation.
The statuses `open` and `answered` are displayed identically to the users as an open
(unresolved) conversation. A conversation with the status `closed` is a solved issue.
Closed conversations can be reopened by setting the status to `open` or by sending a
message in the conversation.


**Content-Type:** `application/json`

**Responses:**

- **200**

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `conversationId` (erforderlich): string (uuid)
- **400**
- **403**
- **404**
- **429**
- **default**

---

#### `GET /v2/customers/{customerId}/conversation-preferences`

**Zusammenfassung:** Get preferences for customer conversations.

**Operation ID:** `conversation-get-conversation-preferences-of-customer`

**Tags:** Conversation

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **200**

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.conversation.ConversationPreferences` (siehe Schema-Definition)
- **400**
- **403**
- **404**
- **429**
- **default**

---


### Cronjob

#### `GET /v2/cronjobs/{cronjobId}`

**Zusammenfassung:** Get a Cronjob.

**Operation ID:** `cronjob-get-cronjob`

**Tags:** Cronjob

**Parameter:**

- `cronjobId` (path) **(erforderlich)**
  - ID of the Cronjob to be retrieved.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.cronjob.Cronjob` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/cronjobs/{cronjobId}`

**Zusammenfassung:** Delete a Cronjob.

**Operation ID:** `cronjob-delete-cronjob`

**Tags:** Cronjob

**Parameter:**

- `cronjobId` (path) **(erforderlich)**
  - ID of the Cronjob to delete.
  - Schema: string

**Responses:**

- **204**
  - NoContent
- **400**
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/cronjobs/{cronjobId}`

**Zusammenfassung:** Update a Cronjob.

**Operation ID:** `cronjob-update-cronjob`

**Tags:** Cronjob

**Parameter:**

- `cronjobId` (path) **(erforderlich)**
  - ID of the Cronjob to be updated.
  - Schema: string

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `active`: boolean
  - `description`: string
  - `destination`: 
  - `email`: string (email)
  - `failedExecutionAlertThreshold`: integer
  - `interval`: string
  - `timeout`: integer

**Responses:**

- **204**
  - NoContent
- **400**
- **404**
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/cronjobs/{cronjobId}`

**Zusammenfassung:** Get a Cronjob.

**Operation ID:** `cronjob-get-cronjob`

**Tags:** Cronjob

**Parameter:**

- `cronjobId` (path) **(erforderlich)**
  - ID of the Cronjob to be retrieved.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.cronjob.Cronjob` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/cronjobs/{cronjobId}`

**Zusammenfassung:** Delete a Cronjob.

**Operation ID:** `cronjob-delete-cronjob`

**Tags:** Cronjob

**Parameter:**

- `cronjobId` (path) **(erforderlich)**
  - ID of the Cronjob to delete.
  - Schema: string

**Responses:**

- **204**
  - NoContent
- **400**
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/cronjobs/{cronjobId}`

**Zusammenfassung:** Update a Cronjob.

**Operation ID:** `cronjob-update-cronjob`

**Tags:** Cronjob

**Parameter:**

- `cronjobId` (path) **(erforderlich)**
  - ID of the Cronjob to be updated.
  - Schema: string

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `active`: boolean
  - `description`: string
  - `destination`: 
  - `email`: string (email)
  - `failedExecutionAlertThreshold`: integer
  - `interval`: string
  - `timeout`: integer

**Responses:**

- **204**
  - NoContent
- **400**
- **404**
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/cronjobs/{cronjobId}`

**Zusammenfassung:** Get a Cronjob.

**Operation ID:** `cronjob-get-cronjob`

**Tags:** Cronjob

**Parameter:**

- `cronjobId` (path) **(erforderlich)**
  - ID of the Cronjob to be retrieved.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.cronjob.Cronjob` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/cronjobs/{cronjobId}`

**Zusammenfassung:** Delete a Cronjob.

**Operation ID:** `cronjob-delete-cronjob`

**Tags:** Cronjob

**Parameter:**

- `cronjobId` (path) **(erforderlich)**
  - ID of the Cronjob to delete.
  - Schema: string

**Responses:**

- **204**
  - NoContent
- **400**
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/cronjobs/{cronjobId}`

**Zusammenfassung:** Update a Cronjob.

**Operation ID:** `cronjob-update-cronjob`

**Tags:** Cronjob

**Parameter:**

- `cronjobId` (path) **(erforderlich)**
  - ID of the Cronjob to be updated.
  - Schema: string

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `active`: boolean
  - `description`: string
  - `destination`: 
  - `email`: string (email)
  - `failedExecutionAlertThreshold`: integer
  - `interval`: string
  - `timeout`: integer

**Responses:**

- **204**
  - NoContent
- **400**
- **404**
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/cronjobs/{cronjobId}/app-id`

**Zusammenfassung:** Update a Cronjob's app id.

**Operation ID:** `cronjob-update-cronjob-app-id`

**Tags:** Cronjob

**Parameter:**

- `cronjobId` (path) **(erforderlich)**
  - ID of the Cronjob to update.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

ID of the app to set.

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `appId` (erforderlich): string (uuid)

**Responses:**

- **204**
  - NoContent
- **400**
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/cronjobs/{cronjobId}/executions`

**Zusammenfassung:** List CronjobExecutions belonging to a Cronjob.

**Operation ID:** `cronjob-list-executions`

**Tags:** Cronjob

**Parameter:**

- `cronjobId` (path) **(erforderlich)**
  - ID of the Cronjob for which to list CronjobExecutions for.
  - Schema: string
- `limit` (query) (optional)
  - Schema: integer
- `skip` (query) (optional)
  - Schema: integer
- `page` (query) (optional)
  - Schema: integer
- `since` (query) (optional)
  - Schema: string (date-time)
- `until` (query) (optional)
  - Schema: string (date-time)
- `status` (query) (optional)
  - Schema: string
- `triggeredByUser` (query) (optional)
  - Schema: boolean
- `sortOrder` (query) (optional)
  - Schema: `de.mittwald.v1.cronjob.CronjobExecutionSortOrder` (siehe Schema-Definition)

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.cronjob.CronjobExecution` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.cronjob.CronjobExecution` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/cronjobs/{cronjobId}/executions`

**Zusammenfassung:** Trigger a Cronjob.

**Operation ID:** `cronjob-create-execution`

**Tags:** Cronjob

**Parameter:**

- `cronjobId` (path) **(erforderlich)**
  - ID of the Cronjob to trigger.
  - Schema: string

**Responses:**

- **201**
  - Created

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `id` (erforderlich): string
- **404**
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/cronjobs/{cronjobId}/executions`

**Zusammenfassung:** List CronjobExecutions belonging to a Cronjob.

**Operation ID:** `cronjob-list-executions`

**Tags:** Cronjob

**Parameter:**

- `cronjobId` (path) **(erforderlich)**
  - ID of the Cronjob for which to list CronjobExecutions for.
  - Schema: string
- `limit` (query) (optional)
  - Schema: integer
- `skip` (query) (optional)
  - Schema: integer
- `page` (query) (optional)
  - Schema: integer
- `since` (query) (optional)
  - Schema: string (date-time)
- `until` (query) (optional)
  - Schema: string (date-time)
- `status` (query) (optional)
  - Schema: string
- `triggeredByUser` (query) (optional)
  - Schema: boolean
- `sortOrder` (query) (optional)
  - Schema: `de.mittwald.v1.cronjob.CronjobExecutionSortOrder` (siehe Schema-Definition)

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.cronjob.CronjobExecution` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.cronjob.CronjobExecution` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/cronjobs/{cronjobId}/executions`

**Zusammenfassung:** Trigger a Cronjob.

**Operation ID:** `cronjob-create-execution`

**Tags:** Cronjob

**Parameter:**

- `cronjobId` (path) **(erforderlich)**
  - ID of the Cronjob to trigger.
  - Schema: string

**Responses:**

- **201**
  - Created

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `id` (erforderlich): string
- **404**
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/cronjobs/{cronjobId}/executions/{executionId}`

**Zusammenfassung:** Get a CronjobExecution.

**Operation ID:** `cronjob-get-execution`

**Tags:** Cronjob

**Parameter:**

- `executionId` (path) **(erforderlich)**
  - ID of the CronjobExecution to be retrieved.
  - Schema: string
- `cronjobId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.cronjob.CronjobExecution` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/cronjobs/{cronjobId}/executions/{executionId}/actions/abort`

**Zusammenfassung:** Abort a CronjobExecution.

**Operation ID:** `cronjob-abort-execution`

**Tags:** Cronjob

**Parameter:**

- `cronjobId` (path) **(erforderlich)**
  - ID of the CronjobExecution to be aborted.
  - Schema: string
- `executionId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **204**
  - NoContent
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/cronjobs/{cronjobId}/executions/{executionId}/analysis`

**Zusammenfassung:** Get a CronjobExecution analysis for failed executions.

**Operation ID:** `cronjob-get-execution-analysis`

**Tags:** Cronjob

**Parameter:**

- `executionId` (path) **(erforderlich)**
  - ID of the CronjobExecution to be analyzed.
  - Schema: string
- `cronjobId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.cronjob.CronjobExecutionAnalysis` (siehe Schema-Definition)
- **400**
- **403**
- **404**
- **412**
- **429**
- **500**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}/cronjobs`

**Zusammenfassung:** List Cronjobs belonging to a Project.

**Operation ID:** `cronjob-list-cronjobs`

**Tags:** Cronjob

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project for which to list Cronjobs for.
  - Schema: string
- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer (Standard: `1000`)
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.cronjob.Cronjob` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.cronjob.Cronjob` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/projects/{projectId}/cronjobs`

**Zusammenfassung:** Create a Cronjob.

**Operation ID:** `cronjob-create-cronjob`

**Tags:** Cronjob

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project you want to create a Cronjob for.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

cronjob

**Content-Type:** `application/json`
**Schema:** `de.mittwald.v1.cronjob.CronjobRequest` (siehe Schema-Definition)

**Responses:**

- **201**
  - Created

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `id` (erforderlich): string (uuid)
- **400**
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}/cronjobs`

**Zusammenfassung:** List Cronjobs belonging to a Project.

**Operation ID:** `cronjob-list-cronjobs`

**Tags:** Cronjob

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project for which to list Cronjobs for.
  - Schema: string
- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer (Standard: `1000`)
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.cronjob.Cronjob` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.cronjob.Cronjob` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/projects/{projectId}/cronjobs`

**Zusammenfassung:** Create a Cronjob.

**Operation ID:** `cronjob-create-cronjob`

**Tags:** Cronjob

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project you want to create a Cronjob for.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

cronjob

**Content-Type:** `application/json`
**Schema:** `de.mittwald.v1.cronjob.CronjobRequest` (siehe Schema-Definition)

**Responses:**

- **201**
  - Created

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `id` (erforderlich): string (uuid)
- **400**
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---


### Customer

#### `GET /v2/customer-invites`

**Zusammenfassung:** List CustomerInvites belonging to the executing user.

**Operation ID:** `customer-list-customer-invites`

**Tags:** Customer

**Parameter:**

- `limit` (query) (optional)
  - Schema: integer
- `skip` (query) (optional)
  - Schema: integer
- `page` (query) (optional)
  - Schema: integer

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.membership.CustomerInvite` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.membership.CustomerInvite` (siehe Schema-Definition)
- **403**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/customer-invites/{customerInviteId}`

**Zusammenfassung:** Get a CustomerInvite.

**Operation ID:** `customer-get-customer-invite`

**Tags:** Customer

**Parameter:**

- `customerInviteId` (path) **(erforderlich)**
  - ID of the CustomerInvite to be retrieved.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.membership.CustomerInvite` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/customer-invites/{customerInviteId}`

**Zusammenfassung:** Delete a CustomerInvite.

**Operation ID:** `customer-delete-customer-invite`

**Tags:** Customer

**Parameter:**

- `customerInviteId` (path) **(erforderlich)**
  - ID if the CustomerInvite to be deleted.
  - Schema: string (uuid)

**Responses:**

- **204**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/customer-invites/{customerInviteId}`

**Zusammenfassung:** Get a CustomerInvite.

**Operation ID:** `customer-get-customer-invite`

**Tags:** Customer

**Parameter:**

- `customerInviteId` (path) **(erforderlich)**
  - ID of the CustomerInvite to be retrieved.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.membership.CustomerInvite` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/customer-invites/{customerInviteId}`

**Zusammenfassung:** Delete a CustomerInvite.

**Operation ID:** `customer-delete-customer-invite`

**Tags:** Customer

**Parameter:**

- `customerInviteId` (path) **(erforderlich)**
  - ID if the CustomerInvite to be deleted.
  - Schema: string (uuid)

**Responses:**

- **204**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/customer-invites/{customerInviteId}/actions/accept`

**Zusammenfassung:** Accept a CustomerInvite.

**Operation ID:** `customer-accept-customer-invite`

**Tags:** Customer

**Parameter:**

- `customerInviteId` (path) **(erforderlich)**
  - ID of the CustomerInvite to be accepted.
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `invitationToken`: string

**Responses:**

- **204**
- **400**
- **403**
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/customer-invites/{customerInviteId}/actions/decline`

**Zusammenfassung:** Decline a CustomerInvite.

**Operation ID:** `customer-decline-customer-invite`

**Tags:** Customer

**Parameter:**

- `customerInviteId` (path) **(erforderlich)**
  - ID of the CustomerInvite to be declined.
  - Schema: string (uuid)

**Responses:**

- **204**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/customer-invites/{customerInviteId}/actions/resend`

**Zusammenfassung:** Resend the mail for a CustomerInvite.

**Operation ID:** `customer-resend-customer-invite-mail`

**Tags:** Customer

**Parameter:**

- `customerInviteId` (path) **(erforderlich)**
  - ID of the CustomerInvite to resend the mail for.
  - Schema: string (uuid)

**Responses:**

- **204**
- **403**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/customer-memberships`

**Zusammenfassung:** List CustomerMemberships belonging to the executing user.

**Operation ID:** `customer-list-customer-memberships`

**Tags:** Customer

**Parameter:**

- `limit` (query) (optional)
  - Schema: integer
- `skip` (query) (optional)
  - Schema: integer
- `page` (query) (optional)
  - Schema: integer
- `hasExpiry` (query) (optional)
  - Schema: boolean
- `role` (query) (optional)
  - Schema: `de.mittwald.v1.membership.CustomerRoles` (siehe Schema-Definition)

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.membership.CustomerMembership` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.membership.CustomerMembership` (siehe Schema-Definition)
- **403**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/customer-memberships/{customerMembershipId}`

**Zusammenfassung:** Get a CustomerMembership.

**Operation ID:** `customer-get-customer-membership`

**Tags:** Customer

**Parameter:**

- `customerMembershipId` (path) **(erforderlich)**
  - ID of the CustomerMembership to retrieve.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.membership.CustomerMembership` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/customer-memberships/{customerMembershipId}`

**Zusammenfassung:** Delete a CustomerMembership.

**Operation ID:** `customer-delete-customer-membership`

**Tags:** Customer

**Parameter:**

- `customerMembershipId` (path) **(erforderlich)**
  - ID of the CustomerMembership to be deleted.
  - Schema: string (uuid)

**Responses:**

- **204**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/customer-memberships/{customerMembershipId}`

**Zusammenfassung:** Update a CustomerMembership.

**Operation ID:** `customer-update-customer-membership`

**Tags:** Customer

**Parameter:**

- `customerMembershipId` (path) **(erforderlich)**
  - ID of the CustomerMembership to be updated.
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `expiresAt`: string (date-time)
  - `role` (erforderlich): `de.mittwald.v1.membership.CustomerRoles` (siehe Schema-Definition)

**Responses:**

- **204**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/customer-memberships/{customerMembershipId}`

**Zusammenfassung:** Get a CustomerMembership.

**Operation ID:** `customer-get-customer-membership`

**Tags:** Customer

**Parameter:**

- `customerMembershipId` (path) **(erforderlich)**
  - ID of the CustomerMembership to retrieve.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.membership.CustomerMembership` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/customer-memberships/{customerMembershipId}`

**Zusammenfassung:** Delete a CustomerMembership.

**Operation ID:** `customer-delete-customer-membership`

**Tags:** Customer

**Parameter:**

- `customerMembershipId` (path) **(erforderlich)**
  - ID of the CustomerMembership to be deleted.
  - Schema: string (uuid)

**Responses:**

- **204**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/customer-memberships/{customerMembershipId}`

**Zusammenfassung:** Update a CustomerMembership.

**Operation ID:** `customer-update-customer-membership`

**Tags:** Customer

**Parameter:**

- `customerMembershipId` (path) **(erforderlich)**
  - ID of the CustomerMembership to be updated.
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `expiresAt`: string (date-time)
  - `role` (erforderlich): `de.mittwald.v1.membership.CustomerRoles` (siehe Schema-Definition)

**Responses:**

- **204**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/customer-memberships/{customerMembershipId}`

**Zusammenfassung:** Get a CustomerMembership.

**Operation ID:** `customer-get-customer-membership`

**Tags:** Customer

**Parameter:**

- `customerMembershipId` (path) **(erforderlich)**
  - ID of the CustomerMembership to retrieve.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.membership.CustomerMembership` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/customer-memberships/{customerMembershipId}`

**Zusammenfassung:** Delete a CustomerMembership.

**Operation ID:** `customer-delete-customer-membership`

**Tags:** Customer

**Parameter:**

- `customerMembershipId` (path) **(erforderlich)**
  - ID of the CustomerMembership to be deleted.
  - Schema: string (uuid)

**Responses:**

- **204**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/customer-memberships/{customerMembershipId}`

**Zusammenfassung:** Update a CustomerMembership.

**Operation ID:** `customer-update-customer-membership`

**Tags:** Customer

**Parameter:**

- `customerMembershipId` (path) **(erforderlich)**
  - ID of the CustomerMembership to be updated.
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `expiresAt`: string (date-time)
  - `role` (erforderlich): `de.mittwald.v1.membership.CustomerRoles` (siehe Schema-Definition)

**Responses:**

- **204**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/customer-token-invite`

**Zusammenfassung:** Get a CustomerInvite by token.

**Operation ID:** `customer-get-customer-token-invite`

**Tags:** Customer

**Parameter:**

- `token` (header) **(erforderlich)**
  - Token of the CustomerInvite to be retrieved.
  - Schema: string

**Responses:**

- **200**

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.membership.CustomerInvite` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/customer/{customerId}/actions/leave`

**Zusammenfassung:** Leave a Customer.

This route is deprecated. Please use /v2/customers/{customerId}/actions/leave instead.

**Tags:** Customer

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - ID of the Customer to be left.
  - Schema: string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/customer/{customerId}/invites`

**Zusammenfassung:** Create a CustomerInvite.

This route is deprecated. Please use /v2/customers/{customerId}/invites instead.

**Tags:** Customer

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - ID of the Customer to create a CustomerInvite for.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `mailAddress` (erforderlich): string (email)
  - `membershipExpiresAt`: string (date-time)
  - `message`: string
  - `role` (erforderlich): `de.mittwald.v1.membership.CustomerRoles` (siehe Schema-Definition)

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/customers`

**Zusammenfassung:** Get all customer profiles the authenticated user has access to.

**Operation ID:** `customer-list-customers`

**Tags:** Customer

**Parameter:**

- `role` (query) (optional)
  - filter to list only customers where the authenticated user has the specified role. Can be a comma seperated list.
  - Schema: string
- `search` (query) (optional)
  - text search for customer number, customer name and id. Simple regular expressions are allowed.
  - Schema: string
- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer (Standard: `1000`)
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer

**Responses:**

- **200**
  - The list of customers the authenticated user is a member for

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.customer.Customer` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.customer.Customer` (siehe Schema-Definition)
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/customers`

**Zusammenfassung:** Create a new customer profile.

**Operation ID:** `customer-create-customer`

**Tags:** Customer

**Request Body:**

Request Body **(erforderlich)**

The customer to create

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `name` (erforderlich): string
  - `owner`: `de.mittwald.v1.customer.Contact` (siehe Schema-Definition)
  - `vatId`: string

**Responses:**

- **201**
  - The new customer

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `customerId` (erforderlich): string
    - `customerNumber` (erforderlich): string
    - `name` (erforderlich): string
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/customers`

**Zusammenfassung:** Get all customer profiles the authenticated user has access to.

**Operation ID:** `customer-list-customers`

**Tags:** Customer

**Parameter:**

- `role` (query) (optional)
  - filter to list only customers where the authenticated user has the specified role. Can be a comma seperated list.
  - Schema: string
- `search` (query) (optional)
  - text search for customer number, customer name and id. Simple regular expressions are allowed.
  - Schema: string
- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer (Standard: `1000`)
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer

**Responses:**

- **200**
  - The list of customers the authenticated user is a member for

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.customer.Customer` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.customer.Customer` (siehe Schema-Definition)
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/customers`

**Zusammenfassung:** Create a new customer profile.

**Operation ID:** `customer-create-customer`

**Tags:** Customer

**Request Body:**

Request Body **(erforderlich)**

The customer to create

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `name` (erforderlich): string
  - `owner`: `de.mittwald.v1.customer.Contact` (siehe Schema-Definition)
  - `vatId`: string

**Responses:**

- **201**
  - The new customer

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `customerId` (erforderlich): string
    - `customerNumber` (erforderlich): string
    - `name` (erforderlich): string
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/customers/{customerId}`

**Zusammenfassung:** Get a customer profile.

**Operation ID:** `customer-get-customer`

**Tags:** Customer

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - The uuid of the customer to be returned
  - Schema: string

**Responses:**

- **200**
  - The customer object

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.customer.Customer` (siehe Schema-Definition)
- **401**
- **403**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/customers/{customerId}`

**Zusammenfassung:** Update a customer profile.

**Operation ID:** `customer-update-customer`

**Tags:** Customer

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

The customer object to update

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `customerId` (erforderlich): string
  - `name` (erforderlich): string
  - `owner`: `de.mittwald.v1.customer.Contact` (siehe Schema-Definition)
  - `vatId`: string

**Responses:**

- **200**
  - Name and id of the updated customer

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `customerId` (erforderlich): string
    - `customerNumber` (erforderlich): string
    - `name` (erforderlich): string
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/customers/{customerId}`

**Zusammenfassung:** Delete a customer profile.

**Operation ID:** `customer-delete-customer`

**Tags:** Customer

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - The uuid of the customer to be deleted. Only customer without active contracts or unpaid invoices can be deleted.
  - Schema: string

**Responses:**

- **200**
  - Returns the uuid of the deleted customer

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `customerId`: string
- **404**
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/customers/{customerId}`

**Zusammenfassung:** Get a customer profile.

**Operation ID:** `customer-get-customer`

**Tags:** Customer

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - The uuid of the customer to be returned
  - Schema: string

**Responses:**

- **200**
  - The customer object

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.customer.Customer` (siehe Schema-Definition)
- **401**
- **403**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/customers/{customerId}`

**Zusammenfassung:** Update a customer profile.

**Operation ID:** `customer-update-customer`

**Tags:** Customer

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

The customer object to update

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `customerId` (erforderlich): string
  - `name` (erforderlich): string
  - `owner`: `de.mittwald.v1.customer.Contact` (siehe Schema-Definition)
  - `vatId`: string

**Responses:**

- **200**
  - Name and id of the updated customer

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `customerId` (erforderlich): string
    - `customerNumber` (erforderlich): string
    - `name` (erforderlich): string
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/customers/{customerId}`

**Zusammenfassung:** Delete a customer profile.

**Operation ID:** `customer-delete-customer`

**Tags:** Customer

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - The uuid of the customer to be deleted. Only customer without active contracts or unpaid invoices can be deleted.
  - Schema: string

**Responses:**

- **200**
  - Returns the uuid of the deleted customer

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `customerId`: string
- **404**
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/customers/{customerId}`

**Zusammenfassung:** Get a customer profile.

**Operation ID:** `customer-get-customer`

**Tags:** Customer

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - The uuid of the customer to be returned
  - Schema: string

**Responses:**

- **200**
  - The customer object

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.customer.Customer` (siehe Schema-Definition)
- **401**
- **403**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/customers/{customerId}`

**Zusammenfassung:** Update a customer profile.

**Operation ID:** `customer-update-customer`

**Tags:** Customer

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

The customer object to update

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `customerId` (erforderlich): string
  - `name` (erforderlich): string
  - `owner`: `de.mittwald.v1.customer.Contact` (siehe Schema-Definition)
  - `vatId`: string

**Responses:**

- **200**
  - Name and id of the updated customer

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `customerId` (erforderlich): string
    - `customerNumber` (erforderlich): string
    - `name` (erforderlich): string
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/customers/{customerId}`

**Zusammenfassung:** Delete a customer profile.

**Operation ID:** `customer-delete-customer`

**Tags:** Customer

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - The uuid of the customer to be deleted. Only customer without active contracts or unpaid invoices can be deleted.
  - Schema: string

**Responses:**

- **200**
  - Returns the uuid of the deleted customer

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `customerId`: string
- **404**
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/customers/{customerId}/actions/leave`

**Zusammenfassung:** Leave a Customer.

Deprecated by `DELETE /v2/customer-memberships/{customerMembershipId}`.

**Operation ID:** `deprecated-customer-leave-customer`

**Tags:** Customer

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - ID of the Customer to be left.
  - Schema: string

**Responses:**

- **204**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/customers/{customerId}/avatar`

**Zusammenfassung:** Request a new avatar upload for the customer profile.

**Operation ID:** `customer-request-avatar-upload`

**Tags:** Customer

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - The uuid of the customer for whom an avatar upload is to be requested
  - Schema: string

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** Object

**Responses:**

- **200**
  - Avatar request was successful. Use the `refId` to upload your avatar to the file service.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `refId` (erforderlich): string (uuid)
    - `rules` (erforderlich): Object
- **400**
- **401**
  - Access Token missing or invalid

  - **Content-Type:** `application/json`
    - Schema: Object
- **429**
- **500**
  - Internal server error

  - **Content-Type:** `application/json`
    - Schema: Object

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/customers/{customerId}/avatar`

**Zusammenfassung:** Remove the avatar picture of the customer profile.

**Operation ID:** `customer-remove-avatar`

**Tags:** Customer

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - The uuid of the customer whose avatar is to be deleted
  - Schema: string

**Responses:**

- **204**
  - Avatar removal was successful
- **400**
- **401**
  - Access Token missing or invalid

  - **Content-Type:** `application/json`
    - Schema: Object
- **429**
- **500**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/customers/{customerId}/avatar`

**Zusammenfassung:** Request a new avatar upload for the customer profile.

**Operation ID:** `customer-request-avatar-upload`

**Tags:** Customer

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - The uuid of the customer for whom an avatar upload is to be requested
  - Schema: string

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** Object

**Responses:**

- **200**
  - Avatar request was successful. Use the `refId` to upload your avatar to the file service.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `refId` (erforderlich): string (uuid)
    - `rules` (erforderlich): Object
- **400**
- **401**
  - Access Token missing or invalid

  - **Content-Type:** `application/json`
    - Schema: Object
- **429**
- **500**
  - Internal server error

  - **Content-Type:** `application/json`
    - Schema: Object

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/customers/{customerId}/avatar`

**Zusammenfassung:** Remove the avatar picture of the customer profile.

**Operation ID:** `customer-remove-avatar`

**Tags:** Customer

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - The uuid of the customer whose avatar is to be deleted
  - Schema: string

**Responses:**

- **204**
  - Avatar removal was successful
- **400**
- **401**
  - Access Token missing or invalid

  - **Content-Type:** `application/json`
    - Schema: Object
- **429**
- **500**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/customers/{customerId}/invites`

**Zusammenfassung:** List Invites belonging to a Customer.

**Operation ID:** `customer-list-invites-for-customer`

**Tags:** Customer

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - ID of the Customer to list invites for.
  - Schema: string
- `limit` (query) (optional)
  - Schema: integer
- `skip` (query) (optional)
  - Schema: integer

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.membership.CustomerInvite` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.membership.CustomerInvite` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/customers/{customerId}/invites`

**Zusammenfassung:** Create a CustomerInvite.

**Operation ID:** `customer-create-customer-invite`

**Tags:** Customer

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - ID of the Customer to create a CustomerInvite for.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `mailAddress` (erforderlich): string (email)
  - `membershipExpiresAt`: string (date-time)
  - `message`: string
  - `role` (erforderlich): `de.mittwald.v1.membership.CustomerRoles` (siehe Schema-Definition)

**Responses:**

- **201**

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.membership.CustomerInvite` (siehe Schema-Definition)
- **400**
- **403**
- **409**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/customers/{customerId}/invites`

**Zusammenfassung:** List Invites belonging to a Customer.

**Operation ID:** `customer-list-invites-for-customer`

**Tags:** Customer

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - ID of the Customer to list invites for.
  - Schema: string
- `limit` (query) (optional)
  - Schema: integer
- `skip` (query) (optional)
  - Schema: integer

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.membership.CustomerInvite` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.membership.CustomerInvite` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/customers/{customerId}/invites`

**Zusammenfassung:** Create a CustomerInvite.

**Operation ID:** `customer-create-customer-invite`

**Tags:** Customer

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - ID of the Customer to create a CustomerInvite for.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `mailAddress` (erforderlich): string (email)
  - `membershipExpiresAt`: string (date-time)
  - `message`: string
  - `role` (erforderlich): `de.mittwald.v1.membership.CustomerRoles` (siehe Schema-Definition)

**Responses:**

- **201**

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.membership.CustomerInvite` (siehe Schema-Definition)
- **400**
- **403**
- **409**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/customers/{customerId}/legally-competent`

**Zusammenfassung:** Check if the customer profile has a valid contract partner configured.

**Operation ID:** `customer-is-customer-legally-competent`

**Tags:** Customer

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - The uuid of the customer to be checked
  - Schema: string

**Responses:**

- **200**
  - Check if customer is allowed to order a paid item.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `isLegallyCompetent`: boolean
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/customers/{customerId}/memberships`

**Zusammenfassung:** List Memberships belonging to a Customer.

**Operation ID:** `customer-list-memberships-for-customer`

**Tags:** Customer

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Customer to list memberships for.
  - Schema: string
- `limit` (query) (optional)
  - Schema: integer
- `skip` (query) (optional)
  - Schema: integer
- `hasExpiry` (query) (optional)
  - Schema: boolean
- `role` (query) (optional)
  - Schema: `de.mittwald.v1.membership.CustomerRoles` (siehe Schema-Definition)

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.membership.CustomerMembership` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.membership.CustomerMembership` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/customers/{customerId}/recommendation-suggestions`

**Zusammenfassung:** Lets us know your idea for our recommendation programm.

**Operation ID:** `customer-create-recommendation-suggestion`

**Tags:** Customer

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `suggestion` (erforderlich): string

**Responses:**

- **201**
  - The suggestion has been made.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `customerId`: string
- **400**
- **404**
- **409**
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/customers/{customerId}/wallet`

**Zusammenfassung:** Gets the Wallet of the Customer.

**Operation ID:** `customer-get-wallet`

**Tags:** Customer

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **200**
  - The Wallet of the Customer

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `customerId` (erforderlich): string
    - `points` (erforderlich): number
    - `recommendationCode`: string
    - `walletId` (erforderlich): string
- **400**
- **404**
- **409**
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/customers/{customerId}/wallet`

**Zusammenfassung:** Create the Wallet for the Customer.

**Operation ID:** `customer-create-wallet`

**Tags:** Customer

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** Object

**Responses:**

- **200**
  - The Wallet has been created.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `customerId`: string
- **400**
- **404**
- **409**
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/customers/{customerId}/wallet`

**Zusammenfassung:** Gets the Wallet of the Customer.

**Operation ID:** `customer-get-wallet`

**Tags:** Customer

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **200**
  - The Wallet of the Customer

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `customerId` (erforderlich): string
    - `points` (erforderlich): number
    - `recommendationCode`: string
    - `walletId` (erforderlich): string
- **400**
- **404**
- **409**
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/customers/{customerId}/wallet`

**Zusammenfassung:** Create the Wallet for the Customer.

**Operation ID:** `customer-create-wallet`

**Tags:** Customer

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** Object

**Responses:**

- **200**
  - The Wallet has been created.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `customerId`: string
- **400**
- **404**
- **409**
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---


### Database

#### `GET /v2/mysql-charsets`

**Zusammenfassung:** List available MySQL character sets and collations, optionally filtered by a MySQLVersion.

**Operation ID:** `database-list-mysql-charsets`

**Tags:** Database

**Parameter:**

- `version` (query) (optional)
  - ID of the MySQLVersion for which to list the available character sets in the format `mysqlXY`.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.database.MySqlCharacterSettings` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.database.MySqlCharacterSettings` (siehe Schema-Definition)
- **400**
- **404**
- **429**
- **default**

**Security:**


---

#### `GET /v2/mysql-databases/{mysqlDatabaseId}`

**Zusammenfassung:** Get a MySQLDatabase.

**Operation ID:** `database-get-mysql-database`

**Tags:** Database

**Parameter:**

- `mysqlDatabaseId` (path) **(erforderlich)**
  - ID of the MySQLDatabase to be retrieved.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.database.MySqlDatabase` (siehe Schema-Definition)
- **400**
- **404**
- **429**
- **500**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/mysql-databases/{mysqlDatabaseId}`

**Zusammenfassung:** Delete a MySQLDatabase.

**Operation ID:** `database-delete-mysql-database`

**Tags:** Database

**Parameter:**

- `mysqlDatabaseId` (path) **(erforderlich)**
  - ID of the MySQLDatabase to be deleted.
  - Schema: string

**Responses:**

- **204**
  - NoContent
- **400**
- **412**
- **429**
- **500**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/mysql-databases/{mysqlDatabaseId}`

**Zusammenfassung:** Get a MySQLDatabase.

**Operation ID:** `database-get-mysql-database`

**Tags:** Database

**Parameter:**

- `mysqlDatabaseId` (path) **(erforderlich)**
  - ID of the MySQLDatabase to be retrieved.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.database.MySqlDatabase` (siehe Schema-Definition)
- **400**
- **404**
- **429**
- **500**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/mysql-databases/{mysqlDatabaseId}`

**Zusammenfassung:** Delete a MySQLDatabase.

**Operation ID:** `database-delete-mysql-database`

**Tags:** Database

**Parameter:**

- `mysqlDatabaseId` (path) **(erforderlich)**
  - ID of the MySQLDatabase to be deleted.
  - Schema: string

**Responses:**

- **204**
  - NoContent
- **400**
- **412**
- **429**
- **500**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/mysql-databases/{mysqlDatabaseId}/actions/copy`

**Zusammenfassung:** Copy a MySQLDatabase with a MySQLUser.

**Operation ID:** `database-copy-mysql-database`

**Tags:** Database

**Parameter:**

- `mysqlDatabaseId` (path) **(erforderlich)**
  - ID of the MySQLDatabase to copy.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `description` (erforderlich): string
  - `user` (erforderlich): `de.mittwald.v1.database.CreateMySqlUserWithDatabase` (siehe Schema-Definition)

**Responses:**

- **201**
  - Created

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `id` (erforderlich): string (uuid)
    - `userId` (erforderlich): string (uuid)
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/mysql-databases/{mysqlDatabaseId}/default-charset`

**Zusammenfassung:** Update a MySQLDatabase's default character settings.

**Operation ID:** `database-update-mysql-database-default-charset`

**Tags:** Database

**Parameter:**

- `mysqlDatabaseId` (path) **(erforderlich)**
  - ID of the MySQLDatabase to update.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

The default character settings to be used for the MySQLDatabase.

**Content-Type:** `application/json`

**Responses:**

- **204**
  - NoContent
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/mysql-databases/{mysqlDatabaseId}/description`

**Zusammenfassung:** Update a MySQLDatabase's description.

**Operation ID:** `database-update-mysql-database-description`

**Tags:** Database

**Parameter:**

- `mysqlDatabaseId` (path) **(erforderlich)**
  - ID of the MySQLDatabase to update.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **204**
  - NoContent
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/mysql-databases/{mysqlDatabaseId}/users`

**Zusammenfassung:** List MySQLUsers belonging to a Database.

**Operation ID:** `database-list-mysql-users`

**Tags:** Database

**Parameter:**

- `mysqlDatabaseId` (path) **(erforderlich)**
  - ID of the MySQLDatabase to list Users for.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.database.MySqlUser` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.database.MySqlUser` (siehe Schema-Definition)
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/mysql-databases/{mysqlDatabaseId}/users`

**Zusammenfassung:** Create a MySQLUser.

**Operation ID:** `database-create-mysql-user`

**Tags:** Database

**Parameter:**

- `mysqlDatabaseId` (path) **(erforderlich)**
  - ID of the MySQLDatabase to create a MySQLUser for.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** `de.mittwald.v1.database.CreateMySqlUser` (siehe Schema-Definition)

**Responses:**

- **201**
  - Created

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `id` (erforderlich): string (uuid)
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/mysql-databases/{mysqlDatabaseId}/users`

**Zusammenfassung:** List MySQLUsers belonging to a Database.

**Operation ID:** `database-list-mysql-users`

**Tags:** Database

**Parameter:**

- `mysqlDatabaseId` (path) **(erforderlich)**
  - ID of the MySQLDatabase to list Users for.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.database.MySqlUser` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.database.MySqlUser` (siehe Schema-Definition)
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/mysql-databases/{mysqlDatabaseId}/users`

**Zusammenfassung:** Create a MySQLUser.

**Operation ID:** `database-create-mysql-user`

**Tags:** Database

**Parameter:**

- `mysqlDatabaseId` (path) **(erforderlich)**
  - ID of the MySQLDatabase to create a MySQLUser for.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** `de.mittwald.v1.database.CreateMySqlUser` (siehe Schema-Definition)

**Responses:**

- **201**
  - Created

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `id` (erforderlich): string (uuid)
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/mysql-users/{mysqlUserId}`

**Zusammenfassung:** Get a MySQLUser.

**Operation ID:** `database-get-mysql-user`

**Tags:** Database

**Parameter:**

- `mysqlUserId` (path) **(erforderlich)**
  - ID of the MySQLUser to be retrieved.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.database.MySqlUser` (siehe Schema-Definition)
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/mysql-users/{mysqlUserId}`

**Zusammenfassung:** Update a MySQLUser.

**Operation ID:** `database-update-mysql-user`

**Tags:** Database

**Parameter:**

- `mysqlUserId` (path) **(erforderlich)**
  - ID of the MySQLUser to update.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **204**
  - NoContent
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/mysql-users/{mysqlUserId}`

**Zusammenfassung:** Delete a MySQLUser.

**Operation ID:** `database-delete-mysql-user`

**Tags:** Database

**Parameter:**

- `mysqlUserId` (path) **(erforderlich)**
  - ID of the MySQLUser to delete.
  - Schema: string

**Responses:**

- **204**
  - NoContent
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/mysql-users/{mysqlUserId}`

**Zusammenfassung:** Get a MySQLUser.

**Operation ID:** `database-get-mysql-user`

**Tags:** Database

**Parameter:**

- `mysqlUserId` (path) **(erforderlich)**
  - ID of the MySQLUser to be retrieved.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.database.MySqlUser` (siehe Schema-Definition)
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/mysql-users/{mysqlUserId}`

**Zusammenfassung:** Update a MySQLUser.

**Operation ID:** `database-update-mysql-user`

**Tags:** Database

**Parameter:**

- `mysqlUserId` (path) **(erforderlich)**
  - ID of the MySQLUser to update.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **204**
  - NoContent
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/mysql-users/{mysqlUserId}`

**Zusammenfassung:** Delete a MySQLUser.

**Operation ID:** `database-delete-mysql-user`

**Tags:** Database

**Parameter:**

- `mysqlUserId` (path) **(erforderlich)**
  - ID of the MySQLUser to delete.
  - Schema: string

**Responses:**

- **204**
  - NoContent
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/mysql-users/{mysqlUserId}`

**Zusammenfassung:** Get a MySQLUser.

**Operation ID:** `database-get-mysql-user`

**Tags:** Database

**Parameter:**

- `mysqlUserId` (path) **(erforderlich)**
  - ID of the MySQLUser to be retrieved.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.database.MySqlUser` (siehe Schema-Definition)
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/mysql-users/{mysqlUserId}`

**Zusammenfassung:** Update a MySQLUser.

**Operation ID:** `database-update-mysql-user`

**Tags:** Database

**Parameter:**

- `mysqlUserId` (path) **(erforderlich)**
  - ID of the MySQLUser to update.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **204**
  - NoContent
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/mysql-users/{mysqlUserId}`

**Zusammenfassung:** Delete a MySQLUser.

**Operation ID:** `database-delete-mysql-user`

**Tags:** Database

**Parameter:**

- `mysqlUserId` (path) **(erforderlich)**
  - ID of the MySQLUser to delete.
  - Schema: string

**Responses:**

- **204**
  - NoContent
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/mysql-users/{mysqlUserId}/actions/disable`

**Zusammenfassung:** Disable a MySQLUser.

**Operation ID:** `database-disable-mysql-user`

**Tags:** Database

**Parameter:**

- `mysqlUserId` (path) **(erforderlich)**
  - ID of the MySQLUser to disable.
  - Schema: string

**Responses:**

- **204**
  - NoContent
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/mysql-users/{mysqlUserId}/actions/enable`

**Zusammenfassung:** Enable a MySQLUser.

**Operation ID:** `database-enable-mysql-user`

**Tags:** Database

**Parameter:**

- `mysqlUserId` (path) **(erforderlich)**
  - ID of the MySQLUser to enable.
  - Schema: string

**Responses:**

- **204**
  - NoContent
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/mysql-users/{mysqlUserId}/password`

**Zusammenfassung:** Update a MySQLUser's password.

**Operation ID:** `database-update-mysql-user-password`

**Tags:** Database

**Parameter:**

- `mysqlUserId` (path) **(erforderlich)**
  - ID of the MySQLUser for which to update the password for.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **204**
  - NoContent
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/mysql-users/{mysqlUserId}/php-my-admin-url`

**Zusammenfassung:** Get a MySQLUser's PhpMyAdmin-URL.

**Operation ID:** `database-get-mysql-user-php-my-admin-url`

**Tags:** Database

**Parameter:**

- `mysqlUserId` (path) **(erforderlich)**
  - ID of the MySQLUser for which to get the URL for.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.database.PhpMyAdminURL` (siehe Schema-Definition)
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/mysql-versions`

**Zusammenfassung:** List MySQLVersions.

**Operation ID:** `database-list-mysql-versions`

**Tags:** Database

**Parameter:**

- `projectId` (query) (optional)
  - ID of the Project to list available MySQLVersions for.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.database.MySqlVersion` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.database.MySqlVersion` (siehe Schema-Definition)
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}/mysql-databases`

**Zusammenfassung:** List MySQLDatabases belonging to a Project.

**Operation ID:** `database-list-mysql-databases`

**Tags:** Database

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to list MySQLDatabases for.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.database.MySqlDatabase` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.database.MySqlDatabase` (siehe Schema-Definition)
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/projects/{projectId}/mysql-databases`

**Zusammenfassung:** Create a MySQLDatabase with a MySQLUser.

**Operation ID:** `database-create-mysql-database`

**Tags:** Database

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to create a MySQLDatabase for.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `database` (erforderlich): `de.mittwald.v1.database.CreateMySqlDatabase` (siehe Schema-Definition)
  - `user` (erforderlich): `de.mittwald.v1.database.CreateMySqlUserWithDatabase` (siehe Schema-Definition)

**Responses:**

- **201**
  - Created

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `id` (erforderlich): string (uuid)
    - `userId` (erforderlich): string (uuid)
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}/mysql-databases`

**Zusammenfassung:** List MySQLDatabases belonging to a Project.

**Operation ID:** `database-list-mysql-databases`

**Tags:** Database

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to list MySQLDatabases for.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.database.MySqlDatabase` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.database.MySqlDatabase` (siehe Schema-Definition)
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/projects/{projectId}/mysql-databases`

**Zusammenfassung:** Create a MySQLDatabase with a MySQLUser.

**Operation ID:** `database-create-mysql-database`

**Tags:** Database

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to create a MySQLDatabase for.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `database` (erforderlich): `de.mittwald.v1.database.CreateMySqlDatabase` (siehe Schema-Definition)
  - `user` (erforderlich): `de.mittwald.v1.database.CreateMySqlUserWithDatabase` (siehe Schema-Definition)

**Responses:**

- **201**
  - Created

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `id` (erforderlich): string (uuid)
    - `userId` (erforderlich): string (uuid)
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}/redis-databases`

**Zusammenfassung:** List RedisDatabases belonging to a Project.

**Operation ID:** `database-list-redis-databases`

**Tags:** Database

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to list RedisDatabases for.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.database.RedisDatabase` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.database.RedisDatabase` (siehe Schema-Definition)
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/projects/{projectId}/redis-databases`

**Zusammenfassung:** Create a RedisDatabase.

**Operation ID:** `database-create-redis-database`

**Tags:** Database

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to create a RedisDatabase for.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `configuration`: `de.mittwald.v1.database.RedisDatabaseConfiguration` (siehe Schema-Definition)
  - `description` (erforderlich): string
  - `version` (erforderlich): string

**Responses:**

- **201**
  - Created

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `id` (erforderlich): string (uuid)
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}/redis-databases`

**Zusammenfassung:** List RedisDatabases belonging to a Project.

**Operation ID:** `database-list-redis-databases`

**Tags:** Database

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to list RedisDatabases for.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.database.RedisDatabase` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.database.RedisDatabase` (siehe Schema-Definition)
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/projects/{projectId}/redis-databases`

**Zusammenfassung:** Create a RedisDatabase.

**Operation ID:** `database-create-redis-database`

**Tags:** Database

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to create a RedisDatabase for.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `configuration`: `de.mittwald.v1.database.RedisDatabaseConfiguration` (siehe Schema-Definition)
  - `description` (erforderlich): string
  - `version` (erforderlich): string

**Responses:**

- **201**
  - Created

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `id` (erforderlich): string (uuid)
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/redis-databases/{redisDatabaseId}`

**Zusammenfassung:** Get a RedisDatabase.

**Operation ID:** `database-get-redis-database`

**Tags:** Database

**Parameter:**

- `redisDatabaseId` (path) **(erforderlich)**
  - ID of the RedisDatabase to retrieve.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.database.RedisDatabase` (siehe Schema-Definition)
- **400**
- **404**
- **429**
- **500**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/redis-databases/{redisDatabaseId}`

**Zusammenfassung:** Delete a RedisDatabase.

**Operation ID:** `database-delete-redis-database`

**Tags:** Database

**Parameter:**

- `redisDatabaseId` (path) **(erforderlich)**
  - ID of the RedisDatabase to delete.
  - Schema: string

**Responses:**

- **204**
  - NoContent
- **400**
- **412**
- **429**
- **500**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/redis-databases/{redisDatabaseId}`

**Zusammenfassung:** Get a RedisDatabase.

**Operation ID:** `database-get-redis-database`

**Tags:** Database

**Parameter:**

- `redisDatabaseId` (path) **(erforderlich)**
  - ID of the RedisDatabase to retrieve.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.database.RedisDatabase` (siehe Schema-Definition)
- **400**
- **404**
- **429**
- **500**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/redis-databases/{redisDatabaseId}`

**Zusammenfassung:** Delete a RedisDatabase.

**Operation ID:** `database-delete-redis-database`

**Tags:** Database

**Parameter:**

- `redisDatabaseId` (path) **(erforderlich)**
  - ID of the RedisDatabase to delete.
  - Schema: string

**Responses:**

- **204**
  - NoContent
- **400**
- **412**
- **429**
- **500**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/redis-databases/{redisDatabaseId}/configuration`

**Zusammenfassung:** Update a RedisDatabase's configuration.

**Operation ID:** `database-update-redis-database-configuration`

**Tags:** Database

**Parameter:**

- `redisDatabaseId` (path) **(erforderlich)**
  - ID of the RedisDatabase to update.
  - Schema: string

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`

**Responses:**

- **204**
  - NoContent
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/redis-databases/{redisDatabaseId}/description`

**Zusammenfassung:** Update a RedisDatabase's description.

**Operation ID:** `database-update-redis-database-description`

**Tags:** Database

**Parameter:**

- `redisDatabaseId` (path) **(erforderlich)**
  - ID of the RedisDatabase to update.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **204**
  - NoContent
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/redis-versions`

**Zusammenfassung:** List RedisVersions.

**Operation ID:** `database-list-redis-versions`

**Tags:** Database

**Parameter:**

- `projectId` (query) (optional)
  - ID of the Project to list available RedisVersions for.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.database.RedisVersion` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.database.RedisVersion` (siehe Schema-Definition)
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---


### Domain

#### `POST /v2/actions/list-ingresses-compatible-with-certificate`

**Zusammenfassung:** List Ingresses compatible with a certificate.

List Ingresses in a Project compatible with a certificate.

**Operation ID:** `ingress-list-ingresses-compatible-with-certificate`

**Tags:** Domain

**Parameter:**

- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer (Standard: `10000`)
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `certificate` (erforderlich): string
  - `projectId` (erforderlich): string (uuid)

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.ingress.Ingress` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.ingress.Ingress` (siehe Schema-Definition)
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/certificate-request/{certificateRequestId}`

**Zusammenfassung:** Delete a CertificateRequest.

**Operation ID:** `ssl-delete-certificate-request`

**Tags:** Domain

**Parameter:**

- `certificateRequestId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **204**
  - No Content
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/certificate-requests`

**Zusammenfassung:** List CertificateRequests belonging to a Project or an Ingress.

**Operation ID:** `ssl-list-certificate-requests`

**Tags:** Domain

**Parameter:**

- `projectId` (query) (optional)
  - ID of the Project to list Certificate Requests for.
  - Schema: string
- `ingressId` (query) (optional)
  - ID of the Ingress to list Certificate Requests for.
  - Schema: string (uuid)

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.ssl.CertificateRequest` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.ssl.CertificateRequest` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/certificate-requests`

**Zusammenfassung:** Create a CertificateRequest.

**Operation ID:** `ssl-create-certificate-request`

**Tags:** Domain

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **201**
  - Created

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.ssl.CertificateRequestCreateResponse` (siehe Schema-Definition)
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/certificate-requests`

**Zusammenfassung:** List CertificateRequests belonging to a Project or an Ingress.

**Operation ID:** `ssl-list-certificate-requests`

**Tags:** Domain

**Parameter:**

- `projectId` (query) (optional)
  - ID of the Project to list Certificate Requests for.
  - Schema: string
- `ingressId` (query) (optional)
  - ID of the Ingress to list Certificate Requests for.
  - Schema: string (uuid)

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.ssl.CertificateRequest` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.ssl.CertificateRequest` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/certificate-requests`

**Zusammenfassung:** Create a CertificateRequest.

**Operation ID:** `ssl-create-certificate-request`

**Tags:** Domain

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **201**
  - Created

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.ssl.CertificateRequestCreateResponse` (siehe Schema-Definition)
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/certificate-requests/{certificateRequestId}`

**Zusammenfassung:** Get a CertificateRequest.

**Operation ID:** `ssl-get-certificate-request`

**Tags:** Domain

**Parameter:**

- `certificateRequestId` (path) **(erforderlich)**
  - ID of the CertificateRequest to be retrieved.
  - Schema: string (uuid)

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.ssl.CertificateRequest` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/certificate/{certificateId}`

**Zusammenfassung:** Delete a Certificate.

**Operation ID:** `ssl-delete-certificate`

**Tags:** Domain

**Parameter:**

- `certificateId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **204**
  - No Content
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/certificates`

**Zusammenfassung:** List Certificates belonging to a Project or an Ingress.

**Operation ID:** `ssl-list-certificates`

**Tags:** Domain

**Parameter:**

- `projectId` (query) (optional)
  - ID of the Project to list Certificates for.
  - Schema: string
- `ingressId` (query) (optional)
  - ID of the Ingress to list Certificates for.
  - Schema: string (uuid)

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.ssl.Certificate` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.ssl.Certificate` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/certificates/{certificateId}`

**Zusammenfassung:** Get a Certificate.

**Operation ID:** `ssl-get-certificate`

**Tags:** Domain

**Parameter:**

- `certificateId` (path) **(erforderlich)**
  - ID of the SSL Certificate to be retrieved.
  - Schema: string (uuid)

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.ssl.Certificate` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/certificates/{certificateId}`

**Zusammenfassung:** Update a Certificate.

**Operation ID:** `ssl-replace-certificate`

**Tags:** Domain

**Parameter:**

- `certificateId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `certificate` (erforderlich): string
  - `privateKey`: string

**Responses:**

- **204**
  - OK
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/certificates/{certificateId}`

**Zusammenfassung:** Get a Certificate.

**Operation ID:** `ssl-get-certificate`

**Tags:** Domain

**Parameter:**

- `certificateId` (path) **(erforderlich)**
  - ID of the SSL Certificate to be retrieved.
  - Schema: string (uuid)

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.ssl.Certificate` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/certificates/{certificateId}`

**Zusammenfassung:** Update a Certificate.

**Operation ID:** `ssl-replace-certificate`

**Tags:** Domain

**Parameter:**

- `certificateId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `certificate` (erforderlich): string
  - `privateKey`: string

**Responses:**

- **204**
  - OK
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/certificates/{certificateId}/actions/check-replace-certificate`

**Zusammenfassung:** Check the replacement of a Certificate.

Checks the replacement of a Certificate and shows differences between the current and the new Certificate.

**Operation ID:** `ssl-check-replace-certificate`

**Tags:** Domain

**Parameter:**

- `certificateId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `certificate` (erforderlich): string
  - `privateKey`: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.ssl.CheckReplaceCertificateResponse` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/dns-zones`

**Zusammenfassung:** Create a DNSZone.

**Operation ID:** `dns-create-dns-zone`

**Tags:** Domain

**Parameter:**


**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `name` (erforderlich): string (idn-dnsname)
  - `parentZoneId` (erforderlich): string (uuid)

**Responses:**

- **201**
  - The ID of the created DNSZone.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `id` (erforderlich): string (uuid)
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/dns-zones/{dnsZoneId}`

**Zusammenfassung:** Get a DNSZone.

**Operation ID:** `dns-get-dns-zone`

**Tags:** Domain

**Parameter:**

- `dnsZoneId` (path) **(erforderlich)**
  - The ID of the zone to be retrieved.
  - Schema: string (uuid)

**Responses:**

- **200**
  - The requested DNSZone.

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.dns.Zone` (siehe Schema-Definition)
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/dns-zones/{dnsZoneId}`

**Zusammenfassung:** Delete a DNSZone.

**Operation ID:** `dns-delete-dns-zone`

**Tags:** Domain

**Parameter:**

- `dnsZoneId` (path) **(erforderlich)**
  - The ID of the DNSZone to be deleted.
  - Schema: string (uuid)

**Responses:**

- **204**
  - No Content
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/dns-zones/{dnsZoneId}`

**Zusammenfassung:** Get a DNSZone.

**Operation ID:** `dns-get-dns-zone`

**Tags:** Domain

**Parameter:**

- `dnsZoneId` (path) **(erforderlich)**
  - The ID of the zone to be retrieved.
  - Schema: string (uuid)

**Responses:**

- **200**
  - The requested DNSZone.

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.dns.Zone` (siehe Schema-Definition)
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/dns-zones/{dnsZoneId}`

**Zusammenfassung:** Delete a DNSZone.

**Operation ID:** `dns-delete-dns-zone`

**Tags:** Domain

**Parameter:**

- `dnsZoneId` (path) **(erforderlich)**
  - The ID of the DNSZone to be deleted.
  - Schema: string (uuid)

**Responses:**

- **204**
  - No Content
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/dns-zones/{dnsZoneId}/record-sets/{recordSet}`

**Zusammenfassung:** Update a record set on a DNSZone.

**Operation ID:** `dns-update-record-set`

**Tags:** Domain

**Parameter:**

- `dnsZoneId` (path) **(erforderlich)**
  - The ID of the DNSZone to update a record set for.
  - Schema: string (uuid)
- `recordSet` (path) **(erforderlich)**
  - The record set to be updated.
  - Schema: string - Enum: `a`, `mx`, `txt`, `srv`, `cname`, `caa`

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **204**
  - Record set updated.
- **400**
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/dns-zones/{dnsZoneId}/record-sets/{recordSet}/actions/set-managed`

**Zusammenfassung:** Set a record set on a DNSZone to managed.

**Operation ID:** `dns-set-record-set-managed`

**Tags:** Domain

**Parameter:**

- `dnsZoneId` (path) **(erforderlich)**
  - The ID of the DNSZone to set a record set to managed for.
  - Schema: string (uuid)
- `recordSet` (path) **(erforderlich)**
  - The record set to set to managed.
  - Schema: string - Enum: `a`, `mx`

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**

**Responses:**

- **200**
  - The ID of the Ingress the a-records were set for, or an empty object if mx-records were set.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `ingressId`: string (uuid)
- **400**
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/dns-zones/{dnsZoneId}/zone-file`

**Zusammenfassung:** Get a zone file for a DNSZone.

Returns a BIND-compliant DNS zone file per RFC 1035 for the specified dnsZoneId, including all sub zone information. Entering the dnsZoneId of a sub zone will result in an error.

**Operation ID:** `dns-get-zone-file`

**Tags:** Domain

**Parameter:**

- `dnsZoneId` (path) **(erforderlich)**
  - ID of the DNSZone to get a zone file for.
  - Schema: string (uuid)

**Responses:**

- **200**
  - Returns the zone file as plain text.

  - **Content-Type:** `text/plain`
    - Schema: string
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/dns/zones`

**Zusammenfassung:** Create a DNSZone.

This route is deprecated. Please use /v2/dns-zones instead.

**Tags:** Domain

**Parameter:**


**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `name` (erforderlich): string (idn-dnsname)
  - `parentZoneId` (erforderlich): string (uuid)

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/dns/zones/{dnsZoneId}`

**Zusammenfassung:** Get a DNSZone.

This route is deprecated. Please use /v2/dns-zones/{dnsZoneId} instead.

**Tags:** Domain

**Parameter:**

- `dnsZoneId` (path) **(erforderlich)**
  - The ID of the zone to be retrieved.
  - Schema: string (uuid)

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/dns/zones/{dnsZoneId}`

**Zusammenfassung:** Delete a DNSZone.

This route is deprecated. Please use /v2/dns-zones/{dnsZoneId} instead.

**Tags:** Domain

**Parameter:**

- `dnsZoneId` (path) **(erforderlich)**
  - The ID of the DNSZone to be deleted.
  - Schema: string (uuid)

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/dns/zones/{dnsZoneId}`

**Zusammenfassung:** Get a DNSZone.

This route is deprecated. Please use /v2/dns-zones/{dnsZoneId} instead.

**Tags:** Domain

**Parameter:**

- `dnsZoneId` (path) **(erforderlich)**
  - The ID of the zone to be retrieved.
  - Schema: string (uuid)

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/dns/zones/{dnsZoneId}`

**Zusammenfassung:** Delete a DNSZone.

This route is deprecated. Please use /v2/dns-zones/{dnsZoneId} instead.

**Tags:** Domain

**Parameter:**

- `dnsZoneId` (path) **(erforderlich)**
  - The ID of the DNSZone to be deleted.
  - Schema: string (uuid)

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/dns/zones/{zoneId}/recordset/acombined/custom`

**Zusammenfassung:** updates a-records for a specific zone

This operation is deprecated. Use the PUT v2/dns-zones/{dnsZoneId}/record-sets/{recordSet} endpoint instead.

**Operation ID:** `deprecated-dns-record-a-set-custom`

**Tags:** Domain

**Parameter:**

- `zoneId` (path) **(erforderlich)**
  - the id of the zone the record belongs to
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **204**
  - recordset updated
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/dns/zones/{zoneId}/recordset/acombined/managed/ingress`

**Zusammenfassung:** set a-records managed by ingress for a specific zone

This operation is deprecated. Use the POST v2/dns-zones/{dnsZoneId}/record-sets/{recordSet}/actions/set-managed endpoint instead.

**Operation ID:** `deprecated-dns-record-a-set-managed-by-ingress`

**Tags:** Domain

**Parameter:**

- `zoneId` (path) **(erforderlich)**
  - the id of the zone you want to set managed
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**

**Responses:**

- **204**
  - zone set managed by ingressId

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `ingressId` (erforderlich): string (uuid)
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/dns/zones/{zoneId}/recordset/cname`

**Zusammenfassung:** updates cname-record for a specific zone

This operation is deprecated. Use the PUT v2/dns-zones/{dnsZoneId}/record-sets/{recordSet} endpoint instead.

**Operation ID:** `deprecated-dns-record-cname-set`

**Tags:** Domain

**Parameter:**

- `zoneId` (path) **(erforderlich)**
  - the id of the zone the record belongs to
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **204**
  - recordset updated
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/dns/zones/{zoneId}/recordset/mx/custom`

**Zusammenfassung:** updates mx-records for a specific zone

This operation is deprecated. Use the PUT v2/dns-zones/{dnsZoneId}/record-sets/{recordSet} endpoint instead.

**Operation ID:** `deprecated-dns-record-mx-set-custom`

**Tags:** Domain

**Parameter:**

- `zoneId` (path) **(erforderlich)**
  - the id of the zone the record belongs to
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **204**
  - recordset updated
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/dns/zones/{zoneId}/recordset/mx/managed`

**Zusammenfassung:** sets mx-records to managed for a specific zone

This operation is deprecated. Use the POST v2/dns-zones/{dnsZoneId}/record-sets/{recordSet}/actions/set-managed endpoint instead.

**Operation ID:** `deprecated-dns-record-mx-set-managed`

**Tags:** Domain

**Parameter:**

- `zoneId` (path) **(erforderlich)**
  - the id of the zone the record belongs to
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object

**Responses:**

- **204**
  - recordset updated
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/dns/zones/{zoneId}/recordset/srv`

**Zusammenfassung:** updates srv-records for a specific zone

This operation is deprecated. Use the PUT v2/dns-zones/{dnsZoneId}/record-sets/{recordSet} endpoint instead.

**Operation ID:** `deprecated-dns-record-srv-set`

**Tags:** Domain

**Parameter:**

- `zoneId` (path) **(erforderlich)**
  - the id of the zone the record belongs to
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **204**
  - recordset updated
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/dns/zones/{zoneId}/recordset/txt`

**Zusammenfassung:** updates txt-records for a specific zone

This operation is deprecated. Use the PUT v2/dns-zones/{dnsZoneId}/record-sets/{recordSet} endpoint instead.

**Operation ID:** `deprecated-dns-record-txt-set`

**Tags:** Domain

**Parameter:**

- `zoneId` (path) **(erforderlich)**
  - the id of the zone the record belongs to
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **204**
  - recordset updated
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/domain-registrable`

**Zusammenfassung:** Check if a Domain is available to register.

If false, you have to start a transfer with an auth code instead.

**Operation ID:** `domain-check-domain-registrability`

**Tags:** Domain

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `isPremium` (erforderlich): boolean
    - `registrable` (erforderlich): boolean
- **400**
- **429**
- **default**

**Security:**


---

#### `GET /v2/domain-suggestions`

**Zusammenfassung:** Suggest a list of domains based on a prompt using AI.

**Operation ID:** `domain-suggest`

**Tags:** Domain

**Parameter:**

- `prompt` (query) **(erforderlich)**
  - Schema: string
- `domainCount` (query) (optional)
  - Schema: integer (Standard: `6`)
- `tlds` (query) (optional)
  - Schema: Array<string>

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.domain.SuggestedDomains` (siehe Schema-Definition)
- **400**
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/domain-tlds`

**Zusammenfassung:** List TLDs.

List the top level domains currently supported by our API.

**Operation ID:** `domain-list-tlds`

**Tags:** Domain

**Responses:**

- **200**

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.domain.TopLevel` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.domain.TopLevel` (siehe Schema-Definition)
- **429**
- **default**

**Security:**


---

#### `GET /v2/domain-tlds/{tld}/contact-schemas`

**Zusammenfassung:** List the contact schemas for a TLD.

List the contact schemas describing the fields required to register/transfer a Domain.

**Operation ID:** `domain-list-tld-contact-schemas`

**Tags:** Domain

**Parameter:**

- `tld` (path) **(erforderlich)**
  - The top level domain to retrieve the schemas for.
  - Schema: string

**Responses:**

- **200**
  - The JSON-Schema objects.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `jsonSchemaAdminC`: Object
    - `jsonSchemaOwnerC` (erforderlich): Object
- **429**
- **default**

**Security:**


---

#### `POST /v2/domain-transferable`

**Zusammenfassung:** Check if a Domain is available to transfer.

For some TLDs (e.g., .de), transferability cannot be evaluated. In these cases, transferable = true is returned.

**Operation ID:** `domain-check-domain-transferability`

**Tags:** Domain

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **200**
- **400**
- **429**
- **default**

**Security:**


---

#### `GET /v2/domains`

**Zusammenfassung:** List Domains

**Operation ID:** `domain-list-domains`

**Tags:** Domain

**Parameter:**

- `projectId` (query) (optional)
  - Schema: string
- `page` (query) (optional)
  - Schema: integer
- `limit` (query) (optional)
  - Schema: integer
- `domainSearchName` (query) (optional)
  - Search for domain names in this list. Input will be handled like '%YourInput%'.
  - Schema: string
- `contactHash` (query) (optional)
  - Search for domain contact hash.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.domain.Domain` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.domain.Domain` (siehe Schema-Definition)
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/domains`

**Zusammenfassung:** Check if a Domain is available to register.

This operation is deprecated. Use the POST /v2/domain-registrable endpoint instead.

**Operation ID:** `deprecated-domain-check-domain-registrability`

**Tags:** Domain

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `available` (erforderlich): boolean
- **400**
- **429**
- **default**

**Security:**


---

#### `GET /v2/domains`

**Zusammenfassung:** List Domains

**Operation ID:** `domain-list-domains`

**Tags:** Domain

**Parameter:**

- `projectId` (query) (optional)
  - Schema: string
- `page` (query) (optional)
  - Schema: integer
- `limit` (query) (optional)
  - Schema: integer
- `domainSearchName` (query) (optional)
  - Search for domain names in this list. Input will be handled like '%YourInput%'.
  - Schema: string
- `contactHash` (query) (optional)
  - Search for domain contact hash.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.domain.Domain` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.domain.Domain` (siehe Schema-Definition)
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/domains`

**Zusammenfassung:** Check if a Domain is available to register.

This operation is deprecated. Use the POST /v2/domain-registrable endpoint instead.

**Operation ID:** `deprecated-domain-check-domain-registrability`

**Tags:** Domain

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `available` (erforderlich): boolean
- **400**
- **429**
- **default**

**Security:**


---

#### `GET /v2/domains/handle-schema/{domainName}`

**Zusammenfassung:** Get a HandleSchema.

This operation is deprecated. Use the GET /v2/domain-tlds/{tld}/contact-schemas endpoint instead.

**Operation ID:** `deprecated-domain-get-handle-fields`

**Tags:** Domain

**Parameter:**

- `domainName` (path) **(erforderlich)**
  - The whole domain name
  - Schema: string (naked-domain)

**Responses:**

- **200**
  - The parseable json schema objects

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `jsonSchemaAdminC`: Object
    - `jsonSchemaOwnerC` (erforderlich): Object
- **429**
- **default**

**Security:**


---

#### `GET /v2/domains/latest-screenshot`

**Zusammenfassung:** Get the latest screenshot's FileReference belonging to a Domain.

**Operation ID:** `domain-get-latest-screenshot`

**Tags:** Domain

**Parameter:**

- `domainName` (query) **(erforderlich)**
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `reference`: string
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/domains/supported-tlds`

**Zusammenfassung:** List TLDs.

This route is deprecated. Please use /v2/domain-tlds instead.

**Tags:** Domain

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**


---

#### `GET /v2/domains/{domainId}`

**Zusammenfassung:** Get a Domain.

**Operation ID:** `domain-get-domain`

**Tags:** Domain

**Parameter:**

- `domainId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.domain.Domain` (siehe Schema-Definition)
- **400**
- **403**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/domains/{domainId}`

**Zusammenfassung:** Delete a Domain.

**Operation ID:** `domain-delete-domain`

**Tags:** Domain

**Parameter:**

- `domainId` (path) **(erforderlich)**
  - Schema: string
- `transit` (query) (optional)
  - Only for .de Domains
  - Schema: boolean

**Responses:**

- **200**
- **400**
- **404**
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/domains/{domainId}`

**Zusammenfassung:** Get a Domain.

**Operation ID:** `domain-get-domain`

**Tags:** Domain

**Parameter:**

- `domainId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.domain.Domain` (siehe Schema-Definition)
- **400**
- **403**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/domains/{domainId}`

**Zusammenfassung:** Delete a Domain.

**Operation ID:** `domain-delete-domain`

**Tags:** Domain

**Parameter:**

- `domainId` (path) **(erforderlich)**
  - Schema: string
- `transit` (query) (optional)
  - Only for .de Domains
  - Schema: boolean

**Responses:**

- **200**
- **400**
- **404**
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/domains/{domainId}/actions/auth-code`

**Zusammenfassung:** Create an auth code for a Domains transfer-out process.

**Operation ID:** `domain-create-domain-auth-code`

**Tags:** Domain

**Parameter:**

- `domainId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **201**
  - Created

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `authCode` (erforderlich): string
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/domains/{domainId}/actions/create-authcode`

**Zusammenfassung:** Create an auth code for a Domains transfer-out process.

This route is deprecated. Please use /v2/domains/{domainId}/actions/auth-code instead.

**Tags:** Domain

**Parameter:**

- `domainId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/domains/{domainId}/actions/resend-email`

**Zusammenfassung:** Resend a Domain email.

Trigger a resend of a confirmation or registrant verification email. Has no effect on .de Domains.

**Operation ID:** `domain-resend-domain-email`

**Tags:** Domain

**Parameter:**

- `domainId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **204**
  - No Content
- **400**
- **404**
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/domains/{domainId}/auth-code`

**Zusammenfassung:** Update the auth code of a Domain.

Update an incorrect auth code of an ongoing/failed Domain transfer. This route will also restart the transfer itself.

**Operation ID:** `domain-update-domain-auth-code`

**Tags:** Domain

**Parameter:**

- `domainId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **200**
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/domains/{domainId}/authcode`

**Zusammenfassung:** Update the auth code of a Domain.

This route is deprecated. Please use /v2/domains/{domainId}/auth-code instead.

**Tags:** Domain

**Parameter:**

- `domainId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/domains/{domainId}/contacts/{contact}`

**Zusammenfassung:** Update a contact of a Domain.

**Operation ID:** `domain-update-domain-contact`

**Tags:** Domain

**Parameter:**

- `domainId` (path) **(erforderlich)**
  - Schema: string
- `contact` (path) **(erforderlich)**
  - Schema: string - Enum: `owner`

**Request Body:**

Request Body **(erforderlich)**

The new contact data of the Domain.

**Content-Type:** `application/json`

**Responses:**

- **200**
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/domains/{domainId}/declaration`

**Zusammenfassung:** Abort a Domain declaration.

Abort an incomplete Domain registration/transfer.

**Operation ID:** `domain-abort-domain-declaration`

**Tags:** Domain

**Parameter:**

- `domainId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **204**
  - No Content
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/domains/{domainId}/declarations`

**Zusammenfassung:** Abort a Domain declaration.

This route is deprecated. Please use /v2/domains/{domainId}/declaration instead.

**Tags:** Domain

**Parameter:**

- `domainId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/domains/{domainId}/declarations/authcode`

**Zusammenfassung:** Update an AuthCode.

This operation is deprecated. Use the PATCH /v2/domains/{domainId}/auth-code endpoint instead.

**Operation ID:** `deprecated-domain-declare-process-change-authcode`

**Tags:** Domain

**Parameter:**

- `domainId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

The new handle fields for the new owner.

**Content-Type:** `application/json`

**Responses:**

- **200**
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/domains/{domainId}/declarations/handles`

**Zusammenfassung:** Update a Domain's OwnerC handle.

This operation is deprecated and does not have an alternative.

**Operation ID:** `deprecated-domain-declare-process-change-handles`

**Tags:** Domain

**Parameter:**

- `domainId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

The new handle fields for the new owner.

**Content-Type:** `application/json`

**Responses:**

- **200**
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/domains/{domainId}/handles/ownerc`

**Zusammenfassung:** Change the owner contact of a domain.

This operation is deprecated. Use the PATCH /v2/domains/{domainId}/contacts/{contact} endpoint instead.

**Operation ID:** `deprecated-domain-change-ownerc-of-domain`

**Tags:** Domain

**Parameter:**

- `domainId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

The new handle fields for the new owner.

**Content-Type:** `application/json`

**Responses:**

- **200**
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/domains/{domainId}/nameservers`

**Zusammenfassung:** Change all nameservers of a Domain.

This operation is deprecated. Use the PATCH /v2/domains/{domainId}/nameservers endpoint instead.

**Operation ID:** `deprecated-domain-declare-nameservers`

**Tags:** Domain

**Parameter:**

- `domainId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **204**
  - No Content
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/domains/{domainId}/nameservers`

**Zusammenfassung:** Update the nameservers of a Domain.

**Operation ID:** `domain-update-domain-nameservers`

**Tags:** Domain

**Parameter:**

- `domainId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **204**
  - No Content
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/domains/{domainId}/nameservers`

**Zusammenfassung:** Change all nameservers of a Domain.

This operation is deprecated. Use the PATCH /v2/domains/{domainId}/nameservers endpoint instead.

**Operation ID:** `deprecated-domain-declare-nameservers`

**Tags:** Domain

**Parameter:**

- `domainId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **204**
  - No Content
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/domains/{domainId}/nameservers`

**Zusammenfassung:** Update the nameservers of a Domain.

**Operation ID:** `domain-update-domain-nameservers`

**Tags:** Domain

**Parameter:**

- `domainId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **204**
  - No Content
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/domains/{domainId}/project-id`

**Zusammenfassung:** Update a Domain's project id.

**Operation ID:** `domain-update-domain-project-id`

**Tags:** Domain

**Parameter:**

- `domainId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **204**
  - No Content
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/domains/{domainId}/projectId`

**Zusammenfassung:** Change the Project relation of a Domain.

This operation is deprecated. Use the PATCH /v2/domains/{domainId}/project-id endpoint instead.

**Operation ID:** `deprecated-domain-change-project-of-domain`

**Tags:** Domain

**Parameter:**

- `domainId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **204**
  - No Content
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/domains/{domainId}/scheduled-deletion`

**Zusammenfassung:** Create a scheduled deletion of a Domain.

**Operation ID:** `domain-create-scheduled-deletion`

**Tags:** Domain

**Parameter:**

- `domainId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **204**
  - No Content
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/domains/{domainId}/scheduled-deletion`

**Zusammenfassung:** Cancel a scheduled deletion of a Domain.

**Operation ID:** `domain-cancel-scheduled-deletion`

**Tags:** Domain

**Parameter:**

- `domainId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **204**
  - No Content
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/domains/{domainId}/scheduled-deletion`

**Zusammenfassung:** Create a scheduled deletion of a Domain.

**Operation ID:** `domain-create-scheduled-deletion`

**Tags:** Domain

**Parameter:**

- `domainId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **204**
  - No Content
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/domains/{domainId}/scheduled-deletion`

**Zusammenfassung:** Cancel a scheduled deletion of a Domain.

**Operation ID:** `domain-cancel-scheduled-deletion`

**Tags:** Domain

**Parameter:**

- `domainId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **204**
  - No Content
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/domains/{domainId}/screenshots/newest`

**Zusammenfassung:** Get File Service Reference for a Screenshot of a domain.

Deprecated by `GET /v2/domains/{domainId}/latest-screenshot`.

**Operation ID:** `deprecated-domain-get-screenshot-for-domain`

**Tags:** Domain

**Parameter:**

- `domainId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `domainName` (erforderlich): string
  - `path` (erforderlich): string

**Responses:**

- **200**
  - The References.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `references`: Array<string>
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/ingresses`

**Zusammenfassung:** List Ingresses.

**Operation ID:** `ingress-list-ingresses`

**Tags:** Domain

**Parameter:**

- `projectId` (query) (optional)
  - ID of the Project to list Ingresses for.
  - Schema: string
- `certificateId` (query) (optional)
  - ID of the Certificate to list Ingresses for.
  - Schema: string (uuid)
- `hostnameSubstring` (query) (optional)
  - Substring of the hostnames to be retrieved.
  - Schema: string
- `appInstallationId` (query) (optional)
  - ID of the AppInstallation to list Ingresses for.
  - Schema: string
- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer (Standard: `10000`)
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.ingress.Ingress` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.ingress.Ingress` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/ingresses`

**Zusammenfassung:** Create an Ingress.

**Operation ID:** `ingress-create-ingress`

**Tags:** Domain

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `hostname` (erforderlich): string (idn-hostname)
  - `paths` (erforderlich): Array<`de.mittwald.v1.ingress.Path` (siehe Schema-Definition)>
  - `projectId` (erforderlich): string (uuid)

**Responses:**

- **201**
  - Created

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `id` (erforderlich): string (uuid)
    - `ownership` (erforderlich): `de.mittwald.v1.ingress.Ownership` (siehe Schema-Definition)
- **404**
- **409**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/ingresses`

**Zusammenfassung:** List Ingresses.

**Operation ID:** `ingress-list-ingresses`

**Tags:** Domain

**Parameter:**

- `projectId` (query) (optional)
  - ID of the Project to list Ingresses for.
  - Schema: string
- `certificateId` (query) (optional)
  - ID of the Certificate to list Ingresses for.
  - Schema: string (uuid)
- `hostnameSubstring` (query) (optional)
  - Substring of the hostnames to be retrieved.
  - Schema: string
- `appInstallationId` (query) (optional)
  - ID of the AppInstallation to list Ingresses for.
  - Schema: string
- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer (Standard: `10000`)
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.ingress.Ingress` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.ingress.Ingress` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/ingresses`

**Zusammenfassung:** Create an Ingress.

**Operation ID:** `ingress-create-ingress`

**Tags:** Domain

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `hostname` (erforderlich): string (idn-hostname)
  - `paths` (erforderlich): Array<`de.mittwald.v1.ingress.Path` (siehe Schema-Definition)>
  - `projectId` (erforderlich): string (uuid)

**Responses:**

- **201**
  - Created

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `id` (erforderlich): string (uuid)
    - `ownership` (erforderlich): `de.mittwald.v1.ingress.Ownership` (siehe Schema-Definition)
- **404**
- **409**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/ingresses/{ingressId}`

**Zusammenfassung:** Get an Ingress.

**Operation ID:** `ingress-get-ingress`

**Tags:** Domain

**Parameter:**

- `ingressId` (path) **(erforderlich)**
  - ID of the Ingress to be retrieved.
  - Schema: string (uuid)

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.ingress.Ingress` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/ingresses/{ingressId}`

**Zusammenfassung:** Delete an Ingress.

**Operation ID:** `ingress-delete-ingress`

**Tags:** Domain

**Parameter:**

- `ingressId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **204**
  - No Content
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/ingresses/{ingressId}`

**Zusammenfassung:** Get an Ingress.

**Operation ID:** `ingress-get-ingress`

**Tags:** Domain

**Parameter:**

- `ingressId` (path) **(erforderlich)**
  - ID of the Ingress to be retrieved.
  - Schema: string (uuid)

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.ingress.Ingress` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/ingresses/{ingressId}`

**Zusammenfassung:** Delete an Ingress.

**Operation ID:** `ingress-delete-ingress`

**Tags:** Domain

**Parameter:**

- `ingressId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **204**
  - No Content
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/ingresses/{ingressId}/actions/request-acme-certificate-issuance`

**Zusammenfassung:** Request the ACME certificate issuance of an Ingress.

**Operation ID:** `ingress-request-ingress-acme-certificate-issuance`

**Tags:** Domain

**Parameter:**

- `ingressId` (path) **(erforderlich)**
  - UUID of the Ingress to request the issuance for.
  - Schema: string (uuid)

**Responses:**

- **204**
  - No Content
- **400**
- **404**
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/ingresses/{ingressId}/actions/verify-ownership`

**Zusammenfassung:** Verifiy the ownership of an Ingress.

**Operation ID:** `ingress-ingress-verify-ownership`

**Tags:** Domain

**Parameter:**

- `ingressId` (path) **(erforderlich)**
  - UUID of the Ingress to verify the ownership for.
  - Schema: string (uuid)

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Object
- **400**
- **404**
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/ingresses/{ingressId}/paths`

**Zusammenfassung:** Update an Ingresses paths.

This operation is deprecated. Use the PATCH /v2/ingresses/{ingressId}/paths endpoint instead.

**Operation ID:** `deprecated-ingress-paths`

**Tags:** Domain

**Parameter:**

- `ingressId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Array<`de.mittwald.v1.ingress.Path` (siehe Schema-Definition)>
  **Array Items:** `de.mittwald.v1.ingress.Path` (siehe Schema-Definition)

**Responses:**

- **204**
  - No Content
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/ingresses/{ingressId}/paths`

**Zusammenfassung:** Update the paths of an Ingress.

**Operation ID:** `ingress-update-ingress-paths`

**Tags:** Domain

**Parameter:**

- `ingressId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Array<`de.mittwald.v1.ingress.Path` (siehe Schema-Definition)>
  **Array Items:** `de.mittwald.v1.ingress.Path` (siehe Schema-Definition)

**Responses:**

- **204**
  - No Content
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/ingresses/{ingressId}/paths`

**Zusammenfassung:** Update an Ingresses paths.

This operation is deprecated. Use the PATCH /v2/ingresses/{ingressId}/paths endpoint instead.

**Operation ID:** `deprecated-ingress-paths`

**Tags:** Domain

**Parameter:**

- `ingressId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Array<`de.mittwald.v1.ingress.Path` (siehe Schema-Definition)>
  **Array Items:** `de.mittwald.v1.ingress.Path` (siehe Schema-Definition)

**Responses:**

- **204**
  - No Content
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/ingresses/{ingressId}/paths`

**Zusammenfassung:** Update the paths of an Ingress.

**Operation ID:** `ingress-update-ingress-paths`

**Tags:** Domain

**Parameter:**

- `ingressId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Array<`de.mittwald.v1.ingress.Path` (siehe Schema-Definition)>
  **Array Items:** `de.mittwald.v1.ingress.Path` (siehe Schema-Definition)

**Responses:**

- **204**
  - No Content
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/ingresses/{ingressId}/tls`

**Zusammenfassung:** Update an Ingresses tls settings.

This operation is deprecated. Use the PATCH /v2/ingresses/{ingressId}/tls endpoint instead.

**Operation ID:** `deprecated-ingress-tls`

**Tags:** Domain

**Parameter:**

- `ingressId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Object
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/ingresses/{ingressId}/tls`

**Zusammenfassung:** Update the tls settings of an Ingress.

**Operation ID:** `ingress-update-ingress-tls`

**Tags:** Domain

**Parameter:**

- `ingressId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Object
- **403**
- **404**
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/ingresses/{ingressId}/tls`

**Zusammenfassung:** Update an Ingresses tls settings.

This operation is deprecated. Use the PATCH /v2/ingresses/{ingressId}/tls endpoint instead.

**Operation ID:** `deprecated-ingress-tls`

**Tags:** Domain

**Parameter:**

- `ingressId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Object
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/ingresses/{ingressId}/tls`

**Zusammenfassung:** Update the tls settings of an Ingress.

**Operation ID:** `ingress-update-ingress-tls`

**Tags:** Domain

**Parameter:**

- `ingressId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Object
- **403**
- **404**
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}/dns-zones`

**Zusammenfassung:** List DNSZones belonging to a Project.

**Operation ID:** `dns-list-dns-zones`

**Tags:** Domain

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to list DNSZones for.
  - Schema: string

**Responses:**

- **200**
  - An array of DNSZone objects.

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.dns.Zone` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.dns.Zone` (siehe Schema-Definition)
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}/dns/zones`

**Zusammenfassung:** List DNSZones belonging to a Project.

This route is deprecated. Please use /v2/projects/{projectId}/dns-zones instead.

**Tags:** Domain

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to list DNSZones for.
  - Schema: string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}/domains`

**Zusammenfassung:** List Domains belonging to a Project.

This operation is deprecated. Use the GET /v2/domains endpoint instead.

**Operation ID:** `deprecated-domain-list-domains`

**Tags:** Domain

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - Schema: string
- `page` (query) (optional)
  - Schema: integer
- `limit` (query) (optional)
  - Schema: integer
- `domainSearchName` (query) (optional)
  - Search for domain names in these list. Input will be handled like '%YourInput%'
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.domain.Domain` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.domain.Domain` (siehe Schema-Definition)
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}/ingresses`

**Zusammenfassung:** List Ingresses belonging to a project.

This operation is deprecated. Use the GET /v2/ingresses endpoint instead.

**Operation ID:** `deprecated-ingress-list-ingresses`

**Tags:** Domain

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to list Ingresses for
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.ingress.IngressDeprecated` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.ingress.IngressDeprecated` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---


### File

#### `GET /v2/file-token-rules/{token}`

**Zusammenfassung:** Get a Token's upload rules.

Deprecated by `GET /v2/file-upload-tokens/{fileUploadToken}/rules`.

**Operation ID:** `deprecated-file-get-file-token-rules`

**Tags:** File

**Parameter:**

- `token` (path) **(erforderlich)**
  - Token of the Token's upload rules to be retrieved.
  - Schema: string (uuid)

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.file.FileUploadRules` (siehe Schema-Definition)
- **404**
- **429**
- **500**
- **default**

---

#### `GET /v2/file-type-rules/{name}`

**Zusammenfassung:** Get a Type's upload rules.

Deprecated by `GET /v2/file-upload-types/{fileUploadType}/rules`.

**Operation ID:** `deprecated-file-get-file-type-rules`

**Tags:** File

**Parameter:**

- `name` (path) **(erforderlich)**
  - Name of the Type's upload rules to be retrieved.
  - Schema: string - Enum: `avatar`, `conversation`

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.file.FileUploadRules` (siehe Schema-Definition)
- **404**
- **429**
- **500**
- **default**

---

#### `GET /v2/file-upload-tokens/{fileUploadToken}/rules`

**Zusammenfassung:** Get a FileUploadToken's rules.

**Operation ID:** `file-get-file-upload-token-rules`

**Tags:** File

**Parameter:**

- `fileUploadToken` (path) **(erforderlich)**
  - FileUploadToken to retrieve rules for.
  - Schema: string (uuid)

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.file.FileUploadRules` (siehe Schema-Definition)
- **400**
- **404**
- **429**
- **500**
- **default**

---

#### `GET /v2/file-upload-types/{fileUploadType}/rules`

**Zusammenfassung:** Get a FileUploadType's rules.

**Operation ID:** `file-get-file-upload-type-rules`

**Tags:** File

**Parameter:**

- `fileUploadType` (path) **(erforderlich)**
  - FileUploadType to retrieve rules for.
  - Schema: string - Enum: `avatar`, `extensionAssetImage`, `extensionAssetVideo`, `anchorIcon`, `conversation`

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.file.FileUploadRules` (siehe Schema-Definition)
- **400**
- **404**
- **500**
- **default**

**Security:**


---

#### `POST /v2/files`

**Zusammenfassung:** Create a File.

**Operation ID:** `file-create-file`

**Tags:** File

**Parameter:**

- `Token` (header) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `multipart/form-data`
**Schema:** Object
  **Properties:**
  - `file` (erforderlich): string (binary)

**Responses:**

- **201**
  - Created

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.file.FileMeta` (siehe Schema-Definition)
- **400**
- **401**
- **406**
- **422**
- **429**
- **500**
- **default**

---

#### `GET /v2/files/{fileId}`

**Zusammenfassung:** Get a File.

**Operation ID:** `file-get-file`

**Tags:** File

**Parameter:**

- `fileId` (path) **(erforderlich)**
  - ID of the File to be retrieved.
  - Schema: string
- `Accept` (header) (optional)
  - Schema: string - Enum: `application/octet-stream`, `text/plain;base64` (Standard: `application/octet-stream`)
- `Content-Disposition` (header) (optional)
  - Schema: string - Enum: `inline`, `attachment` (Standard: `inline`)
- `Token` (header) (optional)
  - Only needed for protected Files.
  - Schema: string
- `accept` (query) (optional)
  - Schema: string - Enum: `application/octet-stream`, `text/plain;base64` (Standard: `application/octet-stream`)
- `content-disposition` (query) (optional)
  - Schema: string - Enum: `inline`, `attachment` (Standard: `inline`)
- `token` (query) (optional)
  - Only needed for protected Files.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/octet-stream`
    - Schema: string (binary)
  - **Content-Type:** `text/plain;base64`
    - Schema: string
- **400**
- **401**
- **403**
- **404**
- **422**
- **429**
- **500**
- **default**

---

#### `GET /v2/files/{fileId}/meta`

**Zusammenfassung:** Get a File's meta.

**Operation ID:** `file-get-file-meta`

**Tags:** File

**Parameter:**

- `fileId` (path) **(erforderlich)**
  - ID of the File to get the meta for.
  - Schema: string
- `Token` (header) (optional)
  - Only needed for protected Files.
  - Schema: string
- `token` (query) (optional)
  - Only needed for protected Files.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.file.FileMeta` (siehe Schema-Definition)
- **400**
- **401**
- **403**
- **404**
- **422**
- **429**
- **500**
- **default**

---

#### `GET /v2/files/{fileId}/{fileName}`

**Zusammenfassung:** Get a File with user-friendly url.

**Operation ID:** `file-get-file-with-name`

**Tags:** File

**Parameter:**

- `fileId` (path) **(erforderlich)**
  - ID of the File to be retrieved.
  - Schema: string
- `fileName` (path) **(erforderlich)**
  - Name of the File to be retrieved.
  - Schema: string
- `Accept` (header) (optional)
  - Schema: string - Enum: `application/octet-stream`, `text/plain;base64` (Standard: `application/octet-stream`)
- `Content-Disposition` (header) (optional)
  - Schema: string - Enum: `inline`, `attachment` (Standard: `inline`)
- `Token` (header) (optional)
  - Only needed for protected Files.
  - Schema: string
- `accept` (query) (optional)
  - Schema: string - Enum: `application/octet-stream`, `text/plain;base64` (Standard: `application/octet-stream`)
- `content-disposition` (query) (optional)
  - Schema: string - Enum: `inline`, `attachment` (Standard: `inline`)
- `token` (query) (optional)
  - Only needed for protected Files.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/octet-stream`
    - Schema: string
  - **Content-Type:** `text/plain;base64`
    - Schema: string
- **400**
- **401**
- **403**
- **404**
- **422**
- **429**
- **500**
- **default**

---


### LeadFyndr

#### `GET /experimental-v2/cities`

**Zusammenfassung:** Get cities in DACH.

This route is deprecated. Please use /v2/cities instead.

**Tags:** LeadFyndr

**Parameter:**

- `input` (query) **(erforderlich)**
  - Schema: string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

---

#### `GET /experimental-v2/customers/{customerId}/lead-fyndr-profile`

**Zusammenfassung:** Get your LeadFyndr profile.

This route is deprecated. Please use /v2/customers/{customerId}/lead-fyndr-profile instead.

**Tags:** LeadFyndr

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

---

#### `GET /experimental-v2/customers/{customerId}/lead-fyndr-profile-request`

**Zusammenfassung:** Get your LeadFyndr request.

This route is deprecated. Please use /v2/customers/{customerId}/lead-fyndr-profile-request instead.

**Tags:** LeadFyndr

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

---

#### `POST /experimental-v2/customers/{customerId}/lead-fyndr-profile-request`

**Zusammenfassung:** Create a new access request for LeadFyndr.

This route is deprecated. Please use /v2/customers/{customerId}/lead-fyndr-profile-request instead.

**Tags:** LeadFyndr

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**



**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `domain` (erforderlich): string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

---

#### `GET /experimental-v2/customers/{customerId}/lead-fyndr-profile-request`

**Zusammenfassung:** Get your LeadFyndr request.

This route is deprecated. Please use /v2/customers/{customerId}/lead-fyndr-profile-request instead.

**Tags:** LeadFyndr

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

---

#### `POST /experimental-v2/customers/{customerId}/lead-fyndr-profile-request`

**Zusammenfassung:** Create a new access request for LeadFyndr.

This route is deprecated. Please use /v2/customers/{customerId}/lead-fyndr-profile-request instead.

**Tags:** LeadFyndr

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**



**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `domain` (erforderlich): string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

---

#### `GET /experimental-v2/customers/{customerId}/lead-fyndr-profile/tariff`

**Zusammenfassung:** Get lead tariff options. How many leads did you unlock this month?

This route is deprecated. Please use /v2/customers/{customerId}/lead-fyndr-profile/tariff instead.

**Tags:** LeadFyndr

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

---

#### `GET /experimental-v2/customers/{customerId}/leads`

**Zusammenfassung:** Get all leads. Use the unlocked routes for more lead details.

This route is deprecated. Please use /v2/customers/{customerId}/leads instead.

**Tags:** LeadFyndr

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string
- `potentialRangeMin` (query) (optional)
  - Min inclusive value of potential.

  - Schema: number (float)
- `potentialRangeMax` (query) (optional)
  - Max inclusive value of potential.

  - Schema: number (float)
- `employeeCountMin` (query) (optional)
  - Min inclusive value of employeeCount.

  - Schema: integer (int64)
- `employeeCountMax` (query) (optional)
  - Max inclusive value of employeeCount.

  - Schema: integer (int64)
- `salesVolumeMin` (query) (optional)
  - Min inclusive value of salesVolume.

  - Schema: integer (int64)
- `salesVolumeMax` (query) (optional)
  - Max inclusive value of salesVolume.

  - Schema: integer (int64)
- `technologies` (query) (optional)
  - A list of technologies to filter. Use "none" to filter leads without a main technology.

  - Schema: Array<>
- `businessFields` (query) (optional)
  - A list of businessFields to filter.

  - Schema: Array<string>
- `locationCity` (query) (optional)
  - City of location point.

  - Schema: string
- `locationPostCode` (query) (optional)
  - Post code of location point.

  - Schema: string
- `locationRadiusInKm` (query) (optional)
  - Radius from the location point.

  - Schema: number
- `basic:timeToFirstByteMs:min` (query) (optional)
  - Min inclusive value of timeToFirstByteMs.

  - Schema: number
- `basic:timeToFirstByteMs:max` (query) (optional)
  - Max inclusive value of timeToFirstByteMs.

  - Schema: number
- `basic:desktop:performance:min` (query) (optional)
  - Min inclusive value of desktop lighthouse metric performance.

  - Schema: number (float)
- `basic:desktop:performance:max` (query) (optional)
  - Max inclusive value of desktop lighthouse metric performance.

  - Schema: number (float)
- `basic:mobile:performance:min` (query) (optional)
  - Min inclusive value of mobile lighthouse metric performance.

  - Schema: number (float)
- `basic:mobile:performance:max` (query) (optional)
  - Max inclusive value of mobile lighthouse metric performance.

  - Schema: number (float)
- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer (Standard: `10`)
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer
- `sort` (query) (optional)
  - Sort the result by this field.
  - Schema: string - Enum: `potential`, `relevance` (Standard: `relevance`)
- `order` (query) (optional)
  - Should the result be sorted ascending or descending? Default ascending.
  - Schema: string - Enum: `asc`, `desc` (Standard: `desc`)

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

---

#### `GET /experimental-v2/customers/{customerId}/leads/{leadId}`

**Zusammenfassung:** Get a simple lead. Use the unlocked route for more detail leads.

This route is deprecated. Please use /v2/customers/{customerId}/leads/{leadId} instead.

**Tags:** LeadFyndr

**Parameter:**

- `leadId` (path) **(erforderlich)**
  - Schema: string
- `customerId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

---

#### `GET /experimental-v2/customers/{customerId}/unlocked-leads`

**Zusammenfassung:** Get all unlocked leads. Organisation can unlock leads.

This route is deprecated. Please use /v2/customers/{customerId}/unlocked-leads instead.

**Tags:** LeadFyndr

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string
- `potentialRangeMin` (query) (optional)
  - Min inclusive value of potential.

  - Schema: number (float)
- `potentialRangeMax` (query) (optional)
  - Max inclusive value of potential.

  - Schema: number (float)
- `employeeCountMin` (query) (optional)
  - Min inclusive value of employeeCount.

  - Schema: integer (int64)
- `employeeCountMax` (query) (optional)
  - Max inclusive value of employeeCount.

  - Schema: integer (int64)
- `salesVolumeMin` (query) (optional)
  - Min inclusive value of salesVolume.

  - Schema: integer (int64)
- `salesVolumeMax` (query) (optional)
  - Max inclusive value of salesVolume.

  - Schema: integer (int64)
- `technologies` (query) (optional)
  - A list of technologies to filter. Use "none" to filter leads without a main technology.

  - Schema: Array<>
- `businessFields` (query) (optional)
  - A list of businessFields to filter.

  - Schema: Array<string>
- `locationCity` (query) (optional)
  - City of location point.

  - Schema: string
- `locationPostCode` (query) (optional)
  - Post code of location point.

  - Schema: string
- `locationRadiusInKm` (query) (optional)
  - Radius from the location point.

  - Schema: number
- `basic:timeToFirstByteMs:min` (query) (optional)
  - Min inclusive value of timeToFirstByteMs.

  - Schema: number
- `basic:timeToFirstByteMs:max` (query) (optional)
  - Max inclusive value of timeToFirstByteMs.

  - Schema: number
- `basic:desktop:performance:min` (query) (optional)
  - Min inclusive value of desktop lighthouse metric performance.

  - Schema: number (float)
- `basic:desktop:performance:max` (query) (optional)
  - Max inclusive value of desktop lighthouse metric performance.

  - Schema: number (float)
- `basic:mobile:performance:min` (query) (optional)
  - Min inclusive value of mobile lighthouse metric performance.

  - Schema: number (float)
- `basic:mobile:performance:max` (query) (optional)
  - Max inclusive value of mobile lighthouse metric performance.

  - Schema: number (float)
- `reserved` (query) (optional)
  - Only for this customer reserved leads.

  - Schema: boolean
- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer (Standard: `10`)
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer
- `sort` (query) (optional)
  - Sort the result by this field.
  - Schema: string - Enum: `potential`, `relevance`, `company` (Standard: `relevance`)
- `order` (query) (optional)
  - Should the result be sorted ascending or descending? Default ascending.
  - Schema: string - Enum: `asc`, `desc` (Standard: `desc`)

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

---

#### `POST /experimental-v2/customers/{customerId}/unlocked-leads-export`

**Zusammenfassung:** Create an export of unlocked leads for the given customerId.

This route is deprecated. Please use /v2/customers/{customerId}/unlocked-leads-export instead.

**Tags:** LeadFyndr

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `exportAllLeads` (erforderlich): boolean
  - `fieldKeys` (erforderlich): Array<string - Enum: `domain`, `potential`, `performance`, `generalLook`, `companyName`, `emails`, `phoneNumbers`, `address`, `employeeCount`, `revenue`, `a-record`, `nameserver`, `mailserver`, `techStack`>

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

---

#### `GET /experimental-v2/customers/{customerId}/unlocked-leads-exports`

**Zusammenfassung:** Get unlocked leads export history for the given customerId.

This route is deprecated. Please use /v2/customers/{customerId}/unlocked-leads-exports instead.

**Tags:** LeadFyndr

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string
- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer
- `sort` (query) (optional)
  - Sort the result by this field.
  - Schema: string - Enum: `exportedAt` (Standard: `exportedAt`)
- `order` (query) (optional)
  - Should the result be sorted ascending or descending? Default ascending.
  - Schema: string - Enum: `asc`, `desc` (Standard: `desc`)

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

---

#### `GET /experimental-v2/customers/{customerId}/unlocked-leads/{leadId}`

**Zusammenfassung:** Get a detail of a unlocked lead. Organisation can unlock leads.

This route is deprecated. Please use /v2/customers/{customerId}/unlocked-leads/{leadId} instead.

**Tags:** LeadFyndr

**Parameter:**

- `leadId` (path) **(erforderlich)**
  - Schema: string
- `customerId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

---

#### `POST /experimental-v2/customers/{customerId}/unlocked-leads/{leadId}`

**Zusammenfassung:** Unlock a lead for the given customerId.

This route is deprecated. Please use /v2/customers/{customerId}/unlocked-leads/{leadId} instead.

**Tags:** LeadFyndr

**Parameter:**

- `leadId` (path) **(erforderlich)**
  - Schema: string
- `customerId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

---

#### `GET /experimental-v2/customers/{customerId}/unlocked-leads/{leadId}`

**Zusammenfassung:** Get a detail of a unlocked lead. Organisation can unlock leads.

This route is deprecated. Please use /v2/customers/{customerId}/unlocked-leads/{leadId} instead.

**Tags:** LeadFyndr

**Parameter:**

- `leadId` (path) **(erforderlich)**
  - Schema: string
- `customerId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

---

#### `POST /experimental-v2/customers/{customerId}/unlocked-leads/{leadId}`

**Zusammenfassung:** Unlock a lead for the given customerId.

This route is deprecated. Please use /v2/customers/{customerId}/unlocked-leads/{leadId} instead.

**Tags:** LeadFyndr

**Parameter:**

- `leadId` (path) **(erforderlich)**
  - Schema: string
- `customerId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

---

#### `POST /experimental-v2/customers/{customerId}/unlocked-leads/{leadId}/reservation`

**Zusammenfassung:** Reserve a unlocked lead for the given customerId.

This route is deprecated. Please use /v2/customers/{customerId}/unlocked-leads/{leadId}/reservation instead.

**Tags:** LeadFyndr

**Parameter:**

- `leadId` (path) **(erforderlich)**
  - Schema: string
- `customerId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

---

#### `DELETE /experimental-v2/customers/{customerId}/unlocked-leads/{leadId}/reservation`

**Zusammenfassung:** Removes a reservation on a unlocked lead for the given customerId.

This route is deprecated. Please use /v2/customers/{customerId}/unlocked-leads/{leadId}/reservation instead.

**Tags:** LeadFyndr

**Parameter:**

- `leadId` (path) **(erforderlich)**
  - Schema: string
- `customerId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

---

#### `POST /experimental-v2/customers/{customerId}/unlocked-leads/{leadId}/reservation`

**Zusammenfassung:** Reserve a unlocked lead for the given customerId.

This route is deprecated. Please use /v2/customers/{customerId}/unlocked-leads/{leadId}/reservation instead.

**Tags:** LeadFyndr

**Parameter:**

- `leadId` (path) **(erforderlich)**
  - Schema: string
- `customerId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

---

#### `DELETE /experimental-v2/customers/{customerId}/unlocked-leads/{leadId}/reservation`

**Zusammenfassung:** Removes a reservation on a unlocked lead for the given customerId.

This route is deprecated. Please use /v2/customers/{customerId}/unlocked-leads/{leadId}/reservation instead.

**Tags:** LeadFyndr

**Parameter:**

- `leadId` (path) **(erforderlich)**
  - Schema: string
- `customerId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

---

#### `GET /v2-experimental/cities`

**Zusammenfassung:** Get cities in DACH.

This route is deprecated. Please use /v2/cities instead.

**Tags:** LeadFyndr

**Parameter:**

- `input` (query) **(erforderlich)**
  - Schema: string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

---

#### `GET /v2-experimental/customers/{customerId}/lead-fyndr-profile`

**Zusammenfassung:** Get your LeadFyndr profile.

This route is deprecated. Please use /v2/customers/{customerId}/lead-fyndr-profile instead.

**Tags:** LeadFyndr

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

---

#### `GET /v2-experimental/customers/{customerId}/lead-fyndr-profile-request`

**Zusammenfassung:** Get your LeadFyndr request.

This route is deprecated. Please use /v2/customers/{customerId}/lead-fyndr-profile-request instead.

**Tags:** LeadFyndr

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

---

#### `POST /v2-experimental/customers/{customerId}/lead-fyndr-profile-request`

**Zusammenfassung:** Create a new access request for LeadFyndr.

This route is deprecated. Please use /v2/customers/{customerId}/lead-fyndr-profile-request instead.

**Tags:** LeadFyndr

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**



**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `domain` (erforderlich): string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

---

#### `GET /v2-experimental/customers/{customerId}/lead-fyndr-profile-request`

**Zusammenfassung:** Get your LeadFyndr request.

This route is deprecated. Please use /v2/customers/{customerId}/lead-fyndr-profile-request instead.

**Tags:** LeadFyndr

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

---

#### `POST /v2-experimental/customers/{customerId}/lead-fyndr-profile-request`

**Zusammenfassung:** Create a new access request for LeadFyndr.

This route is deprecated. Please use /v2/customers/{customerId}/lead-fyndr-profile-request instead.

**Tags:** LeadFyndr

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**



**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `domain` (erforderlich): string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

---

#### `GET /v2-experimental/customers/{customerId}/lead-fyndr-profile/tariff`

**Zusammenfassung:** Get lead tariff options. How many leads did you unlock this month?

This route is deprecated. Please use /v2/customers/{customerId}/lead-fyndr-profile/tariff instead.

**Tags:** LeadFyndr

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

---

#### `GET /v2-experimental/customers/{customerId}/leads`

**Zusammenfassung:** Get all leads. Use the unlocked routes for more lead details.

This route is deprecated. Please use /v2/customers/{customerId}/leads instead.

**Tags:** LeadFyndr

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string
- `potentialRangeMin` (query) (optional)
  - Min inclusive value of potential.

  - Schema: number (float)
- `potentialRangeMax` (query) (optional)
  - Max inclusive value of potential.

  - Schema: number (float)
- `employeeCountMin` (query) (optional)
  - Min inclusive value of employeeCount.

  - Schema: integer (int64)
- `employeeCountMax` (query) (optional)
  - Max inclusive value of employeeCount.

  - Schema: integer (int64)
- `salesVolumeMin` (query) (optional)
  - Min inclusive value of salesVolume.

  - Schema: integer (int64)
- `salesVolumeMax` (query) (optional)
  - Max inclusive value of salesVolume.

  - Schema: integer (int64)
- `technologies` (query) (optional)
  - A list of technologies to filter. Use "none" to filter leads without a main technology.

  - Schema: Array<>
- `businessFields` (query) (optional)
  - A list of businessFields to filter.

  - Schema: Array<string>
- `locationCity` (query) (optional)
  - City of location point.

  - Schema: string
- `locationPostCode` (query) (optional)
  - Post code of location point.

  - Schema: string
- `locationRadiusInKm` (query) (optional)
  - Radius from the location point.

  - Schema: number
- `basic:timeToFirstByteMs:min` (query) (optional)
  - Min inclusive value of timeToFirstByteMs.

  - Schema: number
- `basic:timeToFirstByteMs:max` (query) (optional)
  - Max inclusive value of timeToFirstByteMs.

  - Schema: number
- `basic:desktop:performance:min` (query) (optional)
  - Min inclusive value of desktop lighthouse metric performance.

  - Schema: number (float)
- `basic:desktop:performance:max` (query) (optional)
  - Max inclusive value of desktop lighthouse metric performance.

  - Schema: number (float)
- `basic:mobile:performance:min` (query) (optional)
  - Min inclusive value of mobile lighthouse metric performance.

  - Schema: number (float)
- `basic:mobile:performance:max` (query) (optional)
  - Max inclusive value of mobile lighthouse metric performance.

  - Schema: number (float)
- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer (Standard: `10`)
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer
- `sort` (query) (optional)
  - Sort the result by this field.
  - Schema: string - Enum: `potential`, `relevance` (Standard: `relevance`)
- `order` (query) (optional)
  - Should the result be sorted ascending or descending? Default ascending.
  - Schema: string - Enum: `asc`, `desc` (Standard: `desc`)

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

---

#### `GET /v2-experimental/customers/{customerId}/leads/{leadId}`

**Zusammenfassung:** Get a simple lead. Use the unlocked route for more detail leads.

This route is deprecated. Please use /v2/customers/{customerId}/leads/{leadId} instead.

**Tags:** LeadFyndr

**Parameter:**

- `leadId` (path) **(erforderlich)**
  - Schema: string
- `customerId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

---

#### `GET /v2-experimental/customers/{customerId}/unlocked-leads`

**Zusammenfassung:** Get all unlocked leads. Organisation can unlock leads.

This route is deprecated. Please use /v2/customers/{customerId}/unlocked-leads instead.

**Tags:** LeadFyndr

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string
- `potentialRangeMin` (query) (optional)
  - Min inclusive value of potential.

  - Schema: number (float)
- `potentialRangeMax` (query) (optional)
  - Max inclusive value of potential.

  - Schema: number (float)
- `employeeCountMin` (query) (optional)
  - Min inclusive value of employeeCount.

  - Schema: integer (int64)
- `employeeCountMax` (query) (optional)
  - Max inclusive value of employeeCount.

  - Schema: integer (int64)
- `salesVolumeMin` (query) (optional)
  - Min inclusive value of salesVolume.

  - Schema: integer (int64)
- `salesVolumeMax` (query) (optional)
  - Max inclusive value of salesVolume.

  - Schema: integer (int64)
- `technologies` (query) (optional)
  - A list of technologies to filter. Use "none" to filter leads without a main technology.

  - Schema: Array<>
- `businessFields` (query) (optional)
  - A list of businessFields to filter.

  - Schema: Array<string>
- `locationCity` (query) (optional)
  - City of location point.

  - Schema: string
- `locationPostCode` (query) (optional)
  - Post code of location point.

  - Schema: string
- `locationRadiusInKm` (query) (optional)
  - Radius from the location point.

  - Schema: number
- `basic:timeToFirstByteMs:min` (query) (optional)
  - Min inclusive value of timeToFirstByteMs.

  - Schema: number
- `basic:timeToFirstByteMs:max` (query) (optional)
  - Max inclusive value of timeToFirstByteMs.

  - Schema: number
- `basic:desktop:performance:min` (query) (optional)
  - Min inclusive value of desktop lighthouse metric performance.

  - Schema: number (float)
- `basic:desktop:performance:max` (query) (optional)
  - Max inclusive value of desktop lighthouse metric performance.

  - Schema: number (float)
- `basic:mobile:performance:min` (query) (optional)
  - Min inclusive value of mobile lighthouse metric performance.

  - Schema: number (float)
- `basic:mobile:performance:max` (query) (optional)
  - Max inclusive value of mobile lighthouse metric performance.

  - Schema: number (float)
- `reserved` (query) (optional)
  - Only for this customer reserved leads.

  - Schema: boolean
- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer (Standard: `10`)
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer
- `sort` (query) (optional)
  - Sort the result by this field.
  - Schema: string - Enum: `potential`, `relevance`, `company` (Standard: `relevance`)
- `order` (query) (optional)
  - Should the result be sorted ascending or descending? Default ascending.
  - Schema: string - Enum: `asc`, `desc` (Standard: `desc`)

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

---

#### `POST /v2-experimental/customers/{customerId}/unlocked-leads-export`

**Zusammenfassung:** Create an export of unlocked leads for the given customerId.

This route is deprecated. Please use /v2/customers/{customerId}/unlocked-leads-export instead.

**Tags:** LeadFyndr

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `exportAllLeads` (erforderlich): boolean
  - `fieldKeys` (erforderlich): Array<string - Enum: `domain`, `potential`, `performance`, `generalLook`, `companyName`, `emails`, `phoneNumbers`, `address`, `employeeCount`, `revenue`, `a-record`, `nameserver`, `mailserver`, `techStack`>

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

---

#### `GET /v2-experimental/customers/{customerId}/unlocked-leads-exports`

**Zusammenfassung:** Get unlocked leads export history for the given customerId.

This route is deprecated. Please use /v2/customers/{customerId}/unlocked-leads-exports instead.

**Tags:** LeadFyndr

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string
- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer
- `sort` (query) (optional)
  - Sort the result by this field.
  - Schema: string - Enum: `exportedAt` (Standard: `exportedAt`)
- `order` (query) (optional)
  - Should the result be sorted ascending or descending? Default ascending.
  - Schema: string - Enum: `asc`, `desc` (Standard: `desc`)

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

---

#### `GET /v2-experimental/customers/{customerId}/unlocked-leads/{leadId}`

**Zusammenfassung:** Get a detail of a unlocked lead. Organisation can unlock leads.

This route is deprecated. Please use /v2/customers/{customerId}/unlocked-leads/{leadId} instead.

**Tags:** LeadFyndr

**Parameter:**

- `leadId` (path) **(erforderlich)**
  - Schema: string
- `customerId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

---

#### `POST /v2-experimental/customers/{customerId}/unlocked-leads/{leadId}`

**Zusammenfassung:** Unlock a lead for the given customerId.

This route is deprecated. Please use /v2/customers/{customerId}/unlocked-leads/{leadId} instead.

**Tags:** LeadFyndr

**Parameter:**

- `leadId` (path) **(erforderlich)**
  - Schema: string
- `customerId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

---

#### `GET /v2-experimental/customers/{customerId}/unlocked-leads/{leadId}`

**Zusammenfassung:** Get a detail of a unlocked lead. Organisation can unlock leads.

This route is deprecated. Please use /v2/customers/{customerId}/unlocked-leads/{leadId} instead.

**Tags:** LeadFyndr

**Parameter:**

- `leadId` (path) **(erforderlich)**
  - Schema: string
- `customerId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

---

#### `POST /v2-experimental/customers/{customerId}/unlocked-leads/{leadId}`

**Zusammenfassung:** Unlock a lead for the given customerId.

This route is deprecated. Please use /v2/customers/{customerId}/unlocked-leads/{leadId} instead.

**Tags:** LeadFyndr

**Parameter:**

- `leadId` (path) **(erforderlich)**
  - Schema: string
- `customerId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

---

#### `POST /v2-experimental/customers/{customerId}/unlocked-leads/{leadId}/reservation`

**Zusammenfassung:** Reserve a unlocked lead for the given customerId.

This route is deprecated. Please use /v2/customers/{customerId}/unlocked-leads/{leadId}/reservation instead.

**Tags:** LeadFyndr

**Parameter:**

- `leadId` (path) **(erforderlich)**
  - Schema: string
- `customerId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

---

#### `DELETE /v2-experimental/customers/{customerId}/unlocked-leads/{leadId}/reservation`

**Zusammenfassung:** Removes a reservation on a unlocked lead for the given customerId.

This route is deprecated. Please use /v2/customers/{customerId}/unlocked-leads/{leadId}/reservation instead.

**Tags:** LeadFyndr

**Parameter:**

- `leadId` (path) **(erforderlich)**
  - Schema: string
- `customerId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

---

#### `POST /v2-experimental/customers/{customerId}/unlocked-leads/{leadId}/reservation`

**Zusammenfassung:** Reserve a unlocked lead for the given customerId.

This route is deprecated. Please use /v2/customers/{customerId}/unlocked-leads/{leadId}/reservation instead.

**Tags:** LeadFyndr

**Parameter:**

- `leadId` (path) **(erforderlich)**
  - Schema: string
- `customerId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

---

#### `DELETE /v2-experimental/customers/{customerId}/unlocked-leads/{leadId}/reservation`

**Zusammenfassung:** Removes a reservation on a unlocked lead for the given customerId.

This route is deprecated. Please use /v2/customers/{customerId}/unlocked-leads/{leadId}/reservation instead.

**Tags:** LeadFyndr

**Parameter:**

- `leadId` (path) **(erforderlich)**
  - Schema: string
- `customerId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

---

#### `GET /v2/cities`

**Zusammenfassung:** Get cities in DACH.

**Operation ID:** `leadfyndr-get-cities`

**Tags:** LeadFyndr

**Parameter:**

- `input` (query) **(erforderlich)**
  - Schema: string

**Responses:**

- **200**
  - The list of cities.


  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.leadfyndr.City` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.leadfyndr.City` (siehe Schema-Definition)
- **400**
- **403**
- **404**
- **429**
- **default**

---

#### `GET /v2/customers/{customerId}/lead-fyndr-profile`

**Zusammenfassung:** Get your LeadFyndr profile.

**Operation ID:** `leadfyndr-get-lead-fyndr-profile`

**Tags:** LeadFyndr

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **200**
  - The LeadFyndr profile.


  - **Content-Type:** `application/json`
- **400**
- **403**
- **404**
- **429**
- **default**

---

#### `GET /v2/customers/{customerId}/lead-fyndr-profile-request`

**Zusammenfassung:** Get your LeadFyndr request.

**Operation ID:** `leadfyndr-get-lead-fyndr-profile-request`

**Tags:** LeadFyndr

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **200**
  - The LeadFyndr request.


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.leadfyndr.ProfileRequest` (siehe Schema-Definition)
- **400**
- **403**
- **404**
- **429**
- **default**

---

#### `POST /v2/customers/{customerId}/lead-fyndr-profile-request`

**Zusammenfassung:** Create a new access request for LeadFyndr.

**Operation ID:** `leadfyndr-create-lead-fyndr-access-request`

**Tags:** LeadFyndr

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**



**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `domain` (erforderlich): string

**Responses:**

- **201**

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `profileId` (erforderlich): string
- **400**
- **403**
- **404**
- **409**
- **429**
- **default**

---

#### `GET /v2/customers/{customerId}/lead-fyndr-profile-request`

**Zusammenfassung:** Get your LeadFyndr request.

**Operation ID:** `leadfyndr-get-lead-fyndr-profile-request`

**Tags:** LeadFyndr

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **200**
  - The LeadFyndr request.


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.leadfyndr.ProfileRequest` (siehe Schema-Definition)
- **400**
- **403**
- **404**
- **429**
- **default**

---

#### `POST /v2/customers/{customerId}/lead-fyndr-profile-request`

**Zusammenfassung:** Create a new access request for LeadFyndr.

**Operation ID:** `leadfyndr-create-lead-fyndr-access-request`

**Tags:** LeadFyndr

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**



**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `domain` (erforderlich): string

**Responses:**

- **201**

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `profileId` (erforderlich): string
- **400**
- **403**
- **404**
- **409**
- **429**
- **default**

---

#### `GET /v2/customers/{customerId}/lead-fyndr-profile/tariff`

**Zusammenfassung:** Get lead tariff options. How many leads did you unlock this month?

**Operation ID:** `leadfyndr-get-lead-fyndr-profile-tariff-options`

**Tags:** LeadFyndr

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **200**
  - The lead tariff options.


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.leadfyndr.TariffOptions` (siehe Schema-Definition)
- **400**
- **403**
- **404**
- **429**
- **default**

---

#### `GET /v2/customers/{customerId}/leads`

**Zusammenfassung:** Get all leads. Use the unlocked routes for more lead details.

**Operation ID:** `leadfyndr-list-leads`

**Tags:** LeadFyndr

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string
- `potentialRangeMin` (query) (optional)
  - Min inclusive value of potential.

  - Schema: number (float)
- `potentialRangeMax` (query) (optional)
  - Max inclusive value of potential.

  - Schema: number (float)
- `employeeCountMin` (query) (optional)
  - Min inclusive value of employeeCount.

  - Schema: integer (int64)
- `employeeCountMax` (query) (optional)
  - Max inclusive value of employeeCount.

  - Schema: integer (int64)
- `salesVolumeMin` (query) (optional)
  - Min inclusive value of salesVolume.

  - Schema: integer (int64)
- `salesVolumeMax` (query) (optional)
  - Max inclusive value of salesVolume.

  - Schema: integer (int64)
- `technologies` (query) (optional)
  - A list of technologies to filter. Use "none" to filter leads without a main technology.

  - Schema: Array<>
- `businessFields` (query) (optional)
  - A list of businessFields to filter.

  - Schema: Array<string>
- `locationCity` (query) (optional)
  - City of location point.

  - Schema: string
- `locationPostCode` (query) (optional)
  - Post code of location point.

  - Schema: string
- `locationRadiusInKm` (query) (optional)
  - Radius from the location point.

  - Schema: number
- `basic:timeToFirstByteMs:min` (query) (optional)
  - Min inclusive value of timeToFirstByteMs.

  - Schema: number
- `basic:timeToFirstByteMs:max` (query) (optional)
  - Max inclusive value of timeToFirstByteMs.

  - Schema: number
- `basic:desktop:performance:min` (query) (optional)
  - Min inclusive value of desktop lighthouse metric performance.

  - Schema: number (float)
- `basic:desktop:performance:max` (query) (optional)
  - Max inclusive value of desktop lighthouse metric performance.

  - Schema: number (float)
- `basic:mobile:performance:min` (query) (optional)
  - Min inclusive value of mobile lighthouse metric performance.

  - Schema: number (float)
- `basic:mobile:performance:max` (query) (optional)
  - Max inclusive value of mobile lighthouse metric performance.

  - Schema: number (float)
- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer (Standard: `10`)
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer
- `sort` (query) (optional)
  - Sort the result by this field.
  - Schema: string - Enum: `potential`, `relevance` (Standard: `relevance`)
- `order` (query) (optional)
  - Should the result be sorted ascending or descending? Default ascending.
  - Schema: string - Enum: `asc`, `desc` (Standard: `desc`)

**Responses:**

- **200**
  - The leads list. Remember: more details will be given in the unlocked routes.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `leads` (erforderlich): Array<`de.mittwald.v1.leadfyndr.Lead` (siehe Schema-Definition)>
    - `limit` (erforderlich): number
    - `skip` (erforderlich): number
    - `totalCount` (erforderlich): number
- **400**
- **429**
- **default**

---

#### `GET /v2/customers/{customerId}/leads/{leadId}`

**Zusammenfassung:** Get a simple lead. Use the unlocked route for more detail leads.

**Operation ID:** `leadfyndr-get-lead`

**Tags:** LeadFyndr

**Parameter:**

- `leadId` (path) **(erforderlich)**
  - Schema: string
- `customerId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **200**
  - The lead preview of a lead which is not unlocked yet.


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.leadfyndr.Lead` (siehe Schema-Definition)
- **400**
- **403**
- **404**
- **429**
- **default**

---

#### `GET /v2/customers/{customerId}/unlocked-leads`

**Zusammenfassung:** Get all unlocked leads. Organisation can unlock leads.

**Operation ID:** `leadfyndr-list-unlocked-leads`

**Tags:** LeadFyndr

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string
- `potentialRangeMin` (query) (optional)
  - Min inclusive value of potential.

  - Schema: number (float)
- `potentialRangeMax` (query) (optional)
  - Max inclusive value of potential.

  - Schema: number (float)
- `employeeCountMin` (query) (optional)
  - Min inclusive value of employeeCount.

  - Schema: integer (int64)
- `employeeCountMax` (query) (optional)
  - Max inclusive value of employeeCount.

  - Schema: integer (int64)
- `salesVolumeMin` (query) (optional)
  - Min inclusive value of salesVolume.

  - Schema: integer (int64)
- `salesVolumeMax` (query) (optional)
  - Max inclusive value of salesVolume.

  - Schema: integer (int64)
- `technologies` (query) (optional)
  - A list of technologies to filter. Use "none" to filter leads without a main technology.

  - Schema: Array<>
- `businessFields` (query) (optional)
  - A list of businessFields to filter.

  - Schema: Array<string>
- `locationCity` (query) (optional)
  - City of location point.

  - Schema: string
- `locationPostCode` (query) (optional)
  - Post code of location point.

  - Schema: string
- `locationRadiusInKm` (query) (optional)
  - Radius from the location point.

  - Schema: number
- `basic:timeToFirstByteMs:min` (query) (optional)
  - Min inclusive value of timeToFirstByteMs.

  - Schema: number
- `basic:timeToFirstByteMs:max` (query) (optional)
  - Max inclusive value of timeToFirstByteMs.

  - Schema: number
- `basic:desktop:performance:min` (query) (optional)
  - Min inclusive value of desktop lighthouse metric performance.

  - Schema: number (float)
- `basic:desktop:performance:max` (query) (optional)
  - Max inclusive value of desktop lighthouse metric performance.

  - Schema: number (float)
- `basic:mobile:performance:min` (query) (optional)
  - Min inclusive value of mobile lighthouse metric performance.

  - Schema: number (float)
- `basic:mobile:performance:max` (query) (optional)
  - Max inclusive value of mobile lighthouse metric performance.

  - Schema: number (float)
- `reserved` (query) (optional)
  - Only for this customer reserved leads.

  - Schema: boolean
- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer (Standard: `10`)
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer
- `sort` (query) (optional)
  - Sort the result by this field.
  - Schema: string - Enum: `potential`, `relevance`, `company` (Standard: `relevance`)
- `order` (query) (optional)
  - Should the result be sorted ascending or descending? Default ascending.
  - Schema: string - Enum: `asc`, `desc` (Standard: `desc`)

**Responses:**

- **200**
  - The unlocked leads list.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `leads` (erforderlich): Array<`de.mittwald.v1.leadfyndr.UnlockedLead` (siehe Schema-Definition)>
    - `limit` (erforderlich): number
    - `skip` (erforderlich): number
    - `totalCount` (erforderlich): number
- **400**
- **403**
- **404**
- **429**
- **default**

---

#### `POST /v2/customers/{customerId}/unlocked-leads-export`

**Zusammenfassung:** Create an export of unlocked leads for the given customerId.

**Operation ID:** `leadfyndr-create-leads-export`

**Tags:** LeadFyndr

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `exportAllLeads` (erforderlich): boolean
  - `fieldKeys` (erforderlich): Array<string - Enum: `domain`, `potential`, `performance`, `generalLook`, `companyName`, `emails`, `phoneNumbers`, `address`, `employeeCount`, `revenue`, `a-record`, `nameserver`, `mailserver`, `techStack`>

**Responses:**

- **200**

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `contentBase64` (erforderlich): string
    - `exportId` (erforderlich): string
  - **Content-Type:** `text/csv`
    - Schema: string
- **400**
- **403**
- **404**
- **409**
- **429**
- **default**

---

#### `GET /v2/customers/{customerId}/unlocked-leads-exports`

**Zusammenfassung:** Get unlocked leads export history for the given customerId.

**Operation ID:** `leadfyndr-get-leads-export-history`

**Tags:** LeadFyndr

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string
- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer
- `sort` (query) (optional)
  - Sort the result by this field.
  - Schema: string - Enum: `exportedAt` (Standard: `exportedAt`)
- `order` (query) (optional)
  - Should the result be sorted ascending or descending? Default ascending.
  - Schema: string - Enum: `asc`, `desc` (Standard: `desc`)

**Responses:**

- **200**
  - A list of unlocked leads exports.

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.leadfyndr.LeadsExport` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.leadfyndr.LeadsExport` (siehe Schema-Definition)
- **400**
- **403**
- **404**
- **429**
- **default**

---

#### `GET /v2/customers/{customerId}/unlocked-leads/{leadId}`

**Zusammenfassung:** Get a detail of a unlocked lead. Organisation can unlock leads.

**Operation ID:** `leadfyndr-get-unlocked-lead`

**Tags:** LeadFyndr

**Parameter:**

- `leadId` (path) **(erforderlich)**
  - Schema: string
- `customerId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **200**
  - The unlocked lead.


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.leadfyndr.UnlockedLead` (siehe Schema-Definition)
- **400**
- **403**
- **404**
- **429**
- **default**

---

#### `POST /v2/customers/{customerId}/unlocked-leads/{leadId}`

**Zusammenfassung:** Unlock a lead for the given customerId.

**Operation ID:** `leadfyndr-unlock-lead`

**Tags:** LeadFyndr

**Parameter:**

- `leadId` (path) **(erforderlich)**
  - Schema: string
- `customerId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **200**

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `leadId` (erforderlich): string
- **400**
- **403**
- **404**
- **429**
- **default**

---

#### `GET /v2/customers/{customerId}/unlocked-leads/{leadId}`

**Zusammenfassung:** Get a detail of a unlocked lead. Organisation can unlock leads.

**Operation ID:** `leadfyndr-get-unlocked-lead`

**Tags:** LeadFyndr

**Parameter:**

- `leadId` (path) **(erforderlich)**
  - Schema: string
- `customerId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **200**
  - The unlocked lead.


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.leadfyndr.UnlockedLead` (siehe Schema-Definition)
- **400**
- **403**
- **404**
- **429**
- **default**

---

#### `POST /v2/customers/{customerId}/unlocked-leads/{leadId}`

**Zusammenfassung:** Unlock a lead for the given customerId.

**Operation ID:** `leadfyndr-unlock-lead`

**Tags:** LeadFyndr

**Parameter:**

- `leadId` (path) **(erforderlich)**
  - Schema: string
- `customerId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **200**

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `leadId` (erforderlich): string
- **400**
- **403**
- **404**
- **429**
- **default**

---

#### `POST /v2/customers/{customerId}/unlocked-leads/{leadId}/reservation`

**Zusammenfassung:** Reserve a unlocked lead for the given customerId.

**Operation ID:** `leadfyndr-reserve-unlocked-lead`

**Tags:** LeadFyndr

**Parameter:**

- `leadId` (path) **(erforderlich)**
  - Schema: string
- `customerId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **200**

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `leadId` (erforderlich): string
- **400**
- **403**
- **404**
- **409**
- **429**
- **default**

---

#### `DELETE /v2/customers/{customerId}/unlocked-leads/{leadId}/reservation`

**Zusammenfassung:** Removes a reservation on a unlocked lead for the given customerId.

**Operation ID:** `leadfyndr-remove-unlocked-lead-reservation`

**Tags:** LeadFyndr

**Parameter:**

- `leadId` (path) **(erforderlich)**
  - Schema: string
- `customerId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **200**

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `leadId` (erforderlich): string
- **400**
- **403**
- **404**
- **409**
- **429**
- **default**

---

#### `POST /v2/customers/{customerId}/unlocked-leads/{leadId}/reservation`

**Zusammenfassung:** Reserve a unlocked lead for the given customerId.

**Operation ID:** `leadfyndr-reserve-unlocked-lead`

**Tags:** LeadFyndr

**Parameter:**

- `leadId` (path) **(erforderlich)**
  - Schema: string
- `customerId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **200**

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `leadId` (erforderlich): string
- **400**
- **403**
- **404**
- **409**
- **429**
- **default**

---

#### `DELETE /v2/customers/{customerId}/unlocked-leads/{leadId}/reservation`

**Zusammenfassung:** Removes a reservation on a unlocked lead for the given customerId.

**Operation ID:** `leadfyndr-remove-unlocked-lead-reservation`

**Tags:** LeadFyndr

**Parameter:**

- `leadId` (path) **(erforderlich)**
  - Schema: string
- `customerId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **200**

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `leadId` (erforderlich): string
- **400**
- **403**
- **404**
- **409**
- **429**
- **default**

---


### Mail

#### `GET /v2/delivery-boxes/{deliveryBoxId}`

**Zusammenfassung:** Get a DeliveryBox.

**Operation ID:** `mail-get-delivery-box`

**Tags:** Mail

**Parameter:**

- `deliveryBoxId` (path) **(erforderlich)**
  - ID of the DeliveryBox to be retrieved.
  - Schema: string (uuid)

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.mail.Deliverybox` (siehe Schema-Definition)
- **400**
- **403**
- **404**
- **429**
- **500**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/delivery-boxes/{deliveryBoxId}`

**Zusammenfassung:** Delete a DeliveryBox.

**Operation ID:** `mail-delete-delivery-box`

**Tags:** Mail

**Parameter:**

- `deliveryBoxId` (path) **(erforderlich)**
  - ID of the DeliveryBox to be deleted.
  - Schema: string (uuid)

**Responses:**

- **204**
  - OK
- **400**
- **403**
- **404**
- **429**
- **500**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/delivery-boxes/{deliveryBoxId}`

**Zusammenfassung:** Get a DeliveryBox.

**Operation ID:** `mail-get-delivery-box`

**Tags:** Mail

**Parameter:**

- `deliveryBoxId` (path) **(erforderlich)**
  - ID of the DeliveryBox to be retrieved.
  - Schema: string (uuid)

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.mail.Deliverybox` (siehe Schema-Definition)
- **400**
- **403**
- **404**
- **429**
- **500**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/delivery-boxes/{deliveryBoxId}`

**Zusammenfassung:** Delete a DeliveryBox.

**Operation ID:** `mail-delete-delivery-box`

**Tags:** Mail

**Parameter:**

- `deliveryBoxId` (path) **(erforderlich)**
  - ID of the DeliveryBox to be deleted.
  - Schema: string (uuid)

**Responses:**

- **204**
  - OK
- **400**
- **403**
- **404**
- **429**
- **500**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/delivery-boxes/{deliveryBoxId}/description`

**Zusammenfassung:** Update the description of a DeliveryBox.

**Operation ID:** `mail-update-delivery-box-description`

**Tags:** Mail

**Parameter:**

- `deliveryBoxId` (path) **(erforderlich)**
  - ID of the DeliveryBox to update the description for.
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

Description of the DeliveryBox.

**Content-Type:** `application/json`

**Responses:**

- **204**
  - OK
- **400**
- **403**
- **404**
- **429**
- **500**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/delivery-boxes/{deliveryBoxId}/password`

**Zusammenfassung:** Update the password of a DeliveryBox.

**Operation ID:** `mail-update-delivery-box-password`

**Tags:** Mail

**Parameter:**

- `deliveryBoxId` (path) **(erforderlich)**
  - ID of the DeliveryBox to update the password for.
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **204**
  - OK
- **400**
- **403**
- **404**
- **429**
- **500**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/deliveryboxes/{deliveryBoxId}`

**Zusammenfassung:** Get a DeliveryBox.

This route is deprecated. Please use /v2/delivery-boxes/{deliveryBoxId} instead.

**Tags:** Mail

**Parameter:**

- `deliveryBoxId` (path) **(erforderlich)**
  - ID of the DeliveryBox to be retrieved.
  - Schema: string (uuid)

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/deliveryboxes/{deliveryBoxId}`

**Zusammenfassung:** Delete a DeliveryBox.

This route is deprecated. Please use /v2/delivery-boxes/{deliveryBoxId} instead.

**Tags:** Mail

**Parameter:**

- `deliveryBoxId` (path) **(erforderlich)**
  - ID of the DeliveryBox to be deleted.
  - Schema: string (uuid)

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/deliveryboxes/{deliveryBoxId}`

**Zusammenfassung:** Get a DeliveryBox.

This route is deprecated. Please use /v2/delivery-boxes/{deliveryBoxId} instead.

**Tags:** Mail

**Parameter:**

- `deliveryBoxId` (path) **(erforderlich)**
  - ID of the DeliveryBox to be retrieved.
  - Schema: string (uuid)

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/deliveryboxes/{deliveryBoxId}`

**Zusammenfassung:** Delete a DeliveryBox.

This route is deprecated. Please use /v2/delivery-boxes/{deliveryBoxId} instead.

**Tags:** Mail

**Parameter:**

- `deliveryBoxId` (path) **(erforderlich)**
  - ID of the DeliveryBox to be deleted.
  - Schema: string (uuid)

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/deliveryboxes/{id}/description`

**Zusammenfassung:** Update the description of an deliverybox

This operation is deprecated. Use the PATCH v2/delivery-boxes/{deliveryBoxId}/description endpoint instead.

**Operation ID:** `deprecated-mail-deliverybox-update-description`

**Tags:** Mail

**Parameter:**

- `id` (path) **(erforderlich)**
  - ID of the deliverybox
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

Description of the deliverybox

**Content-Type:** `application/json`

**Responses:**

- **200**
  - OK
- **403**
  - You do not have the permissions to access this content
- **404**
  - A deliverybox with the specified id was not found
- **429**
- **500**
  - Internal server error
- **503**
  - The service is unavailable.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/deliveryboxes/{id}/password`

**Zusammenfassung:** Update the password for a specific deliverybox

This operation is deprecated. Use the PATCH v2/delivery-boxes/{deliveryBoxId}/password endpoint instead.

**Operation ID:** `deprecated-mail-deliverybox-update-password`

**Tags:** Mail

**Parameter:**

- `id` (path) **(erforderlich)**
  - ID of the deliverybox
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **200**
  - OK
- **403**
  - You do not have the permissions to access this content
- **404**
  - A deliverybox with the specified id was not found
- **429**
- **500**
  - Internal server error
- **503**
  - The service is unavailable.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/mail-addresses/`

**Zusammenfassung:** List MailAddresses.

**Operation ID:** `mail-list-mail-addresses-for-user`

**Tags:** Mail

**Parameter:**

- `projectId` (query) (optional)
  - ID of the Project to list MailAddresses for.
  - Schema: string
- `search` (query) (optional)
  - Search term to filter MailAddresses for. The fields id, address and mailboxName are searchable. An exact match is performed for id, a partial match for address and mailboxName.
  - Schema: string
- `forwardAddress` (query) (optional)
  - Whether the MailAddress is a forward address.
  - Schema: boolean
- `catchAll` (query) (optional)
  - Whether the MailAddress is a catch-all address.
  - Schema: boolean
- `autoResponder` (query) (optional)
  - Whether the MailAddress has an active auto responder.
  - Schema: boolean
- `mailArchive` (query) (optional)
  - Whether the MailAddress has a mail-archive.
  - Schema: boolean
- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer (Standard: `10000`)
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer
- `sort` (query) (optional)
  - List of fields how the result should be sorted.
  - Schema: Array<string - Enum: `address.domain`, `address.local`, `updatedAt`, `projectId`, `mailbox.quota`, `mailbox.name`, `mailbox.storageInBytes.current`, `mailbox.storageInBytes.limit`>
- `order` (query) (optional)
  - Should the result be sorted ascending or descending? You can specify for each field another sorting: sort[0]=foo, order[0]=asc, sort[1]=bar, order[1]=desc.
  - Schema: Array<string - Enum: `asc`, `desc`>

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.mail.MailAddress` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.mail.MailAddress` (siehe Schema-Definition)
- **400**
- **403**
- **404**
- **429**
- **500**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/mail-addresses/{mailAddressId}`

**Zusammenfassung:** Get a MailAddress.

**Operation ID:** `mail-get-mail-address`

**Tags:** Mail

**Parameter:**

- `mailAddressId` (path) **(erforderlich)**
  - ID of the MailAddress to be retrieved.
  - Schema: string (uuid)

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.mail.MailAddress` (siehe Schema-Definition)
- **400**
- **403**
- **404**
- **429**
- **500**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/mail-addresses/{mailAddressId}`

**Zusammenfassung:** Delete a MailAddress.

**Operation ID:** `mail-delete-mail-address`

**Tags:** Mail

**Parameter:**

- `mailAddressId` (path) **(erforderlich)**
  - ID of the MailAddress to be deleted.
  - Schema: string (uuid)

**Responses:**

- **204**
  - OK
- **400**
- **403**
- **404**
- **429**
- **500**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/mail-addresses/{mailAddressId}`

**Zusammenfassung:** Get a MailAddress.

**Operation ID:** `mail-get-mail-address`

**Tags:** Mail

**Parameter:**

- `mailAddressId` (path) **(erforderlich)**
  - ID of the MailAddress to be retrieved.
  - Schema: string (uuid)

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.mail.MailAddress` (siehe Schema-Definition)
- **400**
- **403**
- **404**
- **429**
- **500**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/mail-addresses/{mailAddressId}`

**Zusammenfassung:** Delete a MailAddress.

**Operation ID:** `mail-delete-mail-address`

**Tags:** Mail

**Parameter:**

- `mailAddressId` (path) **(erforderlich)**
  - ID of the MailAddress to be deleted.
  - Schema: string (uuid)

**Responses:**

- **204**
  - OK
- **400**
- **403**
- **404**
- **429**
- **500**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/mail-addresses/{mailAddressId}/address`

**Zusammenfassung:** Update a MailAddress.

**Operation ID:** `mail-update-mail-address-address`

**Tags:** Mail

**Parameter:**

- `mailAddressId` (path) **(erforderlich)**
  - ID of the MailAddress to update the address for.
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **204**
  - OK
- **400**
- **403**
- **404**
- **429**
- **500**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/mail-addresses/{mailAddressId}/autoresponder`

**Zusammenfassung:** Update the autoresponder of a MailAddress.

This operation is deprecated. Use the PATCH v2/mail-addresses/{mailAddressId}/autoresponder endpoint instead.

**Operation ID:** `deprecated-mail-update-mail-address-autoresponder`

**Tags:** Mail

**Parameter:**

- `mailAddressId` (path) **(erforderlich)**
  - ID of the MailAddress to update the autoresponder for.
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

Autoresponder for the MailAddress.

**Content-Type:** `application/json`

**Responses:**

- **200**
  - OK
- **400**
- **403**
- **404**
- **429**
- **500**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/mail-addresses/{mailAddressId}/autoresponder`

**Zusammenfassung:** Update the autoresponder of a MailAddress.

**Operation ID:** `mail-update-mail-address-autoresponder`

**Tags:** Mail

**Parameter:**

- `mailAddressId` (path) **(erforderlich)**
  - ID of the MailAddress to update the autoresponder for.
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

Autoresponder for the MailAddress.

**Content-Type:** `application/json`

**Responses:**

- **204**
  - OK
- **400**
- **403**
- **404**
- **429**
- **500**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/mail-addresses/{mailAddressId}/autoresponder`

**Zusammenfassung:** Update the autoresponder of a MailAddress.

This operation is deprecated. Use the PATCH v2/mail-addresses/{mailAddressId}/autoresponder endpoint instead.

**Operation ID:** `deprecated-mail-update-mail-address-autoresponder`

**Tags:** Mail

**Parameter:**

- `mailAddressId` (path) **(erforderlich)**
  - ID of the MailAddress to update the autoresponder for.
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

Autoresponder for the MailAddress.

**Content-Type:** `application/json`

**Responses:**

- **200**
  - OK
- **400**
- **403**
- **404**
- **429**
- **500**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/mail-addresses/{mailAddressId}/autoresponder`

**Zusammenfassung:** Update the autoresponder of a MailAddress.

**Operation ID:** `mail-update-mail-address-autoresponder`

**Tags:** Mail

**Parameter:**

- `mailAddressId` (path) **(erforderlich)**
  - ID of the MailAddress to update the autoresponder for.
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

Autoresponder for the MailAddress.

**Content-Type:** `application/json`

**Responses:**

- **204**
  - OK
- **400**
- **403**
- **404**
- **429**
- **500**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/mail-addresses/{mailAddressId}/backups`

**Zusammenfassung:** List backups belonging to a MailAddress.

**Operation ID:** `mail-list-backups-for-mail-address`

**Tags:** Mail

**Parameter:**

- `mailAddressId` (path) **(erforderlich)**
  - ID of the MailAddress to retrieve backups for.
  - Schema: string (uuid)

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.mail.MailAddressBackup` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.mail.MailAddressBackup` (siehe Schema-Definition)
- **400**
- **403**
- **404**
- **429**
- **500**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/mail-addresses/{mailAddressId}/backups/{backupId}/recovery`

**Zusammenfassung:** Recover emails for a MailAddress from a backup.

**Operation ID:** `mail-recover-mail-address-emails`

**Tags:** Mail

**Parameter:**

- `mailAddressId` (path) **(erforderlich)**
  - ID of the MailAddress to recover emails for.
  - Schema: string (uuid)
- `backupId` (path) **(erforderlich)**
  - ID of the backup to recover from.
  - Schema: string

**Responses:**

- **204**
  - OK
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/mail-addresses/{mailAddressId}/catch-all`

**Zusammenfassung:** Update the catch-all of a MailAddress.

**Operation ID:** `mail-update-mail-address-catch-all`

**Tags:** Mail

**Parameter:**

- `mailAddressId` (path) **(erforderlich)**
  - ID of the MailAddress to update the catch-all for.
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

Catch-all of the MailAddress.

**Content-Type:** `application/json`

**Responses:**

- **204**
  - OK
- **400**
- **403**
- **404**
- **429**
- **500**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/mail-addresses/{mailAddressId}/catchall`

**Zusammenfassung:** Update the catchall of a MailAddress.

This operation is deprecated. Use the PATCH v2/mail-addresses/{mailAddressId}/catch-all endpoint instead.

**Operation ID:** `deprecated-mail-update-mail-address-catchall`

**Tags:** Mail

**Parameter:**

- `mailAddressId` (path) **(erforderlich)**
  - ID of the MailAddress to update the catchall for.
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

Catchall of the MailAddress.

**Content-Type:** `application/json`

**Responses:**

- **200**
  - OK
- **400**
- **403**
- **404**
- **429**
- **500**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/mail-addresses/{mailAddressId}/forward-addresses`

**Zusammenfassung:** Update the forward addresses of a MailAddresses.

This operation is deprecated. Use the PATCH v2/mail-addresses/{mailAddressId}/forward-addresses endpoint instead.

**Operation ID:** `deprecated-mail-update-mail-address-forward-addresses`

**Tags:** Mail

**Parameter:**

- `mailAddressId` (path) **(erforderlich)**
  - ID of the MailAddress to update the forward addresses for.
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **200**
  - OK
- **400**
- **403**
- **404**
- **429**
- **500**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/mail-addresses/{mailAddressId}/forward-addresses`

**Zusammenfassung:** Update the forward addresses of a MailAddresses.

**Operation ID:** `mail-update-mail-address-forward-addresses`

**Tags:** Mail

**Parameter:**

- `mailAddressId` (path) **(erforderlich)**
  - ID of the MailAddress to update the forward addresses for.
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **204**
  - OK
- **400**
- **403**
- **404**
- **429**
- **500**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/mail-addresses/{mailAddressId}/forward-addresses`

**Zusammenfassung:** Update the forward addresses of a MailAddresses.

This operation is deprecated. Use the PATCH v2/mail-addresses/{mailAddressId}/forward-addresses endpoint instead.

**Operation ID:** `deprecated-mail-update-mail-address-forward-addresses`

**Tags:** Mail

**Parameter:**

- `mailAddressId` (path) **(erforderlich)**
  - ID of the MailAddress to update the forward addresses for.
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **200**
  - OK
- **400**
- **403**
- **404**
- **429**
- **500**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/mail-addresses/{mailAddressId}/forward-addresses`

**Zusammenfassung:** Update the forward addresses of a MailAddresses.

**Operation ID:** `mail-update-mail-address-forward-addresses`

**Tags:** Mail

**Parameter:**

- `mailAddressId` (path) **(erforderlich)**
  - ID of the MailAddress to update the forward addresses for.
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **204**
  - OK
- **400**
- **403**
- **404**
- **429**
- **500**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/mail-addresses/{mailAddressId}/mail-archive`

**Zusammenfassung:** Disable the mail-archive of a MailAddress.

**Operation ID:** `mail-disable-mail-archive`

**Tags:** Mail

**Parameter:**

- `mailAddressId` (path) **(erforderlich)**
  - ID of the MailAddress to disable a mail-archive for.
  - Schema: string (uuid)

**Responses:**

- **204**
  - No Content
- **400**
- **403**
- **404**
- **429**
- **500**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/mail-addresses/{mailAddressId}/password`

**Zusammenfassung:** Update the password for a MailAddress.

This operation is deprecated. Use the PATCH v2/mail-addresses/{mailAddressId}/password endpoint instead.

**Operation ID:** `deprecated-mail-update-mail-address-password`

**Tags:** Mail

**Parameter:**

- `mailAddressId` (path) **(erforderlich)**
  - ID of the MailAddress to update the password for.
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **200**
  - OK
- **400**
- **403**
- **404**
- **429**
- **500**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/mail-addresses/{mailAddressId}/password`

**Zusammenfassung:** Update the password for a MailAddress.

**Operation ID:** `mail-update-mail-address-password`

**Tags:** Mail

**Parameter:**

- `mailAddressId` (path) **(erforderlich)**
  - ID of the MailAddress to update the password for.
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **204**
  - OK
- **400**
- **403**
- **404**
- **429**
- **500**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/mail-addresses/{mailAddressId}/password`

**Zusammenfassung:** Update the password for a MailAddress.

This operation is deprecated. Use the PATCH v2/mail-addresses/{mailAddressId}/password endpoint instead.

**Operation ID:** `deprecated-mail-update-mail-address-password`

**Tags:** Mail

**Parameter:**

- `mailAddressId` (path) **(erforderlich)**
  - ID of the MailAddress to update the password for.
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **200**
  - OK
- **400**
- **403**
- **404**
- **429**
- **500**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/mail-addresses/{mailAddressId}/password`

**Zusammenfassung:** Update the password for a MailAddress.

**Operation ID:** `mail-update-mail-address-password`

**Tags:** Mail

**Parameter:**

- `mailAddressId` (path) **(erforderlich)**
  - ID of the MailAddress to update the password for.
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **204**
  - OK
- **400**
- **403**
- **404**
- **429**
- **500**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/mail-addresses/{mailAddressId}/quota`

**Zusammenfassung:** Update the quota of a MailAddress.

This operation is deprecated. Use the PATCH v2/mail-addresses/{mailAddressId}/quota endpoint instead.

**Operation ID:** `deprecated-mail-update-mail-address-quota`

**Tags:** Mail

**Parameter:**

- `mailAddressId` (path) **(erforderlich)**
  - ID of the MailAddress to update the quota for.
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **200**
  - OK
- **400**
- **403**
- **404**
- **429**
- **500**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/mail-addresses/{mailAddressId}/quota`

**Zusammenfassung:** Update the quota of a MailAddress.

**Operation ID:** `mail-update-mail-address-quota`

**Tags:** Mail

**Parameter:**

- `mailAddressId` (path) **(erforderlich)**
  - ID of the MailAddress to update the quota for.
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **204**
  - OK
- **400**
- **403**
- **404**
- **429**
- **500**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/mail-addresses/{mailAddressId}/quota`

**Zusammenfassung:** Update the quota of a MailAddress.

This operation is deprecated. Use the PATCH v2/mail-addresses/{mailAddressId}/quota endpoint instead.

**Operation ID:** `deprecated-mail-update-mail-address-quota`

**Tags:** Mail

**Parameter:**

- `mailAddressId` (path) **(erforderlich)**
  - ID of the MailAddress to update the quota for.
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **200**
  - OK
- **400**
- **403**
- **404**
- **429**
- **500**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/mail-addresses/{mailAddressId}/quota`

**Zusammenfassung:** Update the quota of a MailAddress.

**Operation ID:** `mail-update-mail-address-quota`

**Tags:** Mail

**Parameter:**

- `mailAddressId` (path) **(erforderlich)**
  - ID of the MailAddress to update the quota for.
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **204**
  - OK
- **400**
- **403**
- **404**
- **429**
- **500**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/mail-addresses/{mailAddressId}/spam-protection`

**Zusammenfassung:** Update the spam protection of a MailAddress.

This operation is deprecated. Use the PATCH v2/mail-addresses/{mailAddressId}/spam-protection endpoint instead.

**Operation ID:** `deprecated-mail-update-mail-address-spam-protection`

**Tags:** Mail

**Parameter:**

- `mailAddressId` (path) **(erforderlich)**
  - ID of the MailAddress to update the spam protection for.
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **200**
  - OK
- **400**
- **403**
- **404**
- **429**
- **500**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/mail-addresses/{mailAddressId}/spam-protection`

**Zusammenfassung:** Update the spam protection of a MailAddress.

**Operation ID:** `mail-update-mail-address-spam-protection`

**Tags:** Mail

**Parameter:**

- `mailAddressId` (path) **(erforderlich)**
  - ID of the MailAddress to update the spam protection for.
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **204**
  - OK
- **400**
- **403**
- **404**
- **429**
- **500**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/mail-addresses/{mailAddressId}/spam-protection`

**Zusammenfassung:** Update the spam protection of a MailAddress.

This operation is deprecated. Use the PATCH v2/mail-addresses/{mailAddressId}/spam-protection endpoint instead.

**Operation ID:** `deprecated-mail-update-mail-address-spam-protection`

**Tags:** Mail

**Parameter:**

- `mailAddressId` (path) **(erforderlich)**
  - ID of the MailAddress to update the spam protection for.
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **200**
  - OK
- **400**
- **403**
- **404**
- **429**
- **500**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/mail-addresses/{mailAddressId}/spam-protection`

**Zusammenfassung:** Update the spam protection of a MailAddress.

**Operation ID:** `mail-update-mail-address-spam-protection`

**Tags:** Mail

**Parameter:**

- `mailAddressId` (path) **(erforderlich)**
  - ID of the MailAddress to update the spam protection for.
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **204**
  - OK
- **400**
- **403**
- **404**
- **429**
- **500**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/mailaddresses/{id}/address`

**Zusammenfassung:** Update mail-address

This operation is deprecated. Use the PATCH v2/mail-addresses/{mailAddressId}/address endpoint instead.

**Operation ID:** `deprecated-mail-mailaddress-update-address`

**Tags:** Mail

**Parameter:**

- `id` (path) **(erforderlich)**
  - ID of the mail address
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

set mail-address

**Content-Type:** `application/json`

**Responses:**

- **200**
  - OK
- **403**
  - You do not have the permissions to access this content
- **404**
  - A mailaddress with the specified id was not found
- **429**
- **500**
  - Internal server error
- **503**
  - The service is unavailable.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/mailaddresses/{mailAddressId}`

**Zusammenfassung:** Get a MailAddress.

This route is deprecated. Please use /v2/mail-addresses/{mailAddressId} instead.

**Tags:** Mail

**Parameter:**

- `mailAddressId` (path) **(erforderlich)**
  - ID of the MailAddress to be retrieved.
  - Schema: string (uuid)

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/mailaddresses/{mailAddressId}`

**Zusammenfassung:** Delete a MailAddress.

This route is deprecated. Please use /v2/mail-addresses/{mailAddressId} instead.

**Tags:** Mail

**Parameter:**

- `mailAddressId` (path) **(erforderlich)**
  - ID of the MailAddress to be deleted.
  - Schema: string (uuid)

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/mailaddresses/{mailAddressId}`

**Zusammenfassung:** Get a MailAddress.

This route is deprecated. Please use /v2/mail-addresses/{mailAddressId} instead.

**Tags:** Mail

**Parameter:**

- `mailAddressId` (path) **(erforderlich)**
  - ID of the MailAddress to be retrieved.
  - Schema: string (uuid)

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/mailaddresses/{mailAddressId}`

**Zusammenfassung:** Delete a MailAddress.

This route is deprecated. Please use /v2/mail-addresses/{mailAddressId} instead.

**Tags:** Mail

**Parameter:**

- `mailAddressId` (path) **(erforderlich)**
  - ID of the MailAddress to be deleted.
  - Schema: string (uuid)

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/mailaddresses/{mailAddressId}/autoResponder`

**Zusammenfassung:** Update the autoresponder of a MailAddress.

This route is deprecated. Please use /v2/mail-addresses/{mailAddressId}/autoresponder instead.

**Tags:** Mail

**Parameter:**

- `mailAddressId` (path) **(erforderlich)**
  - ID of the MailAddress to update the autoresponder for.
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

Autoresponder for the MailAddress.

**Content-Type:** `application/json`

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/mailaddresses/{mailAddressId}/catchAll`

**Zusammenfassung:** Update the catchall of a MailAddress.

This route is deprecated. Please use /v2/mail-addresses/{mailAddressId}/catchall instead.

**Tags:** Mail

**Parameter:**

- `mailAddressId` (path) **(erforderlich)**
  - ID of the MailAddress to update the catchall for.
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

Catchall of the MailAddress.

**Content-Type:** `application/json`

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/mailaddresses/{mailAddressId}/forwardaddresses`

**Zusammenfassung:** Update the forward addresses of a MailAddresses.

This route is deprecated. Please use /v2/mail-addresses/{mailAddressId}/forward-addresses instead.

**Tags:** Mail

**Parameter:**

- `mailAddressId` (path) **(erforderlich)**
  - ID of the MailAddress to update the forward addresses for.
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/mailaddresses/{mailAddressId}/password`

**Zusammenfassung:** Update the password for a MailAddress.

This route is deprecated. Please use /v2/mail-addresses/{mailAddressId}/password instead.

**Tags:** Mail

**Parameter:**

- `mailAddressId` (path) **(erforderlich)**
  - ID of the MailAddress to update the password for.
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/mailaddresses/{mailAddressId}/quota`

**Zusammenfassung:** Update the quota of a MailAddress.

This route is deprecated. Please use /v2/mail-addresses/{mailAddressId}/quota instead.

**Tags:** Mail

**Parameter:**

- `mailAddressId` (path) **(erforderlich)**
  - ID of the MailAddress to update the quota for.
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/mailaddresses/{mailAddressId}/spamprotection`

**Zusammenfassung:** Update the spam protection of a MailAddress.

This route is deprecated. Please use /v2/mail-addresses/{mailAddressId}/spam-protection instead.

**Tags:** Mail

**Parameter:**

- `mailAddressId` (path) **(erforderlich)**
  - ID of the MailAddress to update the spam protection for.
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}/delivery-boxes`

**Zusammenfassung:** List DeliveryBoxes belonging to a Project.

**Operation ID:** `mail-list-delivery-boxes`

**Tags:** Mail

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to list DeliveryBoxes for.
  - Schema: string
- `search` (query) (optional)
  - Search term to filter DeliveryBoxes for. The fields id, name and description are searchable. An exact match is performed for id, a partial match for name and description.
  - Schema: string
- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer (Standard: `10000`)
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.mail.Deliverybox` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.mail.Deliverybox` (siehe Schema-Definition)
- **400**
- **403**
- **404**
- **429**
- **500**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/projects/{projectId}/delivery-boxes`

**Zusammenfassung:** Create a DeliveryBox.

**Operation ID:** `mail-create-deliverybox`

**Tags:** Mail

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to create the DeliveryBox in.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

DeliveryBox

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `description` (erforderlich): string
  - `password` (erforderlich): string

**Responses:**

- **201**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `id` (erforderlich): string (uuid)
- **400**
- **403**
- **404**
- **429**
- **500**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}/delivery-boxes`

**Zusammenfassung:** List DeliveryBoxes belonging to a Project.

**Operation ID:** `mail-list-delivery-boxes`

**Tags:** Mail

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to list DeliveryBoxes for.
  - Schema: string
- `search` (query) (optional)
  - Search term to filter DeliveryBoxes for. The fields id, name and description are searchable. An exact match is performed for id, a partial match for name and description.
  - Schema: string
- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer (Standard: `10000`)
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.mail.Deliverybox` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.mail.Deliverybox` (siehe Schema-Definition)
- **400**
- **403**
- **404**
- **429**
- **500**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/projects/{projectId}/delivery-boxes`

**Zusammenfassung:** Create a DeliveryBox.

**Operation ID:** `mail-create-deliverybox`

**Tags:** Mail

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to create the DeliveryBox in.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

DeliveryBox

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `description` (erforderlich): string
  - `password` (erforderlich): string

**Responses:**

- **201**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `id` (erforderlich): string (uuid)
- **400**
- **403**
- **404**
- **429**
- **500**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}/deliveryboxes`

**Zusammenfassung:** List DeliveryBoxes belonging to a Project.

This route is deprecated. Please use /v2/projects/{projectId}/delivery-boxes instead.

**Tags:** Mail

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to list DeliveryBoxes for.
  - Schema: string
- `search` (query) (optional)
  - Search term to filter DeliveryBoxes for. The fields id, name and description are searchable. An exact match is performed for id, a partial match for name and description.
  - Schema: string
- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer (Standard: `10000`)
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/projects/{projectId}/deliveryboxes`

**Zusammenfassung:** Create a DeliveryBox.

This route is deprecated. Please use /v2/projects/{projectId}/delivery-boxes instead.

**Tags:** Mail

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to create the DeliveryBox in.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

DeliveryBox

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `description` (erforderlich): string
  - `password` (erforderlich): string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}/deliveryboxes`

**Zusammenfassung:** List DeliveryBoxes belonging to a Project.

This route is deprecated. Please use /v2/projects/{projectId}/delivery-boxes instead.

**Tags:** Mail

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to list DeliveryBoxes for.
  - Schema: string
- `search` (query) (optional)
  - Search term to filter DeliveryBoxes for. The fields id, name and description are searchable. An exact match is performed for id, a partial match for name and description.
  - Schema: string
- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer (Standard: `10000`)
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/projects/{projectId}/deliveryboxes`

**Zusammenfassung:** Create a DeliveryBox.

This route is deprecated. Please use /v2/projects/{projectId}/delivery-boxes instead.

**Tags:** Mail

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to create the DeliveryBox in.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

DeliveryBox

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `description` (erforderlich): string
  - `password` (erforderlich): string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}/mail-addresses`

**Zusammenfassung:** List MailAddresses belonging to a Project.

**Operation ID:** `mail-list-mail-addresses`

**Tags:** Mail

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to list MailAddresses for.
  - Schema: string
- `search` (query) (optional)
  - Search term to filter MailAddresses for. The fields id, address and mailboxName are searchable. An exact match is performed for id, a partial match for address and mailboxName.
  - Schema: string
- `forwardAddress` (query) (optional)
  - Whether the MailAddress is a forward address.
  - Schema: boolean
- `catchAll` (query) (optional)
  - Whether the MailAddress is a catch-all address.
  - Schema: boolean
- `autoResponder` (query) (optional)
  - Whether the MailAddress has an active auto responder.
  - Schema: boolean
- `mailArchive` (query) (optional)
  - Whether the MailAddress has a mail-archive.
  - Schema: boolean
- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer (Standard: `10000`)
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer
- `sort` (query) (optional)
  - List of fields how the result should be sorted.
  - Schema: Array<string - Enum: `address.domain`, `address.local`, `updatedAt`, `projectId`, `mailbox.quota`, `mailbox.name`, `mailbox.storageInBytes.current`, `mailbox.storageInBytes.limit`>
- `order` (query) (optional)
  - Should the result be sorted ascending or descending? You can specify for each field another sorting: sort[0]=foo, order[0]=asc, sort[1]=bar, order[1]=desc.
  - Schema: Array<string - Enum: `asc`, `desc`>

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.mail.MailAddress` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.mail.MailAddress` (siehe Schema-Definition)
- **400**
- **403**
- **404**
- **429**
- **500**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/projects/{projectId}/mail-addresses`

**Zusammenfassung:** Create a MailAddress.

**Operation ID:** `mail-create-mail-address`

**Tags:** Mail

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the project to create a MailAddress for.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **201**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `id` (erforderlich): string (uuid)
- **400**
- **403**
- **404**
- **429**
- **500**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}/mail-addresses`

**Zusammenfassung:** List MailAddresses belonging to a Project.

**Operation ID:** `mail-list-mail-addresses`

**Tags:** Mail

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to list MailAddresses for.
  - Schema: string
- `search` (query) (optional)
  - Search term to filter MailAddresses for. The fields id, address and mailboxName are searchable. An exact match is performed for id, a partial match for address and mailboxName.
  - Schema: string
- `forwardAddress` (query) (optional)
  - Whether the MailAddress is a forward address.
  - Schema: boolean
- `catchAll` (query) (optional)
  - Whether the MailAddress is a catch-all address.
  - Schema: boolean
- `autoResponder` (query) (optional)
  - Whether the MailAddress has an active auto responder.
  - Schema: boolean
- `mailArchive` (query) (optional)
  - Whether the MailAddress has a mail-archive.
  - Schema: boolean
- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer (Standard: `10000`)
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer
- `sort` (query) (optional)
  - List of fields how the result should be sorted.
  - Schema: Array<string - Enum: `address.domain`, `address.local`, `updatedAt`, `projectId`, `mailbox.quota`, `mailbox.name`, `mailbox.storageInBytes.current`, `mailbox.storageInBytes.limit`>
- `order` (query) (optional)
  - Should the result be sorted ascending or descending? You can specify for each field another sorting: sort[0]=foo, order[0]=asc, sort[1]=bar, order[1]=desc.
  - Schema: Array<string - Enum: `asc`, `desc`>

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.mail.MailAddress` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.mail.MailAddress` (siehe Schema-Definition)
- **400**
- **403**
- **404**
- **429**
- **500**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/projects/{projectId}/mail-addresses`

**Zusammenfassung:** Create a MailAddress.

**Operation ID:** `mail-create-mail-address`

**Tags:** Mail

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the project to create a MailAddress for.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **201**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `id` (erforderlich): string (uuid)
- **400**
- **403**
- **404**
- **429**
- **500**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}/mail-settings`

**Zusammenfassung:** List mail settings of a Project.

**Operation ID:** `mail-list-project-mail-settings`

**Tags:** Mail

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to list mail settings for.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `blacklist` (erforderlich): Array<string (idn-email)>
    - `projectId` (erforderlich): string
    - `whitelist` (erforderlich): Array<string (idn-email)>
- **400**
- **403**
- **404**
- **429**
- **500**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/projects/{projectId}/mail-settings/{mailSetting}`

**Zusammenfassung:** Update a mail setting of a Project.

This operation is deprecated. Use the PATCH v2/{projectId}/mail-settings/{mailSetting} endpoint instead.

**Operation ID:** `deprecated-mail-update-project-mail-setting`

**Tags:** Mail

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to update a mail setting for.
  - Schema: string
- `mailSetting` (path) **(erforderlich)**
  - The setting to update.
  - Schema: string - Enum: `blacklist`, `whitelist`

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **200**
  - OK
- **400**
- **403**
- **404**
- **429**
- **500**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/projects/{projectId}/mail-settings/{mailSetting}`

**Zusammenfassung:** Update a mail setting of a Project.

**Operation ID:** `mail-update-project-mail-setting`

**Tags:** Mail

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to update a mail setting for.
  - Schema: string
- `mailSetting` (path) **(erforderlich)**
  - The mail setting to update.
  - Schema: string - Enum: `blacklist`, `whitelist`

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **204**
  - OK
- **400**
- **403**
- **404**
- **429**
- **500**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/projects/{projectId}/mail-settings/{mailSetting}`

**Zusammenfassung:** Update a mail setting of a Project.

This operation is deprecated. Use the PATCH v2/{projectId}/mail-settings/{mailSetting} endpoint instead.

**Operation ID:** `deprecated-mail-update-project-mail-setting`

**Tags:** Mail

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to update a mail setting for.
  - Schema: string
- `mailSetting` (path) **(erforderlich)**
  - The setting to update.
  - Schema: string - Enum: `blacklist`, `whitelist`

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **200**
  - OK
- **400**
- **403**
- **404**
- **429**
- **500**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/projects/{projectId}/mail-settings/{mailSetting}`

**Zusammenfassung:** Update a mail setting of a Project.

**Operation ID:** `mail-update-project-mail-setting`

**Tags:** Mail

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to update a mail setting for.
  - Schema: string
- `mailSetting` (path) **(erforderlich)**
  - The mail setting to update.
  - Schema: string - Enum: `blacklist`, `whitelist`

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **204**
  - OK
- **400**
- **403**
- **404**
- **429**
- **500**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}/mailaddresses`

**Zusammenfassung:** List MailAddresses belonging to a Project.

This route is deprecated. Please use /v2/projects/{projectId}/mail-addresses instead.

**Tags:** Mail

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to list MailAddresses for.
  - Schema: string
- `search` (query) (optional)
  - Search term to filter MailAddresses for. The fields id, address and mailboxName are searchable. An exact match is performed for id, a partial match for address and mailboxName.
  - Schema: string
- `forwardAddress` (query) (optional)
  - Whether the MailAddress is a forward address.
  - Schema: boolean
- `catchAll` (query) (optional)
  - Whether the MailAddress is a catch-all address.
  - Schema: boolean
- `autoResponder` (query) (optional)
  - Whether the MailAddress has an active auto responder.
  - Schema: boolean
- `mailArchive` (query) (optional)
  - Whether the MailAddress has a mail-archive.
  - Schema: boolean
- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer (Standard: `10000`)
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer
- `sort` (query) (optional)
  - List of fields how the result should be sorted.
  - Schema: Array<string - Enum: `address.domain`, `address.local`, `updatedAt`, `projectId`, `mailbox.quota`, `mailbox.name`, `mailbox.storageInBytes.current`, `mailbox.storageInBytes.limit`>
- `order` (query) (optional)
  - Should the result be sorted ascending or descending? You can specify for each field another sorting: sort[0]=foo, order[0]=asc, sort[1]=bar, order[1]=desc.
  - Schema: Array<string - Enum: `asc`, `desc`>

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/projects/{projectId}/mailaddresses`

**Zusammenfassung:** Create a MailAddress.

This route is deprecated. Please use /v2/projects/{projectId}/mail-addresses instead.

**Tags:** Mail

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the project to create a MailAddress for.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}/mailaddresses`

**Zusammenfassung:** List MailAddresses belonging to a Project.

This route is deprecated. Please use /v2/projects/{projectId}/mail-addresses instead.

**Tags:** Mail

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to list MailAddresses for.
  - Schema: string
- `search` (query) (optional)
  - Search term to filter MailAddresses for. The fields id, address and mailboxName are searchable. An exact match is performed for id, a partial match for address and mailboxName.
  - Schema: string
- `forwardAddress` (query) (optional)
  - Whether the MailAddress is a forward address.
  - Schema: boolean
- `catchAll` (query) (optional)
  - Whether the MailAddress is a catch-all address.
  - Schema: boolean
- `autoResponder` (query) (optional)
  - Whether the MailAddress has an active auto responder.
  - Schema: boolean
- `mailArchive` (query) (optional)
  - Whether the MailAddress has a mail-archive.
  - Schema: boolean
- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer (Standard: `10000`)
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer
- `sort` (query) (optional)
  - List of fields how the result should be sorted.
  - Schema: Array<string - Enum: `address.domain`, `address.local`, `updatedAt`, `projectId`, `mailbox.quota`, `mailbox.name`, `mailbox.storageInBytes.current`, `mailbox.storageInBytes.limit`>
- `order` (query) (optional)
  - Should the result be sorted ascending or descending? You can specify for each field another sorting: sort[0]=foo, order[0]=asc, sort[1]=bar, order[1]=desc.
  - Schema: Array<string - Enum: `asc`, `desc`>

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/projects/{projectId}/mailaddresses`

**Zusammenfassung:** Create a MailAddress.

This route is deprecated. Please use /v2/projects/{projectId}/mail-addresses instead.

**Tags:** Mail

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the project to create a MailAddress for.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}/mailsettings`

**Zusammenfassung:** List mail settings of a Project.

This route is deprecated. Please use /v2/projects/{projectId}/mail-settings instead.

**Tags:** Mail

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to list mail settings for.
  - Schema: string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/projects/{projectId}/mailsettings/blacklist`

**Zusammenfassung:** Update blacklist for a given project ID

This operation is deprecated. Use the PATCH v2/{projectId}/mail-settings/{mailSetting} endpoint instead.

**Operation ID:** `deprecated-mail-projectsetting-update-blacklist`

**Tags:** Mail

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the project you want to update blacklist for
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `blacklist` (erforderlich): Array<string (idn-email)>

**Responses:**

- **200**
  - OK
- **403**
  - You do not have the permissions to access this content
- **404**
  - A projectsetting with the specified id was not found
- **429**
- **500**
  - Internal server error
- **503**
  - The service is unavailable.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/projects/{projectId}/mailsettings/whitelist`

**Zusammenfassung:** Update whitelist for a given project ID

This operation is deprecated. Use the PATCH v2/{projectId}/mail-settings/{mailSetting} endpoint instead.

**Operation ID:** `deprecated-mail-projectsetting-update-whitelist`

**Tags:** Mail

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the project you want to update whitelist for
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `whitelist` (erforderlich): Array<string (idn-email)>

**Responses:**

- **200**
  - OK
- **403**
  - You do not have the permissions to access this content
- **404**
  - A projectsetting with the specified id was not found
- **429**
- **500**
  - Internal server error
- **503**
  - The service is unavailable.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---


### Marketplace

#### `POST /v2/authenticate-session-token`

**Zusammenfassung:** Authenticate your external application using a session token and an extension secret

**Operation ID:** `extension-authenticate-with-session-token`

**Tags:** Marketplace

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `extensionSecret`: string
  - `sessionToken` (erforderlich): string

**Responses:**

- **201**
  - You received a public token with a short expiry. You can now perform domain actions.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `expiry` (erforderlich): string (date-time)
    - `publicToken` (erforderlich): string
- **400**
- **404**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/contributors`

**Zusammenfassung:** List Contributors.

**Operation ID:** `extension-list-contributors`

**Tags:** Marketplace

**Parameter:**

- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer
- `sort` (query) (optional)
  - Sort the result by this field.
  - Schema: string - Enum: `name` (Standard: `name`)
- `order` (query) (optional)
  - Should the result be sorted ascending or descending? Default ascending.
  - Schema: string - Enum: `asc`, `desc` (Standard: `asc`)

**Responses:**

- **200**
  - A List of Contributors within the mStudio.

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.marketplace.Contributor` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.marketplace.Contributor` (siehe Schema-Definition)
- **429**
- **default**

**Security:**


---

#### `GET /v2/contributors/{contributorId}`

**Zusammenfassung:** Get a Contributor.

**Operation ID:** `extension-get-contributor`

**Tags:** Marketplace

**Parameter:**

- `contributorId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
- **404**
- **429**
- **default**

**Security:**


---

#### `DELETE /v2/contributors/{contributorId}`

**Zusammenfassung:** Delete a Contributor.

**Operation ID:** `contributor-delete-contributor`

**Tags:** Marketplace

**Parameter:**

- `contributorId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **204**
  - The Contributor has been deleted.
- **404**
- **412**
  - The contributor still has subresources like OAuth2 Clients or Extensions and therefore can't be deleted
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/contributors/{contributorId}`

**Zusammenfassung:** Patch Contributor.

**Operation ID:** `contributor-patch-contributor`

**Tags:** Marketplace

**Parameter:**

- `contributorId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `contactPersonUserId`: string
  - `descriptions`: 
  - `deviatingContractOwner`: 
  - `deviatingName`: string
  - `deviatingSupportInformation`: 
  - `homepage`: string
  - `imprint`: `de.mittwald.v1.marketplace.ContributorImprint` (siehe Schema-Definition)

**Responses:**

- **200**
  - Contributor has been patched.

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.marketplace.OwnContributor` (siehe Schema-Definition)
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/contributors/{contributorId}`

**Zusammenfassung:** Get a Contributor.

**Operation ID:** `extension-get-contributor`

**Tags:** Marketplace

**Parameter:**

- `contributorId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
- **404**
- **429**
- **default**

**Security:**


---

#### `DELETE /v2/contributors/{contributorId}`

**Zusammenfassung:** Delete a Contributor.

**Operation ID:** `contributor-delete-contributor`

**Tags:** Marketplace

**Parameter:**

- `contributorId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **204**
  - The Contributor has been deleted.
- **404**
- **412**
  - The contributor still has subresources like OAuth2 Clients or Extensions and therefore can't be deleted
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/contributors/{contributorId}`

**Zusammenfassung:** Patch Contributor.

**Operation ID:** `contributor-patch-contributor`

**Tags:** Marketplace

**Parameter:**

- `contributorId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `contactPersonUserId`: string
  - `descriptions`: 
  - `deviatingContractOwner`: 
  - `deviatingName`: string
  - `deviatingSupportInformation`: 
  - `homepage`: string
  - `imprint`: `de.mittwald.v1.marketplace.ContributorImprint` (siehe Schema-Definition)

**Responses:**

- **200**
  - Contributor has been patched.

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.marketplace.OwnContributor` (siehe Schema-Definition)
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/contributors/{contributorId}`

**Zusammenfassung:** Get a Contributor.

**Operation ID:** `extension-get-contributor`

**Tags:** Marketplace

**Parameter:**

- `contributorId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
- **404**
- **429**
- **default**

**Security:**


---

#### `DELETE /v2/contributors/{contributorId}`

**Zusammenfassung:** Delete a Contributor.

**Operation ID:** `contributor-delete-contributor`

**Tags:** Marketplace

**Parameter:**

- `contributorId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **204**
  - The Contributor has been deleted.
- **404**
- **412**
  - The contributor still has subresources like OAuth2 Clients or Extensions and therefore can't be deleted
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/contributors/{contributorId}`

**Zusammenfassung:** Patch Contributor.

**Operation ID:** `contributor-patch-contributor`

**Tags:** Marketplace

**Parameter:**

- `contributorId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `contactPersonUserId`: string
  - `descriptions`: 
  - `deviatingContractOwner`: 
  - `deviatingName`: string
  - `deviatingSupportInformation`: 
  - `homepage`: string
  - `imprint`: `de.mittwald.v1.marketplace.ContributorImprint` (siehe Schema-Definition)

**Responses:**

- **200**
  - Contributor has been patched.

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.marketplace.OwnContributor` (siehe Schema-Definition)
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/contributors/{contributorId}/avatar`

**Zusammenfassung:** Add a deviating avatar to a Contributor.

**Operation ID:** `contributor-request-deviating-contributor-avatar-upload`

**Tags:** Marketplace

**Parameter:**

- `contributorId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **200**
  - The Upload of an avatar for the contributor has been requested.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `avatarRefId` (erforderlich): string (uuid)
    - `rules` (erforderlich): Object
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/contributors/{contributorId}/avatar`

**Zusammenfassung:** Delete deviating contributor avatar und return to the inherited customer avatar.

**Operation ID:** `contributor-reset-contributor-avatar`

**Tags:** Marketplace

**Parameter:**

- `contributorId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **204**
  - Returned to the inherited customer avatar.
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/contributors/{contributorId}/avatar`

**Zusammenfassung:** Add a deviating avatar to a Contributor.

**Operation ID:** `contributor-request-deviating-contributor-avatar-upload`

**Tags:** Marketplace

**Parameter:**

- `contributorId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **200**
  - The Upload of an avatar for the contributor has been requested.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `avatarRefId` (erforderlich): string (uuid)
    - `rules` (erforderlich): Object
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/contributors/{contributorId}/avatar`

**Zusammenfassung:** Delete deviating contributor avatar und return to the inherited customer avatar.

**Operation ID:** `contributor-reset-contributor-avatar`

**Tags:** Marketplace

**Parameter:**

- `contributorId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **204**
  - Returned to the inherited customer avatar.
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/contributors/{contributorId}/billing-information`

**Zusammenfassung:** Get Contributor Billing Information.

**Operation ID:** `contributor-get-billing-information`

**Tags:** Marketplace

**Parameter:**

- `contributorId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **200**
  - The billing related information of the Contributor

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `contributorId`: string (uuid)
    - `invoiceFooter`: string
    - `onboardingStatus`: string - Enum: `NOT_STARTED`, `STARTED`, `SUCCESSFUL`
    - `stripeAccountId`: string
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/contributors/{contributorId}/billing-information`

**Zusammenfassung:** Update Contributor Billing Information.

**Operation ID:** `contributor-update-billing-information`

**Tags:** Marketplace

**Parameter:**

- `contributorId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `invoiceFooter`: string

**Responses:**

- **200**
  - The billing related information of the Contributor

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `contributorId`: string (uuid)
    - `invoiceFooter`: string
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/contributors/{contributorId}/billing-information`

**Zusammenfassung:** Get Contributor Billing Information.

**Operation ID:** `contributor-get-billing-information`

**Tags:** Marketplace

**Parameter:**

- `contributorId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **200**
  - The billing related information of the Contributor

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `contributorId`: string (uuid)
    - `invoiceFooter`: string
    - `onboardingStatus`: string - Enum: `NOT_STARTED`, `STARTED`, `SUCCESSFUL`
    - `stripeAccountId`: string
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/contributors/{contributorId}/billing-information`

**Zusammenfassung:** Update Contributor Billing Information.

**Operation ID:** `contributor-update-billing-information`

**Tags:** Marketplace

**Parameter:**

- `contributorId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `invoiceFooter`: string

**Responses:**

- **200**
  - The billing related information of the Contributor

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `contributorId`: string (uuid)
    - `invoiceFooter`: string
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/contributors/{contributorId}/contract-partners`

**Zusammenfassung:** List ContractPartners of the contributor.

**Operation ID:** `contributor-list-contract-partners-of-contributor`

**Tags:** Marketplace

**Parameter:**

- `contributorId` (path) **(erforderlich)**
  - Schema: string
- `extensionId` (query) (optional)
  - Schema: string (uuid)
- `extensionInstanceId` (query) (optional)
  - Returns an array with a single result.
  - Schema: string (uuid)

**Responses:**

- **200**
  - A list of contract partners.

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.marketplace.ContractPartner` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.marketplace.ContractPartner` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/contributors/{contributorId}/dashboard`

**Zusammenfassung:** Get the Stripe Dashboard Link for a Contributor.

Get the Stripe Dashboard Link for a Contributor.

**Operation ID:** `contributor-get-login-link`

**Tags:** Marketplace

**Parameter:**

- `contributorId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **200**
  - The generated link to the Stripe dashboard

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `url`: string
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/contributors/{contributorId}/extensions`

**Zusammenfassung:** List Extensions of own contributor.

**Operation ID:** `extension-list-own-extensions`

**Tags:** Marketplace

**Parameter:**

- `contributorId` (path) **(erforderlich)**
  - Schema: string
- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer

**Responses:**

- **200**
  - A list of extensions of the contributor.

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.marketplace.OwnExtension` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.marketplace.OwnExtension` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/contributors/{contributorId}/extensions`

**Zusammenfassung:** Register an Extension.

**Operation ID:** `extension-register-extension`

**Tags:** Marketplace

**Parameter:**

- `contributorId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `context`: `de.mittwald.v1.marketplace.Context` (siehe Schema-Definition)
  - `description`: string
  - `detailedDescriptions`: `de.mittwald.v1.marketplace.DetailedDescriptions` (siehe Schema-Definition)
  - `externalFrontend`: Array<`de.mittwald.v1.marketplace.ExternalComponent` (siehe Schema-Definition)>
  - `externalFrontends`: Array<`de.mittwald.v1.marketplace.ExternalComponent` (siehe Schema-Definition)>
  - `frontendFragments`: Object
  - `name` (erforderlich): string
  - `scopes`: Array<string>
  - `subTitle`: `de.mittwald.v1.marketplace.SubTitle` (siehe Schema-Definition)
  - `support`: `de.mittwald.v1.marketplace.SupportMeta` (siehe Schema-Definition)
  - `tags`: Array<string>
  - `webhookURLs`: 
  - `webhookUrls`: `de.mittwald.v1.marketplace.WebhookUrls` (siehe Schema-Definition)

**Responses:**

- **201**
  - The extension has been registered.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `id` (erforderlich): string (uuid)
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/contributors/{contributorId}/extensions`

**Zusammenfassung:** List Extensions of own contributor.

**Operation ID:** `extension-list-own-extensions`

**Tags:** Marketplace

**Parameter:**

- `contributorId` (path) **(erforderlich)**
  - Schema: string
- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer

**Responses:**

- **200**
  - A list of extensions of the contributor.

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.marketplace.OwnExtension` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.marketplace.OwnExtension` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/contributors/{contributorId}/extensions`

**Zusammenfassung:** Register an Extension.

**Operation ID:** `extension-register-extension`

**Tags:** Marketplace

**Parameter:**

- `contributorId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `context`: `de.mittwald.v1.marketplace.Context` (siehe Schema-Definition)
  - `description`: string
  - `detailedDescriptions`: `de.mittwald.v1.marketplace.DetailedDescriptions` (siehe Schema-Definition)
  - `externalFrontend`: Array<`de.mittwald.v1.marketplace.ExternalComponent` (siehe Schema-Definition)>
  - `externalFrontends`: Array<`de.mittwald.v1.marketplace.ExternalComponent` (siehe Schema-Definition)>
  - `frontendFragments`: Object
  - `name` (erforderlich): string
  - `scopes`: Array<string>
  - `subTitle`: `de.mittwald.v1.marketplace.SubTitle` (siehe Schema-Definition)
  - `support`: `de.mittwald.v1.marketplace.SupportMeta` (siehe Schema-Definition)
  - `tags`: Array<string>
  - `webhookURLs`: 
  - `webhookUrls`: `de.mittwald.v1.marketplace.WebhookUrls` (siehe Schema-Definition)

**Responses:**

- **201**
  - The extension has been registered.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `id` (erforderlich): string (uuid)
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/contributors/{contributorId}/extensions/{extensionId}`

**Zusammenfassung:** Get Extension of own contributor.

**Operation ID:** `extension-get-own-extension`

**Tags:** Marketplace

**Parameter:**

- `contributorId` (path) **(erforderlich)**
  - Schema: string
- `extensionId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **200**
  - Get your own extension.

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.marketplace.OwnExtension` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/contributors/{contributorId}/extensions/{extensionId}`

**Zusammenfassung:** Delete an extension.

Remove the Extension. Make sure that there are no instances for this extension

**Operation ID:** `extension-delete-extension`

**Tags:** Marketplace

**Parameter:**

- `contributorId` (path) **(erforderlich)**
  - Schema: string
- `extensionId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `reason`: string

**Responses:**

- **204**
  - The extension will be removed asynchronously
- **404**
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/contributors/{contributorId}/extensions/{extensionId}`

**Zusammenfassung:** Patch Extension.

**Operation ID:** `extension-patch-extension`

**Tags:** Marketplace

**Parameter:**

- `contributorId` (path) **(erforderlich)**
  - Schema: string
- `extensionId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `assets`: Array<string (uuid)>
  - `deprecation`: `de.mittwald.v1.marketplace.ExtensionDeprecation` (siehe Schema-Definition)
  - `description`: string
  - `detailedDescriptions`: 
  - `externalFrontends`: Array<`de.mittwald.v1.marketplace.ExternalComponent` (siehe Schema-Definition)>
  - `frontendFragments`: Object
  - `name`: string
  - `scopes`: Array<string>
  - `subTitle`: `de.mittwald.v1.marketplace.SubTitle` (siehe Schema-Definition)
  - `support`: `de.mittwald.v1.marketplace.SupportMeta` (siehe Schema-Definition)
  - `tags`: Array<string>
  - `webhookUrls`: 

**Responses:**

- **200**
  - The extension has been patched.

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.marketplace.OwnExtension` (siehe Schema-Definition)
- **400**
- **404**
- **409**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/contributors/{contributorId}/extensions/{extensionId}`

**Zusammenfassung:** Get Extension of own contributor.

**Operation ID:** `extension-get-own-extension`

**Tags:** Marketplace

**Parameter:**

- `contributorId` (path) **(erforderlich)**
  - Schema: string
- `extensionId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **200**
  - Get your own extension.

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.marketplace.OwnExtension` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/contributors/{contributorId}/extensions/{extensionId}`

**Zusammenfassung:** Delete an extension.

Remove the Extension. Make sure that there are no instances for this extension

**Operation ID:** `extension-delete-extension`

**Tags:** Marketplace

**Parameter:**

- `contributorId` (path) **(erforderlich)**
  - Schema: string
- `extensionId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `reason`: string

**Responses:**

- **204**
  - The extension will be removed asynchronously
- **404**
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/contributors/{contributorId}/extensions/{extensionId}`

**Zusammenfassung:** Patch Extension.

**Operation ID:** `extension-patch-extension`

**Tags:** Marketplace

**Parameter:**

- `contributorId` (path) **(erforderlich)**
  - Schema: string
- `extensionId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `assets`: Array<string (uuid)>
  - `deprecation`: `de.mittwald.v1.marketplace.ExtensionDeprecation` (siehe Schema-Definition)
  - `description`: string
  - `detailedDescriptions`: 
  - `externalFrontends`: Array<`de.mittwald.v1.marketplace.ExternalComponent` (siehe Schema-Definition)>
  - `frontendFragments`: Object
  - `name`: string
  - `scopes`: Array<string>
  - `subTitle`: `de.mittwald.v1.marketplace.SubTitle` (siehe Schema-Definition)
  - `support`: `de.mittwald.v1.marketplace.SupportMeta` (siehe Schema-Definition)
  - `tags`: Array<string>
  - `webhookUrls`: 

**Responses:**

- **200**
  - The extension has been patched.

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.marketplace.OwnExtension` (siehe Schema-Definition)
- **400**
- **404**
- **409**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/contributors/{contributorId}/extensions/{extensionId}`

**Zusammenfassung:** Get Extension of own contributor.

**Operation ID:** `extension-get-own-extension`

**Tags:** Marketplace

**Parameter:**

- `contributorId` (path) **(erforderlich)**
  - Schema: string
- `extensionId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **200**
  - Get your own extension.

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.marketplace.OwnExtension` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/contributors/{contributorId}/extensions/{extensionId}`

**Zusammenfassung:** Delete an extension.

Remove the Extension. Make sure that there are no instances for this extension

**Operation ID:** `extension-delete-extension`

**Tags:** Marketplace

**Parameter:**

- `contributorId` (path) **(erforderlich)**
  - Schema: string
- `extensionId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `reason`: string

**Responses:**

- **204**
  - The extension will be removed asynchronously
- **404**
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/contributors/{contributorId}/extensions/{extensionId}`

**Zusammenfassung:** Patch Extension.

**Operation ID:** `extension-patch-extension`

**Tags:** Marketplace

**Parameter:**

- `contributorId` (path) **(erforderlich)**
  - Schema: string
- `extensionId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `assets`: Array<string (uuid)>
  - `deprecation`: `de.mittwald.v1.marketplace.ExtensionDeprecation` (siehe Schema-Definition)
  - `description`: string
  - `detailedDescriptions`: 
  - `externalFrontends`: Array<`de.mittwald.v1.marketplace.ExternalComponent` (siehe Schema-Definition)>
  - `frontendFragments`: Object
  - `name`: string
  - `scopes`: Array<string>
  - `subTitle`: `de.mittwald.v1.marketplace.SubTitle` (siehe Schema-Definition)
  - `support`: `de.mittwald.v1.marketplace.SupportMeta` (siehe Schema-Definition)
  - `tags`: Array<string>
  - `webhookUrls`: 

**Responses:**

- **200**
  - The extension has been patched.

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.marketplace.OwnExtension` (siehe Schema-Definition)
- **400**
- **404**
- **409**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/contributors/{contributorId}/extensions/{extensionId}/assets`

**Zusammenfassung:** Add an asset to an extension.

**Operation ID:** `extension-request-asset-upload`

**Tags:** Marketplace

**Parameter:**

- `contributorId` (path) **(erforderlich)**
  - Schema: string
- `extensionId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `assetType` (erforderlich): string - Enum: `image`, `video`

**Responses:**

- **200**
  - The Upload of an asset for the extension has been requested.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `assetRefId` (erforderlich): string (uuid)
    - `rules` (erforderlich): Object
- **400**
- **404**
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/contributors/{contributorId}/extensions/{extensionId}/assets/{assetRefId}`

**Zusammenfassung:** Remove an asset of an extension.

**Operation ID:** `extension-remove-asset`

**Tags:** Marketplace

**Parameter:**

- `contributorId` (path) **(erforderlich)**
  - Schema: string
- `extensionId` (path) **(erforderlich)**
  - Schema: string (uuid)
- `assetRefId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **204**
  - The asset has been removed.
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/contributors/{contributorId}/extensions/{extensionId}/context`

**Zusammenfassung:** Change the context of an Extension.

**Operation ID:** `extension-change-context`

**Tags:** Marketplace

**Parameter:**

- `contributorId` (path) **(erforderlich)**
  - Schema: string
- `extensionId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `context` (erforderlich): `de.mittwald.v1.marketplace.Context` (siehe Schema-Definition)

**Responses:**

- **200**
  - The Extension context-change has been requested.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `cleaningUpInstances` (erforderlich): boolean
    - `currentContext` (erforderlich): `de.mittwald.v1.marketplace.Context` (siehe Schema-Definition)
    - `id` (erforderlich): string (uuid)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/contributors/{contributorId}/extensions/{extensionId}/extension-instances/{extensionInstanceId}/actions/dry-run/{webhookKind}`

**Zusammenfassung:** Dry run a webhook with random or given values.

**Operation ID:** `extension-dry-run-webhook`

**Tags:** Marketplace

**Parameter:**

- `contributorId` (path) **(erforderlich)**
  - Schema: string
- `extensionId` (path) **(erforderlich)**
  - Schema: string (uuid)
- `extensionInstanceId` (path) **(erforderlich)**
  - The ID of an extension instance. For this route it can be made up.
  - Schema: string (uuid)
- `webhookKind` (path) **(erforderlich)**
  - Schema: `de.mittwald.v1.marketplace.WebhookKind` (siehe Schema-Definition)
- `contextId` (query) (optional)
  - Define the contextId. If left empty, the contextId will be random.
  - Schema: string
- `scopes` (query) (optional)
  - Define the scopes. If left empty, the scopes will be those defined in the extension.
  - Schema: Array<string>
- `instanceDisabled` (query) (optional)
  - Define the `disabled` state of the extension instance. If left empty, the it will be random.
  - Schema: boolean
- `createdAt` (query) (optional)
  - Define the creation timestamp of the extension instance. If left empty, the it will be random.
  - Schema: string (date-time)
- `secret` (query) (optional)
  - Define the secret of the extension instance. If left empty, the it will be random. This secret will not be able to be used.
  - Schema: string

**Responses:**

- **200**
  - The webhook has been run successfully.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `errorMessage`: string
    - `responseBody`: string
    - `responseCode`: number
    - `responseHeaders`: string
    - `routeCalled` (erforderlich): string
    - `successful` (erforderlich): boolean
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/contributors/{contributorId}/extensions/{extensionId}/extension-instances/{extensionInstanceId}/secret`

**Zusammenfassung:** Rotate the secret for an extension instance.

**Operation ID:** `contributor-rotate-secret-for-extension-instance`

**Tags:** Marketplace

**Parameter:**

- `contributorId` (path) **(erforderlich)**
  - Schema: string
- `extensionId` (path) **(erforderlich)**
  - Schema: string (uuid)
- `extensionInstanceId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `allowWebhookFailure`: boolean

**Responses:**

- **200**
  - Secret rotated successfully.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `secret` (erforderlich): string
    - `webhookResult` (erforderlich): Object
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/contributors/{contributorId}/extensions/{extensionId}/logo`

**Zusammenfassung:** Add a logo to an extension.

**Operation ID:** `extension-request-logo-upload`

**Tags:** Marketplace

**Parameter:**

- `contributorId` (path) **(erforderlich)**
  - Schema: string
- `extensionId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **200**
  - The Upload of a logo for the extension has been requested.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `logoRefId` (erforderlich): string (uuid)
    - `rules` (erforderlich): Object
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/contributors/{contributorId}/extensions/{extensionId}/logo`

**Zusammenfassung:** Remove the logo of an extension.

**Operation ID:** `extension-remove-logo`

**Tags:** Marketplace

**Parameter:**

- `contributorId` (path) **(erforderlich)**
  - Schema: string
- `extensionId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **204**
  - The Logo has been removed.
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/contributors/{contributorId}/extensions/{extensionId}/logo`

**Zusammenfassung:** Add a logo to an extension.

**Operation ID:** `extension-request-logo-upload`

**Tags:** Marketplace

**Parameter:**

- `contributorId` (path) **(erforderlich)**
  - Schema: string
- `extensionId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **200**
  - The Upload of a logo for the extension has been requested.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `logoRefId` (erforderlich): string (uuid)
    - `rules` (erforderlich): Object
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/contributors/{contributorId}/extensions/{extensionId}/logo`

**Zusammenfassung:** Remove the logo of an extension.

**Operation ID:** `extension-remove-logo`

**Tags:** Marketplace

**Parameter:**

- `contributorId` (path) **(erforderlich)**
  - Schema: string
- `extensionId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **204**
  - The Logo has been removed.
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/contributors/{contributorId}/extensions/{extensionId}/pricing`

**Zusammenfassung:** Creates or Updates Pricing for an Extension.

The Pricing is needed to publish paid extensions.

**Operation ID:** `extension-update-extension-pricing`

**Tags:** Marketplace

**Parameter:**

- `extensionId` (path) **(erforderlich)**
  - Schema: string (uuid)
- `contributorId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **200**
  - The Pricing has been updated.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `extensionId` (erforderlich): string (uuid)
    - `nextPossiblePriceChange`: string (date-time)
    - `priceChangeConsequence` (erforderlich): Object
- **400**
- **404**
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/contributors/{contributorId}/extensions/{extensionId}/published`

**Zusammenfassung:** Publish or withdraw an Extension.

**Operation ID:** `extension-set-extension-published-state`

**Tags:** Marketplace

**Parameter:**

- `contributorId` (path) **(erforderlich)**
  - Schema: string
- `extensionId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `published` (erforderlich): boolean (Standard: `True`)
  - `reason`: string

**Responses:**

- **200**
  - The Extension visibility has been adjusted.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `id` (erforderlich): string (uuid)
    - `published` (erforderlich): boolean
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/contributors/{contributorId}/extensions/{extensionId}/secret`

**Zusammenfassung:** Generate an Extension secret for the given Extension.

This generates a new Extension secret for the given Extension.
If an Extension secret existed previously, it will deprecate the existing secret.
This means, it will be invalidated after approximately one day.


**Operation ID:** `extension-generate-extension-secret`

**Tags:** Marketplace

**Parameter:**

- `contributorId` (path) **(erforderlich)**
  - Schema: string
- `extensionId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **200**
  - A new Extension secret has been generated.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `secret` (erforderlich): string
    - `secretId` (erforderlich): string (uuid)
- **400**
- **404**
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/contributors/{contributorId}/extensions/{extensionId}/secret/{extensionSecretId}`

**Zusammenfassung:** Invalidate the given Extension secret immediately.

**Operation ID:** `extension-invalidate-extension-secret`

**Tags:** Marketplace

**Parameter:**

- `contributorId` (path) **(erforderlich)**
  - Schema: string
- `extensionId` (path) **(erforderlich)**
  - Schema: string (uuid)
- `extensionSecretId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **204**
  - The Extension secret has been invalidated and cannot be used anymore.
- **400**
- **404**
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/contributors/{contributorId}/extensions/{extensionId}/verification-process`

**Zusammenfassung:** Start the verification process of an Extension.

**Operation ID:** `extension-request-extension-verification`

**Tags:** Marketplace

**Parameter:**

- `contributorId` (path) **(erforderlich)**
  - Schema: string
- `extensionId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **204**
  - The verification has been requested.

  - **Content-Type:** `application/json`
    - Schema: Object
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/contributors/{contributorId}/invoices/incoming`

**Zusammenfassung:** List incoming Invoices of a Contributor.

**Operation ID:** `contributor-list-incoming-invoices`

**Tags:** Marketplace

**Parameter:**

- `contributorId` (path) **(erforderlich)**
  - Schema: string
- `search` (query) (optional)
  - Search Invoice by number or id
  - Schema: string
- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer
- `sort` (query) (optional)
  - List of fields how the result should be sorted.
  - Schema: Array<string - Enum: `invoiceNumber`>
- `order` (query) (optional)
  - Should the result be sorted ascending or descending? You can specify for each field another sorting: sort[0]=foo, order[0]=asc, sort[1]=bar, order[1]=desc.
  - Schema: Array<string - Enum: `asc`, `desc`>

**Responses:**

- **200**
  - List of incoming Invoices

  - **Content-Type:** `application/json`
    - Schema: Array<Object>
    **Array Items:** Object
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/contributors/{contributorId}/invoices/incoming/{contributorReceiptId}/file-access-token`

**Zusammenfassung:** Request an Access Token for the Incoming Invoice file.

**Operation ID:** `contributor-receipt-get-file-access-token`

**Tags:** Marketplace

**Parameter:**

- `contributorId` (path) **(erforderlich)**
  - Schema: string
- `contributorReceiptId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **200**
  - The File Access Token required to access the Incoming Invoice file.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `accessToken` (erforderlich): string
    - `expiresAt` (erforderlich): string (date-time)
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/contributors/{contributorId}/invoices/outgoing`

**Zusammenfassung:** List all invoices on behalf of a contributor.

List all invoices on behalf of a contributor.

**Operation ID:** `contributor-list-onbehalf-invoices`

**Tags:** Marketplace

**Parameter:**

- `contributorId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **200**
  - The list of invoices on behalf of a contributor.

  - **Content-Type:** `application/json`
    - Schema: Array<Object>
    **Array Items:** Object
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/contributors/{contributorId}/onboarding-process`

**Zusammenfassung:** Create the OnboardingProcess of a Contributor.

The OnboardingProcess is needed to publish paid extensions.

**Operation ID:** `extension-create-contributor-onboarding-process`

**Tags:** Marketplace

**Parameter:**

- `contributorId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `shippingCountryRestriction` (erforderlich): string - Enum: `onlyDomestic`

**Responses:**

- **201**
  - The Process has been started.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `contributorId`: string (uuid)
    - `onboardingLink`: string
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/contributors/{contributorId}/verification-process`

**Zusammenfassung:** Start the verification process of a contributor.

**Operation ID:** `contributor-request-verification`

**Tags:** Marketplace

**Parameter:**

- `contributorId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **204**
  - The verification process has been started.
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/contributors/{contributorId}/verification-process`

**Zusammenfassung:** Cancel the verification-process of a contributor.

**Operation ID:** `contributor-cancel-verification`

**Tags:** Marketplace

**Parameter:**

- `contributorId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **204**
  - The verification process has been cancelled.
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/contributors/{contributorId}/verification-process`

**Zusammenfassung:** Start the verification process of a contributor.

**Operation ID:** `contributor-request-verification`

**Tags:** Marketplace

**Parameter:**

- `contributorId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **204**
  - The verification process has been started.
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/contributors/{contributorId}/verification-process`

**Zusammenfassung:** Cancel the verification-process of a contributor.

**Operation ID:** `contributor-cancel-verification`

**Tags:** Marketplace

**Parameter:**

- `contributorId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **204**
  - The verification process has been cancelled.
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/customers/{customerId}/billing-portal`

**Zusammenfassung:** Get the Stripe Billing Portal Link for a Customer

Get the Stripe Billing Portal Link for a Customer.

**Operation ID:** `contributor-get-customer-billing-portal-link`

**Tags:** Marketplace

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **200**
  - The generated link to the Stripe Billing Portal

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `url`: string
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/customers/{customerId}/contributor`

**Zusammenfassung:** Express interest to be a contributor.

**Operation ID:** `contributor-express-interest-to-contribute`

**Tags:** Marketplace

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - The ID of the customer who wants to be a contributor.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `deviatingContactPersonUserId`: string (uuid)
  - `deviatingContractOwner`: `de.mittwald.v1.commons.Contact` (siehe Schema-Definition)
  - `deviatingName`: string
  - `deviatingSupportInformation`: `de.mittwald.v1.marketplace.SupportMeta` (siehe Schema-Definition)
  - `imprint`: `de.mittwald.v1.marketplace.ContributorImprint` (siehe Schema-Definition)

**Responses:**

- **201**
  - Customer became an unverified contributor.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `id` (erforderlich): string
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/customers/{customerId}/extension-orders`

**Zusammenfassung:** Get all open extension orders for given customer

**Operation ID:** `extension-get-customer-extension-instance-orders`

**Tags:** Marketplace

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **200**

  - **Content-Type:** `application/json`
    - Schema: Array<Object>
    **Array Items:** Object
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/customers/{customerId}/extensions/{extensionId}`

**Zusammenfassung:** Get the ExtensionInstance of a specific customer and extension, if existing.

**Operation ID:** `extension-get-extension-instance-for-customer`

**Tags:** Marketplace

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string
- `extensionId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.marketplace.ExtensionInstance` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/customers/{customerId}/payment-method`

**Zusammenfassung:** Get payment method details

**Operation ID:** `marketplace-customer-get-payment-method`

**Tags:** Marketplace

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **200**
  - The payment method details

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `cardDetails`: Object
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/customers/{customerId}/payment-method`

**Zusammenfassung:** Get the link to update the marketplace payment method

**Operation ID:** `marketplace-customer-update-payment-method`

**Tags:** Marketplace

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `customReturnUrl`: string (uri)

**Responses:**

- **200**
  - The generated link to the Stripe payment method setup

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `url`: string
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/customers/{customerId}/payment-method`

**Zusammenfassung:** Get payment method details

**Operation ID:** `marketplace-customer-get-payment-method`

**Tags:** Marketplace

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **200**
  - The payment method details

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `cardDetails`: Object
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/customers/{customerId}/payment-method`

**Zusammenfassung:** Get the link to update the marketplace payment method

**Operation ID:** `marketplace-customer-update-payment-method`

**Tags:** Marketplace

**Parameter:**

- `customerId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `customReturnUrl`: string (uri)

**Responses:**

- **200**
  - The generated link to the Stripe payment method setup

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `url`: string
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/extension-instances`

**Zusammenfassung:** List ExtensionInstances.

**Operation ID:** `extension-list-extension-instances`

**Tags:** Marketplace

**Parameter:**

- `context` (query) (optional)
  - Schema: `de.mittwald.v1.marketplace.Context` (siehe Schema-Definition)
- `contextId` (query) (optional)
  - The ID of your customer or project.
  - Schema: string
- `extensionId` (query) (optional)
  - Schema: string (uuid)
- `searchTerm` (query) (optional)
  - Schema: string
- `anchor` (query) (optional)
  - Schema: string
- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer
- `sort` (query) (optional)
  - List of fields how the result should be sorted.
  - Schema: Array<string - Enum: `createdAt`, `extensionId`, `extensionName`>
- `order` (query) (optional)
  - Should the result be sorted ascending or descending? You can specify for each field another sorting: sort[0]=foo, order[0]=asc, sort[1]=bar, order[1]=desc.
  - Schema: Array<string - Enum: `asc`, `desc`>

**Responses:**

- **200**
  - A list of extension instances.

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.marketplace.ExtensionInstance` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.marketplace.ExtensionInstance` (siehe Schema-Definition)
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/extension-instances`

**Zusammenfassung:** Create an ExtensionInstance.

**Operation ID:** `extension-create-extension-instance`

**Tags:** Marketplace

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `consentedScopes` (erforderlich): Array<string>
  - `context` (erforderlich): `de.mittwald.v1.marketplace.Context` (siehe Schema-Definition)
  - `contextId` (erforderlich): string (uuid)
  - `extensionId` (erforderlich): string (uuid)
  - `variantKey`: string

**Responses:**

- **201**
  - The ExtensionInstance ID.

  - **Content-Type:** `application/json`
- **400**
- **403**
  - You either have insufficient access to the extension context or are not allowed to install this extension for free. In the latter case, you need to order the extension instead via POST /v2/extensions/{extensionId}/checkout

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.commons.Error` (siehe Schema-Definition)
- **404**
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/extension-instances`

**Zusammenfassung:** List ExtensionInstances.

**Operation ID:** `extension-list-extension-instances`

**Tags:** Marketplace

**Parameter:**

- `context` (query) (optional)
  - Schema: `de.mittwald.v1.marketplace.Context` (siehe Schema-Definition)
- `contextId` (query) (optional)
  - The ID of your customer or project.
  - Schema: string
- `extensionId` (query) (optional)
  - Schema: string (uuid)
- `searchTerm` (query) (optional)
  - Schema: string
- `anchor` (query) (optional)
  - Schema: string
- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer
- `sort` (query) (optional)
  - List of fields how the result should be sorted.
  - Schema: Array<string - Enum: `createdAt`, `extensionId`, `extensionName`>
- `order` (query) (optional)
  - Should the result be sorted ascending or descending? You can specify for each field another sorting: sort[0]=foo, order[0]=asc, sort[1]=bar, order[1]=desc.
  - Schema: Array<string - Enum: `asc`, `desc`>

**Responses:**

- **200**
  - A list of extension instances.

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.marketplace.ExtensionInstance` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.marketplace.ExtensionInstance` (siehe Schema-Definition)
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/extension-instances`

**Zusammenfassung:** Create an ExtensionInstance.

**Operation ID:** `extension-create-extension-instance`

**Tags:** Marketplace

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `consentedScopes` (erforderlich): Array<string>
  - `context` (erforderlich): `de.mittwald.v1.marketplace.Context` (siehe Schema-Definition)
  - `contextId` (erforderlich): string (uuid)
  - `extensionId` (erforderlich): string (uuid)
  - `variantKey`: string

**Responses:**

- **201**
  - The ExtensionInstance ID.

  - **Content-Type:** `application/json`
- **400**
- **403**
  - You either have insufficient access to the extension context or are not allowed to install this extension for free. In the latter case, you need to order the extension instead via POST /v2/extensions/{extensionId}/checkout

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.commons.Error` (siehe Schema-Definition)
- **404**
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/extension-instances/{extensionInstanceId}`

**Zusammenfassung:** Get an ExtensionInstance.

**Operation ID:** `extension-get-extension-instance`

**Tags:** Marketplace

**Parameter:**

- `extensionInstanceId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.marketplace.ExtensionInstance` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/extension-instances/{extensionInstanceId}`

**Zusammenfassung:** Delete a free ExtensionInstance. If the Extension is chargable the contract must be terminated instead.

**Operation ID:** `extension-delete-extension-instance`

**Tags:** Marketplace

**Parameter:**

- `extensionInstanceId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **204**
  - The ExtensionInstance has been removed. It will be cleaned up in the background.

  - **Content-Type:** `application/json`
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/extension-instances/{extensionInstanceId}`

**Zusammenfassung:** Get an ExtensionInstance.

**Operation ID:** `extension-get-extension-instance`

**Tags:** Marketplace

**Parameter:**

- `extensionInstanceId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.marketplace.ExtensionInstance` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/extension-instances/{extensionInstanceId}`

**Zusammenfassung:** Delete a free ExtensionInstance. If the Extension is chargable the contract must be terminated instead.

**Operation ID:** `extension-delete-extension-instance`

**Tags:** Marketplace

**Parameter:**

- `extensionInstanceId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **204**
  - The ExtensionInstance has been removed. It will be cleaned up in the background.

  - **Content-Type:** `application/json`
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/extension-instances/{extensionInstanceId}/actions/create-access-token-retrieval-key`

**Zusammenfassung:** Create an access token retrieval key for an extension instance.

**Operation ID:** `extension-create-retrieval-key`

**Tags:** Marketplace

**Parameter:**

- `extensionInstanceId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **200**
  - An access token retrieval key. This key can be used to retrieve a scoped access token from an external application.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `accessTokenRetrievalKey` (erforderlich): string
    - `userId` (erforderlich): string (uuid)
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/extension-instances/{extensionInstanceId}/actions/disable`

**Zusammenfassung:** Disable an ExtensionInstance.

**Operation ID:** `extension-disable-extension-instance`

**Tags:** Marketplace

**Parameter:**

- `extensionInstanceId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **204**
  - NoContent

  - **Content-Type:** `application/json`
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/extension-instances/{extensionInstanceId}/actions/enable`

**Zusammenfassung:** Enable an ExtensionInstance.

**Operation ID:** `extension-enable-extension-instance`

**Tags:** Marketplace

**Parameter:**

- `extensionInstanceId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **204**
  - NoContent

  - **Content-Type:** `application/json`
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/extension-instances/{extensionInstanceId}/contract`

**Zusammenfassung:** Get the Contract Strategy of an Extension Instance

**Operation ID:** `extension-get-extension-instance-contract`

**Tags:** Marketplace

**Parameter:**

- `extensionInstanceId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **200**

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.extension.ExtensionInstanceContract` (siehe Schema-Definition)
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/extension-instances/{extensionInstanceId}/contract`

**Zusammenfassung:** Update or Create Contract for existing Extension Instances.

Call to update Contract for existing Extension Instances. For example to accept a new Pricing.

**Operation ID:** `extension-update-extension-instance-contract`

**Tags:** Marketplace

**Parameter:**

- `extensionInstanceId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `variantKey`: string

**Responses:**

- **200**
  - The Price Update has successfully confirmed.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/extension-instances/{extensionInstanceId}/contract`

**Zusammenfassung:** Get the Contract Strategy of an Extension Instance

**Operation ID:** `extension-get-extension-instance-contract`

**Tags:** Marketplace

**Parameter:**

- `extensionInstanceId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **200**

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.extension.ExtensionInstanceContract` (siehe Schema-Definition)
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/extension-instances/{extensionInstanceId}/contract`

**Zusammenfassung:** Update or Create Contract for existing Extension Instances.

Call to update Contract for existing Extension Instances. For example to accept a new Pricing.

**Operation ID:** `extension-update-extension-instance-contract`

**Tags:** Marketplace

**Parameter:**

- `extensionInstanceId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `variantKey`: string

**Responses:**

- **200**
  - The Price Update has successfully confirmed.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/extension-instances/{extensionInstanceId}/contract/variant-change`

**Zusammenfassung:** Schedule an Extension Instance Variant change for the next possible date.

**Operation ID:** `extension-schedule-extension-variant-change`

**Tags:** Marketplace

**Parameter:**

- `extensionInstanceId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `targetVariantKey`: string

**Responses:**

- **201**
  - A Variant Change was scheduled.

  - **Content-Type:** `application/json`
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/extension-instances/{extensionInstanceId}/contract/variant-change`

**Zusammenfassung:** Cancel an Extension Instance Variant Change.

**Operation ID:** `extension-cancel-extension-variant-change`

**Tags:** Marketplace

**Parameter:**

- `extensionInstanceId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** Object

**Responses:**

- **200**
  - The Variant Change was cancelled.

  - **Content-Type:** `application/json`
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/extension-instances/{extensionInstanceId}/contract/variant-change`

**Zusammenfassung:** Schedule an Extension Instance Variant change for the next possible date.

**Operation ID:** `extension-schedule-extension-variant-change`

**Tags:** Marketplace

**Parameter:**

- `extensionInstanceId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `targetVariantKey`: string

**Responses:**

- **201**
  - A Variant Change was scheduled.

  - **Content-Type:** `application/json`
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/extension-instances/{extensionInstanceId}/contract/variant-change`

**Zusammenfassung:** Cancel an Extension Instance Variant Change.

**Operation ID:** `extension-cancel-extension-variant-change`

**Tags:** Marketplace

**Parameter:**

- `extensionInstanceId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** Object

**Responses:**

- **200**
  - The Variant Change was cancelled.

  - **Content-Type:** `application/json`
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/extension-instances/{extensionInstanceId}/scopes`

**Zusammenfassung:** Consent to extension scopes.

**Operation ID:** `extension-consent-to-extension-scopes`

**Tags:** Marketplace

**Parameter:**

- `extensionInstanceId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `consentedScopes` (erforderlich): Array<string>

**Responses:**

- **204**
  - NoContent
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/extension-instances/{extensionInstanceId}/sessions/{sessionId}`

**Zusammenfassung:** Generate a session token to transmit it to the extensions frontend fragment.

**Operation ID:** `extension-generate-session-token`

**Tags:** Marketplace

**Parameter:**

- `extensionInstanceId` (path) **(erforderlich)**
  - Schema: string (uuid)
- `sessionId` (path) **(erforderlich)**
  - ID of the session. Use this to receive session tokens with a stable identifier so that extensions have the possibility to store session information.
  - Schema: string (uuid)

**Responses:**

- **200**
  - The generated session token

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `sessionToken` (erforderlich): string
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/extension-instances/{extensionInstanceId}/termination`

**Zusammenfassung:** Schedule an Extension Instance Termination for the next possible date.

**Operation ID:** `extension-schedule-extension-termination`

**Tags:** Marketplace

**Parameter:**

- `extensionInstanceId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `instantTermination`: boolean

**Responses:**

- **201**
  - A Termination was scheduled.

  - **Content-Type:** `application/json`
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/extension-instances/{extensionInstanceId}/termination`

**Zusammenfassung:** Cancel an Extension Instance Termination.

**Operation ID:** `extension-cancel-extension-termination`

**Tags:** Marketplace

**Parameter:**

- `extensionInstanceId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** Object

**Responses:**

- **200**
  - The Termination was cancelled.

  - **Content-Type:** `application/json`
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/extension-instances/{extensionInstanceId}/termination`

**Zusammenfassung:** Schedule an Extension Instance Termination for the next possible date.

**Operation ID:** `extension-schedule-extension-termination`

**Tags:** Marketplace

**Parameter:**

- `extensionInstanceId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `instantTermination`: boolean

**Responses:**

- **201**
  - A Termination was scheduled.

  - **Content-Type:** `application/json`
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/extension-instances/{extensionInstanceId}/termination`

**Zusammenfassung:** Cancel an Extension Instance Termination.

**Operation ID:** `extension-cancel-extension-termination`

**Tags:** Marketplace

**Parameter:**

- `extensionInstanceId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** Object

**Responses:**

- **200**
  - The Termination was cancelled.

  - **Content-Type:** `application/json`
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/extension-instances/{extensionInstanceId}/tokens`

**Zusammenfassung:** Authenticate your external application using the extensionInstanceSecret.

**Operation ID:** `extension-authenticate-instance`

**Tags:** Marketplace

**Parameter:**

- `extensionInstanceId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `extensionInstanceSecret` (erforderlich): string

**Responses:**

- **201**
  - You received a public token with a short expiry. You can now perform domain actions.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `expiry` (erforderlich): string (date-time)
    - `publicToken` (erforderlich): string
- **400**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/extensions`

**Zusammenfassung:** List Extensions.

**Operation ID:** `extension-list-extensions`

**Tags:** Marketplace

**Parameter:**

- `context` (query) (optional)
  - Schema: `de.mittwald.v1.marketplace.Context` (siehe Schema-Definition)
- `searchTerm` (query) (optional)
  - Schema: string
- `includeDeprecated` (query) (optional)
  - Schema: boolean
- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer (Standard: `1000`)
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer
- `sort` (query) (optional)
  - Sort the result by this field.
  - Schema: string - Enum: `name` (Standard: `name`)
- `order` (query) (optional)
  - Should the result be sorted ascending or descending? Default ascending.
  - Schema: string - Enum: `asc`, `desc` (Standard: `asc`)

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.marketplace.Extension` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.marketplace.Extension` (siehe Schema-Definition)
- **429**
- **default**

**Security:**


---

#### `GET /v2/extensions/{extensionId}`

**Zusammenfassung:** Get an Extension.

**Operation ID:** `extension-get-extension`

**Tags:** Marketplace

**Parameter:**

- `extensionId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
- **404**
- **429**
- **default**

**Security:**


---

#### `POST /v2/extensions/{extensionId}/order`

**Zusammenfassung:** Order Extension with saved payment method

**Operation ID:** `extension-order-extension`

**Tags:** Marketplace

**Parameter:**

- `extensionId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`

**Responses:**

- **201**
  - Order successful. Extension will be installed in the background.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
- **400**
- **404**
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}/extension-orders`

**Zusammenfassung:** Get all open extension orders for given project

**Operation ID:** `extension-get-project-extension-instance-orders`

**Tags:** Marketplace

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **200**

  - **Content-Type:** `application/json`
    - Schema: Array<Object>
    **Array Items:** Object
- **400**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}/extensions/{extensionId}`

**Zusammenfassung:** Get the ExtensionInstance of a specific project and extension, if existing.

**Operation ID:** `extension-get-extension-instance-for-project`

**Tags:** Marketplace

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - Schema: string (uuid)
- `extensionId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.marketplace.ExtensionInstance` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/public-keys/{serial}`

**Zusammenfassung:** Get the public key to verify the webhook signature.

**Operation ID:** `extension-get-public-key`

**Tags:** Marketplace

**Parameter:**

- `serial` (path) **(erforderlich)**
  - The serial id of a specific public key. Use `latest` to get the latest public key.
  - Schema: string
- `purpose` (query) (optional)
  - The purpose of the public key. Use `webhook` to get the public key for webhook verification.
  - Schema: string - Enum: `webhook`, `session_token` (Standard: `webhook`)
- `format` (query) (optional)
  - The expected format of the public key. Defaults to raw base64 encoded.
  - Schema: string - Enum: `raw`, `spki` (Standard: `raw`)

**Responses:**

- **200**
  - Use this public key to verify the webhook signature on your end.

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.marketplace.PublicKey` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**


---

#### `GET /v2/scopes`

**Zusammenfassung:** List Scopes.

**Operation ID:** `extension-list-scopes`

**Tags:** Marketplace

**Responses:**

- **200**
  - A list of possible scopes for the mStudio.

  - **Content-Type:** `application/json`
    - Schema: Array<Object>
    **Array Items:** Object
- **429**
- **default**

---

#### `GET /v2/webhook-public-keys/{serial}`

**Zusammenfassung:** Get the public key to verify the webhook signature.

This route is deprecated. Please use /v2/public-keys/{serial} instead.

**Tags:** Marketplace

**Parameter:**

- `serial` (path) **(erforderlich)**
  - The serial id of a specific public key. Use `latest` to get the latest public key.
  - Schema: string
- `purpose` (query) (optional)
  - The purpose of the public key. Use `webhook` to get the public key for webhook verification.
  - Schema: string - Enum: `webhook`, `session_token` (Standard: `webhook`)
- `format` (query) (optional)
  - The expected format of the public key. Defaults to raw base64 encoded.
  - Schema: string - Enum: `raw`, `spki` (Standard: `raw`)

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**


---


### Misc

#### `POST /v2/actions/detect-phishing-email`

**Zusammenfassung:** Check if an email is from mittwald.

Parses the eml-file of an email to check if it is a phishing mail or a valid email from mittwald. In some cases we can't confirm the validity of an email.

**Operation ID:** `verification-detect-phishing-email`

**Tags:** Misc

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `multipart/form-data`
**Schema:** Object
  **Properties:**
  - `emailEml` (erforderlich): string (binary)

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.verification.EmailDetectPhishingMailResponse` (siehe Schema-Definition)
- **400**
- **429**
- **default**

**Security:**


---

#### `POST /v2/actions/verify-address`

**Zusammenfassung:** Check if an address exists.

Only the DACH region is currently supported.

**Operation ID:** `verification-verify-address`

**Tags:** Misc

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `city` (erforderlich): string
  - `country` (erforderlich): string
  - `street` (erforderlich): string
  - `zip` (erforderlich): string

**Responses:**

- **200**
  - Success

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `exists` (erforderlich): boolean
- **429**
- **500**
  - Internal Server Error
- **default**

**Security:**


---

#### `POST /v2/actions/verify-company`

**Zusammenfassung:** Check if a company exists.

Only companies registered in the german company register are currently supported.

**Operation ID:** `verification-verify-company`

**Tags:** Misc

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `name` (erforderlich): string

**Responses:**

- **200**
  - Success

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `exists` (erforderlich): boolean
- **412**
  - Precondition Failed
- **429**
- **500**
  - Internal Server Error
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/llm-models`

**Zusammenfassung:** Get a list of currently active llm models.

**Operation ID:** `misc-get-llm-models-experimental`

**Tags:** Misc

**Responses:**

- **200**
  - List of currently active llm models.


  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.aihosting.Model` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.aihosting.Model` (siehe Schema-Definition)
- **400**
- **403**
- **404**
- **429**
- **default**

---

#### `POST /v2/service/{accessKeyId}/actions/authenticate`

**Zusammenfassung:** Obtain a service token.

This route is deprecated. Please use /v2/services/{accessKeyId}/actions/authenticate instead.

**Tags:** Misc

**Parameter:**

- `accessKeyId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `secretAccessKey` (erforderlich): string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/services/{accessKeyId}/actions/authenticate`

**Zusammenfassung:** Obtain a service token.

**Operation ID:** `servicetoken-authenticate-service`

**Tags:** Misc

**Parameter:**

- `accessKeyId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `secretAccessKey` (erforderlich): string

**Responses:**

- **200**
  - Authentication has been successful.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `accessToken` (erforderlich): Object
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---


### Notification

#### `POST /v2/newsletter-subscriptions`

**Zusammenfassung:** Subscribe a user to the mStudio newsletter.

**Operation ID:** `newsletter-subscribe-user`

**Tags:** Notification

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `firstName`: string
  - `lastName`: string

**Responses:**

- **200**
  - Subscription information email has been sent.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `active` (erforderlich): boolean
    - `email` (erforderlich): string
    - `registered` (erforderlich): boolean
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/newsletter-subscriptions/self`

**Zusammenfassung:** Getting the subscription status of the subscription.

**Operation ID:** `newsletter-get-info`

**Tags:** Notification

**Responses:**

- **200**
  - Status information about the subscription.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `active` (erforderlich): boolean
    - `email` (erforderlich): string
    - `registered` (erforderlich): boolean
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/newsletter-subscriptions/self`

**Zusammenfassung:** Unsubscribe a user from the mStudio newsletter.

**Operation ID:** `newsletter-unsubscribe-user`

**Tags:** Notification

**Responses:**

- **204**
  - User has been unsubscribed.
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/newsletter-subscriptions/self`

**Zusammenfassung:** Getting the subscription status of the subscription.

**Operation ID:** `newsletter-get-info`

**Tags:** Notification

**Responses:**

- **200**
  - Status information about the subscription.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `active` (erforderlich): boolean
    - `email` (erforderlich): string
    - `registered` (erforderlich): boolean
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/newsletter-subscriptions/self`

**Zusammenfassung:** Unsubscribe a user from the mStudio newsletter.

**Operation ID:** `newsletter-unsubscribe-user`

**Tags:** Notification

**Responses:**

- **204**
  - User has been unsubscribed.
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/notification-unread-counts`

**Zusammenfassung:** Get the counts for unread notifications of the user.

The user is determined by the access token used.
Lighter weight route instead of getting all unread notifications and count yourself.


**Operation ID:** `notifications-count-unread-notifications`

**Tags:** Notification

**Parameter:**


**Responses:**

- **200**
  - Counts of unread notifications

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `error` (erforderlich): integer
    - `info` (erforderlich): integer
    - `success` (erforderlich): integer
    - `total` (erforderlich): integer
    - `warning` (erforderlich): integer
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/notifications`

**Zusammenfassung:** List all unread notifications.



**Operation ID:** `notifications-list-notifications`

**Tags:** Notification

**Parameter:**

- `status` (query) (optional)
  - Schema: string - Enum: `unread`, `read`
- `severity` (query) (optional)
  - Schema: Array<string - Enum: `success`, `info`, `warning`, `error`>
- `type` (query) (optional)
  - Schema: Array<string>
- `type-not` (query) (optional)
  - Schema: Array<string>
- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer (Standard: `500`)
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer

**Responses:**

- **200**
  - List of notifications

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.messaging.Notification` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.messaging.Notification` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/notifications/actions/read-all`

**Zusammenfassung:** Mark all notifications as read.

Mark all notifications for the authenticated user as read.

**Operation ID:** `notifications-read-all-notifications`

**Tags:** Notification

**Parameter:**

- `severities` (query) (optional)
  - Schema: Array<string - Enum: `success`, `info`, `warning`, `error`>
- `referenceId` (query) (optional)
  - Schema: string (uuid)
- `referenceAggregate` (query) (optional)
  - Schema: string
- `referenceDomain` (query) (optional)
  - Schema: string

**Request Body:**

Request Body (optional)



**Content-Type:** `application/json`
**Schema:** Object

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `status` (erforderlich): `de.mittwald.v1.messaging.NotificationStatus` (siehe Schema-Definition)
    - `updatedCount` (erforderlich): integer (int32)
- **403**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/notifications/status`

**Zusammenfassung:** Mark all notifications as read (deprecated).

Deprecated route. Please use /v2/notifications/actions/read-all instead.

**Operation ID:** `notifications-read-all-notifications-deprecated`

**Tags:** Notification

**Parameter:**


**Request Body:**

Request Body (optional)



**Content-Type:** `application/json`
**Schema:** Object

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `status` (erforderlich): `de.mittwald.v1.messaging.NotificationStatus` (siehe Schema-Definition)
- **403**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/notifications/unread-counts`

**Zusammenfassung:** Get the counts for unread notifications of the user.

This route is deprecated. Please use /v2/notification-unread-counts instead.

**Tags:** Notification

**Parameter:**


**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/notifications/{notificationId}/status`

**Zusammenfassung:** Mark notification as read.

**Operation ID:** `notifications-read-notification`

**Tags:** Notification

**Parameter:**

- `notificationId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**



**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `status` (erforderlich): `de.mittwald.v1.messaging.NotificationStatus` (siehe Schema-Definition)

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `status` (erforderlich): `de.mittwald.v1.messaging.NotificationStatus` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---


### Page Insights

#### `GET /v2/page-insights`

**Zusammenfassung:** Get detailed performance data for a given domain and path.

**Operation ID:** `pageinsights-get-performance-data`

**Tags:** Page Insights

**Parameter:**

- `domain` (query) **(erforderlich)**
  - A domain or subdomain.
  - Schema: string
- `path` (query) **(erforderlich)**
  - A path of the domain.
  - Schema: string
- `date` (query) (optional)
  - Query data for a specific date, defaults to date today.
  - Schema: string (date)

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `createdAt`: string (date-time)
    - `domain` (erforderlich): string
    - `metrics`: Array<Object>
    - `moreDataAvailable`: Array<string (date)>
    - `path` (erforderlich): string
    - `performanceScore` (erforderlich): number (double)
    - `screenshot`: Object
- **400**
- **403**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/pageinsights`

**Zusammenfassung:** Get detailed performance data for a given domain and path.

This route is deprecated. Please use /v2/page-insights instead.

**Tags:** Page Insights

**Parameter:**

- `domain` (query) **(erforderlich)**
  - A domain or subdomain.
  - Schema: string
- `path` (query) **(erforderlich)**
  - A path of the domain.
  - Schema: string
- `date` (query) (optional)
  - Query data for a specific date, defaults to date today.
  - Schema: string (date)

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}/page-insights`

**Zusammenfassung:** List websites (specified as domain and path) from a project where performance data is available.

**Operation ID:** `pageinsights-list-performance-data-for-project`

**Tags:** Page Insights

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to list domains for.
  - Schema: string (uuid)
- `domain` (query) (optional)
  - Filter for a specific domain.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<Object>
    **Array Items:** Object
- **400**
- **403**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}/pageinsights`

**Zusammenfassung:** List websites (specified as domain and path) from a project where performance data is available.

This route is deprecated. Please use /v2/projects/{projectId}/page-insights instead.

**Tags:** Page Insights

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to list domains for.
  - Schema: string (uuid)
- `domain` (query) (optional)
  - Filter for a specific domain.
  - Schema: string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/projects/{projectId}/straces`

**Zusammenfassung:** Schedule a strace measurement for a single http request.

**Operation ID:** `pageinsights-schedule-strace`

**Tags:** Page Insights

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of a project to own the created strace. It must exist a ingress with the same hostname as in the url to be measured.
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `url` (erforderlich): string

**Responses:**

- **202**
  - Scheduled

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `id` (erforderlich): string (uuid)
- **400**
- **403**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}/straces/{straceId}`

**Zusammenfassung:** Get all data for a given strace.

**Operation ID:** `pageinsights-get-strace-data`

**Tags:** Page Insights

**Parameter:**

- `straceId` (path) **(erforderlich)**
  - ID of the strace to get the data for.
  - Schema: string (uuid)
- `projectId` (path) **(erforderlich)**
  - ID of the project the strace belongs to.
  - Schema: string (uuid)

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `executedAt` (erforderlich): string (date-time)
    - `id` (erforderlich): string (uuid)
    - `result` (erforderlich): 
- **400**
- **403**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---


### Project

#### `GET /v2/project-invites`

**Zusammenfassung:** List ProjectInvites belonging to the executing user.

**Operation ID:** `project-list-project-invites`

**Tags:** Project

**Parameter:**

- `limit` (query) (optional)
  - Schema: integer
- `skip` (query) (optional)
  - Schema: integer
- `page` (query) (optional)
  - Schema: integer

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.membership.ProjectInvite` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.membership.ProjectInvite` (siehe Schema-Definition)
- **403**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/project-invites/{projectInviteId}`

**Zusammenfassung:** Get a ProjectInvite.

**Operation ID:** `project-get-project-invite`

**Tags:** Project

**Parameter:**

- `projectInviteId` (path) **(erforderlich)**
  - ID of the ProjectInvite to be retrieved.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.membership.ProjectInvite` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/project-invites/{projectInviteId}`

**Zusammenfassung:** Delete a ProjectInvite.

**Operation ID:** `project-delete-project-invite`

**Tags:** Project

**Parameter:**

- `projectInviteId` (path) **(erforderlich)**
  - ID of the ProjectInvite to be deleted.
  - Schema: string (uuid)

**Responses:**

- **204**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/project-invites/{projectInviteId}`

**Zusammenfassung:** Get a ProjectInvite.

**Operation ID:** `project-get-project-invite`

**Tags:** Project

**Parameter:**

- `projectInviteId` (path) **(erforderlich)**
  - ID of the ProjectInvite to be retrieved.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.membership.ProjectInvite` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/project-invites/{projectInviteId}`

**Zusammenfassung:** Delete a ProjectInvite.

**Operation ID:** `project-delete-project-invite`

**Tags:** Project

**Parameter:**

- `projectInviteId` (path) **(erforderlich)**
  - ID of the ProjectInvite to be deleted.
  - Schema: string (uuid)

**Responses:**

- **204**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/project-invites/{projectInviteId}/actions/accept`

**Zusammenfassung:** Accept a ProjectInvite.

**Operation ID:** `project-accept-project-invite`

**Tags:** Project

**Parameter:**

- `projectInviteId` (path) **(erforderlich)**
  - ID of the ProjectInvite to be accepted.
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `invitationToken`: string

**Responses:**

- **204**
- **400**
- **403**
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/project-invites/{projectInviteId}/actions/decline`

**Zusammenfassung:** Decline a ProjectInvite.

**Operation ID:** `project-decline-project-invite`

**Tags:** Project

**Parameter:**

- `projectInviteId` (path) **(erforderlich)**
  - ID of the ProjectInvite to be declined.
  - Schema: string (uuid)

**Responses:**

- **204**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/project-invites/{projectInviteId}/actions/resend`

**Zusammenfassung:** Resend the mail for a ProjectInvite.

**Operation ID:** `project-resend-project-invite-mail`

**Tags:** Project

**Parameter:**

- `projectInviteId` (path) **(erforderlich)**
  - ID of the ProjectInvite to resend the mail for.
  - Schema: string (uuid)

**Responses:**

- **204**
- **403**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/project-memberships`

**Zusammenfassung:** List ProjectMemberships belonging to the executing user.

**Operation ID:** `project-list-project-memberships`

**Tags:** Project

**Parameter:**

- `limit` (query) (optional)
  - Schema: integer
- `skip` (query) (optional)
  - Schema: integer
- `page` (query) (optional)
  - Schema: integer
- `hasExpiry` (query) (optional)
  - Schema: boolean
- `isInherited` (query) (optional)
  - Schema: boolean
- `role` (query) (optional)
  - Schema: `de.mittwald.v1.membership.ProjectRoles` (siehe Schema-Definition)

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.membership.ProjectMembership` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.membership.ProjectMembership` (siehe Schema-Definition)
- **403**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/project-memberships/{projectMembershipId}`

**Zusammenfassung:** Get a ProjectMembership

**Operation ID:** `project-get-project-membership`

**Tags:** Project

**Parameter:**

- `projectMembershipId` (path) **(erforderlich)**
  - ID of the ProjectMembership to be retrieved.
  - Schema: string

**Responses:**

- **200**

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.membership.ProjectMembership` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/project-memberships/{projectMembershipId}`

**Zusammenfassung:** Delete a ProjectMembership.

**Operation ID:** `project-delete-project-membership`

**Tags:** Project

**Parameter:**

- `projectMembershipId` (path) **(erforderlich)**
  - ID of the ProjectMembership to be deleted.
  - Schema: string (uuid)

**Responses:**

- **204**
  - OK
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/project-memberships/{projectMembershipId}`

**Zusammenfassung:** Update a ProjectMembership.

**Operation ID:** `project-update-project-membership`

**Tags:** Project

**Parameter:**

- `projectMembershipId` (path) **(erforderlich)**
  - ID of the ProjectMembership to be updated.
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `expiresAt`: string (date-time)
  - `role` (erforderlich): `de.mittwald.v1.membership.ProjectRoles` (siehe Schema-Definition)

**Responses:**

- **204**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/project-memberships/{projectMembershipId}`

**Zusammenfassung:** Get a ProjectMembership

**Operation ID:** `project-get-project-membership`

**Tags:** Project

**Parameter:**

- `projectMembershipId` (path) **(erforderlich)**
  - ID of the ProjectMembership to be retrieved.
  - Schema: string

**Responses:**

- **200**

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.membership.ProjectMembership` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/project-memberships/{projectMembershipId}`

**Zusammenfassung:** Delete a ProjectMembership.

**Operation ID:** `project-delete-project-membership`

**Tags:** Project

**Parameter:**

- `projectMembershipId` (path) **(erforderlich)**
  - ID of the ProjectMembership to be deleted.
  - Schema: string (uuid)

**Responses:**

- **204**
  - OK
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/project-memberships/{projectMembershipId}`

**Zusammenfassung:** Update a ProjectMembership.

**Operation ID:** `project-update-project-membership`

**Tags:** Project

**Parameter:**

- `projectMembershipId` (path) **(erforderlich)**
  - ID of the ProjectMembership to be updated.
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `expiresAt`: string (date-time)
  - `role` (erforderlich): `de.mittwald.v1.membership.ProjectRoles` (siehe Schema-Definition)

**Responses:**

- **204**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/project-memberships/{projectMembershipId}`

**Zusammenfassung:** Get a ProjectMembership

**Operation ID:** `project-get-project-membership`

**Tags:** Project

**Parameter:**

- `projectMembershipId` (path) **(erforderlich)**
  - ID of the ProjectMembership to be retrieved.
  - Schema: string

**Responses:**

- **200**

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.membership.ProjectMembership` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/project-memberships/{projectMembershipId}`

**Zusammenfassung:** Delete a ProjectMembership.

**Operation ID:** `project-delete-project-membership`

**Tags:** Project

**Parameter:**

- `projectMembershipId` (path) **(erforderlich)**
  - ID of the ProjectMembership to be deleted.
  - Schema: string (uuid)

**Responses:**

- **204**
  - OK
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/project-memberships/{projectMembershipId}`

**Zusammenfassung:** Update a ProjectMembership.

**Operation ID:** `project-update-project-membership`

**Tags:** Project

**Parameter:**

- `projectMembershipId` (path) **(erforderlich)**
  - ID of the ProjectMembership to be updated.
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `expiresAt`: string (date-time)
  - `role` (erforderlich): `de.mittwald.v1.membership.ProjectRoles` (siehe Schema-Definition)

**Responses:**

- **204**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/project-token-invite`

**Zusammenfassung:** Get a ProjectInvite by token.

**Operation ID:** `project-get-project-token-invite`

**Tags:** Project

**Parameter:**

- `token` (header) **(erforderlich)**
  - Token of the ProjectInvite to be retrieved.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.membership.ProjectInvite` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/project/{projectId}/invites`

**Zusammenfassung:** Create a ProjectInvite.

This route is deprecated. Please use /v2/projects/{projectId}/invites instead.

**Tags:** Project

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to create a ProjectInvite for.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `mailAddress` (erforderlich): string (email)
  - `membershipExpiresAt`: string (date-time)
  - `message`: string
  - `role` (erforderlich): `de.mittwald.v1.membership.ProjectRoles` (siehe Schema-Definition)

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects`

**Zusammenfassung:** List Projects belonging to the executing user.

**Operation ID:** `project-list-projects`

**Tags:** Project

**Parameter:**

- `customerId` (query) (optional)
  - ID of the Organization to list Projects for.
  - Schema: string
- `serverId` (query) (optional)
  - ID of the Server to list Projects for.
  - Schema: string (uuid)
- `searchTerm` (query) (optional)
  - Search term to list Projects for. The fields id, shortId, and description are searchable.
  - Schema: string
- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer (Standard: `10000`)
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer
- `sort` (query) (optional)
  - Sort the result by this field.
  - Schema: string - Enum: `createdAt`, `description` (Standard: `createdAt`)
- `order` (query) (optional)
  - Should the result be sorted ascending or descending? Default ascending.
  - Schema: string - Enum: `asc`, `desc` (Standard: `asc`)

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<Object>
    **Array Items:** Object
- **400**
- **403**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}`

**Zusammenfassung:** Get a Project.

**Operation ID:** `project-get-project`

**Tags:** Project

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to be retrieved.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.project.Project` (siehe Schema-Definition)
- **403**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/projects/{projectId}`

**Zusammenfassung:** Delete a Project.

**Operation ID:** `project-delete-project`

**Tags:** Project

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - The ID of the Project.
  - Schema: string

**Responses:**

- **204**
  - NoContent
- **400**
- **403**
- **412**
- **429**
- **500**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}`

**Zusammenfassung:** Get a Project.

**Operation ID:** `project-get-project`

**Tags:** Project

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to be retrieved.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.project.Project` (siehe Schema-Definition)
- **403**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/projects/{projectId}`

**Zusammenfassung:** Delete a Project.

**Operation ID:** `project-delete-project`

**Tags:** Project

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - The ID of the Project.
  - Schema: string

**Responses:**

- **204**
  - NoContent
- **400**
- **403**
- **412**
- **429**
- **500**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/projects/{projectId}/avatar`

**Zusammenfassung:** Request a Project avatar upload.

**Operation ID:** `project-request-project-avatar-upload`

**Tags:** Project

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project you want to request an avatar upload for.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `refId` (erforderlich): string (uuid)
    - `rules` (erforderlich): `de.mittwald.v1.project.AvatarRules` (siehe Schema-Definition)
- **400**
- **403**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/projects/{projectId}/avatar`

**Zusammenfassung:** Delete a Project's avatar.

**Operation ID:** `project-delete-project-avatar`

**Tags:** Project

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project the avatar should be deleted for.
  - Schema: string

**Responses:**

- **204**
  - NoContent
- **400**
- **403**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/projects/{projectId}/avatar`

**Zusammenfassung:** Request a Project avatar upload.

**Operation ID:** `project-request-project-avatar-upload`

**Tags:** Project

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project you want to request an avatar upload for.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `refId` (erforderlich): string (uuid)
    - `rules` (erforderlich): `de.mittwald.v1.project.AvatarRules` (siehe Schema-Definition)
- **400**
- **403**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/projects/{projectId}/avatar`

**Zusammenfassung:** Delete a Project's avatar.

**Operation ID:** `project-delete-project-avatar`

**Tags:** Project

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project the avatar should be deleted for.
  - Schema: string

**Responses:**

- **204**
  - NoContent
- **400**
- **403**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/projects/{projectId}/description`

**Zusammenfassung:** Update a Project's description.

**Operation ID:** `project-update-project-description`

**Tags:** Project

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to update the description for.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **204**
  - NoContent
- **400**
- **403**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}/invites`

**Zusammenfassung:** List Invites belonging to a Project.

**Operation ID:** `project-list-invites-for-project`

**Tags:** Project

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to list invites for.
  - Schema: string
- `limit` (query) (optional)
  - Schema: integer
- `skip` (query) (optional)
  - Schema: integer

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.membership.ProjectInvite` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.membership.ProjectInvite` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/projects/{projectId}/invites`

**Zusammenfassung:** Create a ProjectInvite.

**Operation ID:** `project-create-project-invite`

**Tags:** Project

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to create a ProjectInvite for.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `mailAddress` (erforderlich): string (email)
  - `membershipExpiresAt`: string (date-time)
  - `message`: string
  - `role` (erforderlich): `de.mittwald.v1.membership.ProjectRoles` (siehe Schema-Definition)

**Responses:**

- **201**
  - Created

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.membership.ProjectInvite` (siehe Schema-Definition)
- **400**
- **409**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}/invites`

**Zusammenfassung:** List Invites belonging to a Project.

**Operation ID:** `project-list-invites-for-project`

**Tags:** Project

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to list invites for.
  - Schema: string
- `limit` (query) (optional)
  - Schema: integer
- `skip` (query) (optional)
  - Schema: integer

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.membership.ProjectInvite` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.membership.ProjectInvite` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/projects/{projectId}/invites`

**Zusammenfassung:** Create a ProjectInvite.

**Operation ID:** `project-create-project-invite`

**Tags:** Project

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to create a ProjectInvite for.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `mailAddress` (erforderlich): string (email)
  - `membershipExpiresAt`: string (date-time)
  - `message`: string
  - `role` (erforderlich): `de.mittwald.v1.membership.ProjectRoles` (siehe Schema-Definition)

**Responses:**

- **201**
  - Created

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.membership.ProjectInvite` (siehe Schema-Definition)
- **400**
- **409**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/projects/{projectId}/leave`

**Zusammenfassung:** Leave a Project.

Deprecated by `DELETE /v2/project-memberships/{projectMembershipId}`.

**Operation ID:** `deprecated-project-leave-project`

**Tags:** Project

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to be left.
  - Schema: string

**Responses:**

- **204**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}/llm-licences`

**Zusammenfassung:** Get a list of already created llm licences.

**Operation ID:** `project-get-llm-licences-experimental`

**Tags:** Project

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **200**
  - List of llm licences of a project.


  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.aihosting.Licence` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.aihosting.Licence` (siehe Schema-Definition)
- **400**
- **403**
- **404**
- **429**
- **default**

---

#### `POST /v2/projects/{projectId}/llm-licences`

**Zusammenfassung:** Creates a new llm beta Licence for a project. Will be purged on end of beta.

Deprecated route which will be removed on end of beta. Please do not use for production.

**Operation ID:** `project-create-llm-beta-licence-experimental`

**Tags:** Project

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**



**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `createWebuiContainer`: boolean
  - `name` (erforderlich): string

**Responses:**

- **201**

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.aihosting.Licence` (siehe Schema-Definition)
- **400**
- **403**
- **404**
- **409**
- **412**
- **429**
- **default**

---

#### `GET /v2/projects/{projectId}/llm-licences`

**Zusammenfassung:** Get a list of already created llm licences.

**Operation ID:** `project-get-llm-licences-experimental`

**Tags:** Project

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **200**
  - List of llm licences of a project.


  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.aihosting.Licence` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.aihosting.Licence` (siehe Schema-Definition)
- **400**
- **403**
- **404**
- **429**
- **default**

---

#### `POST /v2/projects/{projectId}/llm-licences`

**Zusammenfassung:** Creates a new llm beta Licence for a project. Will be purged on end of beta.

Deprecated route which will be removed on end of beta. Please do not use for production.

**Operation ID:** `project-create-llm-beta-licence-experimental`

**Tags:** Project

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**



**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `createWebuiContainer`: boolean
  - `name` (erforderlich): string

**Responses:**

- **201**

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.aihosting.Licence` (siehe Schema-Definition)
- **400**
- **403**
- **404**
- **409**
- **412**
- **429**
- **default**

---

#### `GET /v2/projects/{projectId}/llm-licences/{licenceId}`

**Zusammenfassung:** Get a licence of a project.

**Operation ID:** `project-get-llm-licence-experimental`

**Tags:** Project

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - Schema: string
- `licenceId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **200**
  - The llm licence of a project.


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.aihosting.Licence` (siehe Schema-Definition)
- **400**
- **403**
- **404**
- **429**
- **default**

---

#### `PUT /v2/projects/{projectId}/llm-licences/{licenceId}`

**Zusammenfassung:** Update a llm Licence for a project.

**Operation ID:** `project-update-llm-licence-experimental`

**Tags:** Project

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - Schema: string
- `licenceId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**



**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `createWebuiContainer`: boolean
  - `name`: string

**Responses:**

- **200**

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.aihosting.Licence` (siehe Schema-Definition)
- **400**
- **403**
- **404**
- **409**
- **412**
- **429**
- **default**

---

#### `GET /v2/projects/{projectId}/llm-licences/{licenceId}`

**Zusammenfassung:** Get a licence of a project.

**Operation ID:** `project-get-llm-licence-experimental`

**Tags:** Project

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - Schema: string
- `licenceId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **200**
  - The llm licence of a project.


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.aihosting.Licence` (siehe Schema-Definition)
- **400**
- **403**
- **404**
- **429**
- **default**

---

#### `PUT /v2/projects/{projectId}/llm-licences/{licenceId}`

**Zusammenfassung:** Update a llm Licence for a project.

**Operation ID:** `project-update-llm-licence-experimental`

**Tags:** Project

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - Schema: string
- `licenceId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**



**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `createWebuiContainer`: boolean
  - `name`: string

**Responses:**

- **200**

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.aihosting.Licence` (siehe Schema-Definition)
- **400**
- **403**
- **404**
- **409**
- **412**
- **429**
- **default**

---

#### `GET /v2/projects/{projectId}/memberships`

**Zusammenfassung:** List Memberships belonging to a Project.

**Operation ID:** `project-list-memberships-for-project`

**Tags:** Project

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to list memberships for.
  - Schema: string
- `limit` (query) (optional)
  - Schema: integer
- `skip` (query) (optional)
  - Schema: integer
- `hasExpiry` (query) (optional)
  - Schema: boolean
- `isInherited` (query) (optional)
  - Schema: boolean
- `role` (query) (optional)
  - Schema: `de.mittwald.v1.membership.ProjectRoles` (siehe Schema-Definition)
- `hasMfa` (query) (optional)
  - Schema: boolean

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.membership.ProjectMembership` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.membership.ProjectMembership` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}/memberships/self`

**Zusammenfassung:** Get the executing user's membership in a Project.

**Operation ID:** `project-get-self-membership-for-project`

**Tags:** Project

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to get the membership for.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.membership.ProjectMembership` (siehe Schema-Definition)
- **403**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/projects/{projectId}/storage-space-notification-threshold`

**Zusammenfassung:** Update a Project's storage space notification threshold.

**Operation ID:** `storagespace-replace-project-notification-threshold`

**Tags:** Project

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to update the storage space notification threshold for.
  - Schema: string

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`

**Responses:**

- **204**
  - NoContent
- **403**
- **429**
- **500**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}/storage-space-statistics`

**Zusammenfassung:** Get storage space Statistics belonging to a Project.

**Operation ID:** `storagespace-get-project-statistics`

**Tags:** Project

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to retrieve storage space Statistics for.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.storagespace.Statistics` (siehe Schema-Definition)
- **400**
- **403**
- **404**
- **429**
- **500**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/servers`

**Zusammenfassung:** List Servers belonging to the executing user.

**Operation ID:** `project-list-servers`

**Tags:** Project

**Parameter:**

- `customerId` (query) (optional)
  - ID of the Organization to list Servers for. If no ID is provided, the ID of the executing User is used instead.
  - Schema: string
- `searchTerm` (query) (optional)
  - Search term to list Servers for. The fields id, shortId, and description are searchable.
  - Schema: string
- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer (Standard: `10000`)
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer
- `sort` (query) (optional)
  - Sort the result by this field.
  - Schema: string - Enum: `createdAt`, `description` (Standard: `createdAt`)
- `order` (query) (optional)
  - Should the result be sorted ascending or descending? Default ascending.
  - Schema: string - Enum: `asc`, `desc` (Standard: `asc`)

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.project.Server` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.project.Server` (siehe Schema-Definition)
- **403**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/servers/{serverId}`

**Zusammenfassung:** Get a Server.

**Operation ID:** `project-get-server`

**Tags:** Project

**Parameter:**

- `serverId` (path) **(erforderlich)**
  - ID of the Server to be retrieved.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.project.Server` (siehe Schema-Definition)
- **403**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/servers/{serverId}/avatar`

**Zusammenfassung:** Request a Server avatar upload.

**Operation ID:** `project-request-server-avatar-upload`

**Tags:** Project

**Parameter:**

- `serverId` (path) **(erforderlich)**
  - ID of the Server to request an avatar upload for.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `refId` (erforderlich): string (uuid)
    - `rules` (erforderlich): `de.mittwald.v1.project.AvatarRules` (siehe Schema-Definition)
- **400**
- **403**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/servers/{serverId}/avatar`

**Zusammenfassung:** Delete a Server's avatar.

**Operation ID:** `project-delete-server-avatar`

**Tags:** Project

**Parameter:**

- `serverId` (path) **(erforderlich)**
  - ID of the Server to delete the avatar for.
  - Schema: string

**Responses:**

- **204**
  - NoContent
- **400**
- **403**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/servers/{serverId}/avatar`

**Zusammenfassung:** Request a Server avatar upload.

**Operation ID:** `project-request-server-avatar-upload`

**Tags:** Project

**Parameter:**

- `serverId` (path) **(erforderlich)**
  - ID of the Server to request an avatar upload for.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `refId` (erforderlich): string (uuid)
    - `rules` (erforderlich): `de.mittwald.v1.project.AvatarRules` (siehe Schema-Definition)
- **400**
- **403**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/servers/{serverId}/avatar`

**Zusammenfassung:** Delete a Server's avatar.

**Operation ID:** `project-delete-server-avatar`

**Tags:** Project

**Parameter:**

- `serverId` (path) **(erforderlich)**
  - ID of the Server to delete the avatar for.
  - Schema: string

**Responses:**

- **204**
  - NoContent
- **400**
- **403**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/servers/{serverId}/description`

**Zusammenfassung:** Update a Servers's description.

**Operation ID:** `project-update-server-description`

**Tags:** Project

**Parameter:**

- `serverId` (path) **(erforderlich)**
  - ID of the Server to update the description of.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`

**Responses:**

- **204**
  - NoContent
- **400**
- **403**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/servers/{serverId}/projects`

**Zusammenfassung:** Create a Project belonging to a Server.

**Operation ID:** `project-create-project`

**Tags:** Project

**Parameter:**

- `serverId` (path) **(erforderlich)**
  - ID of the Server to create the Project for.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `description` (erforderlich): string

**Responses:**

- **201**
  - Created

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `id` (erforderlich): string (uuid)
- **400**
- **403**
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/servers/{serverId}/storage-space-notification-threshold`

**Zusammenfassung:** Update a Server's storage space notification threshold.

**Operation ID:** `storagespace-replace-server-notification-threshold`

**Tags:** Project

**Parameter:**

- `serverId` (path) **(erforderlich)**
  - ID of the Server to update the storage space notification threshold for.
  - Schema: string

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`

**Responses:**

- **204**
  - NoContent
- **403**
- **429**
- **500**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/servers/{serverId}/storage-space-statistics`

**Zusammenfassung:** Get storage space Statistics belonging to a Server.

**Operation ID:** `storagespace-get-server-statistics`

**Tags:** Project

**Parameter:**

- `serverId` (path) **(erforderlich)**
  - ID of the Server to retrieve storage space Statistics for.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.storagespace.Statistics` (siehe Schema-Definition)
- **400**
- **403**
- **404**
- **429**
- **500**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---


### Project File System

#### `GET /v2/projects/{projectId}/filesystem-directories`

**Zusammenfassung:** List directories belonging to a Project.

**Operation ID:** `project-file-system-get-directories`

**Tags:** Project File System

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to list the directories for.
  - Schema: string
- `directory` (query) (optional)
  - The directory to start listing subdirectories from.
  - Schema: string
- `name` (query) (optional)
  - Search for specific filenames, only. The name may be a glob expression.
  - Schema: string
- `max_depth` (query) (optional)
  - The nesting depth for recursively listing directory contents.
  - Schema: integer
- `type` (query) (optional)
  - One of file or directory (may be specified multiple times), to restrict results to directory items of this specific type.
  - Schema: Array<string>
- `executable` (query) (optional)
  - Set to true to constrain search results to executable files.
  - Schema: boolean
- `hidden` (query) (optional)
  - Set to true to include hidden files. (with . prefix in the search results).
  - Schema: boolean

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.project.FilesystemDirectoryListing` (siehe Schema-Definition)
- **403**
- **404**
- **429**
- **502**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}/filesystem-disk-usage`

**Zusammenfassung:** Get a Project directory filesystem usage.

**Operation ID:** `project-file-system-get-disk-usage`

**Tags:** Project File System

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project.
  - Schema: string
- `directory` (query) (optional)
  - Starting directory for the disk usage calculation.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.project.FilesystemUsagesDisk` (siehe Schema-Definition)
- **403**
- **404**
- **429**
- **502**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}/filesystem-file-content`

**Zusammenfassung:** Get a Project file's content.

**Operation ID:** `project-file-system-get-file-content`

**Tags:** Project File System

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project.
  - Schema: string
- `file` (query) (optional)
  - Name of the file.
  - Schema: string
- `inline` (query) (optional)
  - Set to true to serve the file with Content-Disposition: inline. Otherwise, it will be served with Content-Disposition: attachment. filename=...
  - Schema: boolean

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/octet-stream`
    - Schema: string (binary)
- **403**
- **404**
- **429**
- **502**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}/filesystem-files`

**Zusammenfassung:** Get a Project file's information.

**Operation ID:** `project-file-system-list-files`

**Tags:** Project File System

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project.
  - Schema: string
- `file` (query) (optional)
  - Name of the file to retrieve.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.project.FilesystemDirectoryListing` (siehe Schema-Definition)
- **403**
- **404**
- **429**
- **502**
- **503**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}/filesystem/directories`

**Zusammenfassung:** List directories belonging to a Project.

This route is deprecated. Please use /v2/projects/{projectId}/filesystem-directories instead.

**Tags:** Project File System

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to list the directories for.
  - Schema: string
- `directory` (query) (optional)
  - The directory to start listing subdirectories from.
  - Schema: string
- `name` (query) (optional)
  - Search for specific filenames, only. The name may be a glob expression.
  - Schema: string
- `max_depth` (query) (optional)
  - The nesting depth for recursively listing directory contents.
  - Schema: integer
- `type` (query) (optional)
  - One of file or directory (may be specified multiple times), to restrict results to directory items of this specific type.
  - Schema: Array<string>
- `executable` (query) (optional)
  - Set to true to constrain search results to executable files.
  - Schema: boolean
- `hidden` (query) (optional)
  - Set to true to include hidden files. (with . prefix in the search results).
  - Schema: boolean

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}/filesystem/files`

**Zusammenfassung:** Get a Project file's information.

This route is deprecated. Please use /v2/projects/{projectId}/filesystem-files instead.

**Tags:** Project File System

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project.
  - Schema: string
- `file` (query) (optional)
  - Name of the file to retrieve.
  - Schema: string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}/filesystem/files/raw`

**Zusammenfassung:** Get a Project file's content.

This route is deprecated. Please use /v2/projects/{projectId}/filesystem-file-content instead.

**Tags:** Project File System

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project.
  - Schema: string
- `file` (query) (optional)
  - Name of the file.
  - Schema: string
- `inline` (query) (optional)
  - Set to true to serve the file with Content-Disposition: inline. Otherwise, it will be served with Content-Disposition: attachment. filename=...
  - Schema: boolean

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}/filesystem/usages/disk`

**Zusammenfassung:** Get a Project directory filesystem usage.

This route is deprecated. Please use /v2/projects/{projectId}/filesystem-disk-usage instead.

**Tags:** Project File System

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project.
  - Schema: string
- `directory` (query) (optional)
  - Starting directory for the disk usage calculation.
  - Schema: string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}/jwt`

**Zusammenfassung:** Get a Project's file/filesystem authorization token.

**Operation ID:** `project-file-system-get-jwt`

**Tags:** Project File System

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to retrieve an authorization token for.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.project.FsApiJwt` (siehe Schema-Definition)
- **403**
- **404**
- **429**
- **502**
- **503**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---


### Relocation

#### `POST /v2/legacy-tariff-change`

**Zusammenfassung:** Register a tariff change for a legacy tariff.

**Operation ID:** `relocation-create-legacy-tariff-change`

**Tags:** Relocation

**Parameter:**


**Request Body:**

Request Body **(erforderlich)**



**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `pAccount` (erforderlich): string
  - `targetTariff` (erforderlich): string

**Responses:**

- **201**

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `messageId` (erforderlich): string (uuid)
- **429**
- **default**

**Security:**


---

#### `POST /v2/relocation`

**Zusammenfassung:** Relocate an external Project to mittwald.

Give mittwald access to your Provider and let them move your Project to mittwald.

**Operation ID:** `relocation-create-relocation`

**Tags:** Relocation

**Request Body:**

Request Body **(erforderlich)**



**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `additionalServices` (erforderlich): Object
  - `allDomains`: boolean
  - `allowPasswordChange` (erforderlich): boolean
  - `articleType` (erforderlich): string - Enum: `cms-hosting`, `cms-hosting-express`, `onlineshop`, `onlineshop-express`
  - `contact` (erforderlich): Object
  - `domains`: Array<`de.mittwald.v1.directus.Domain` (siehe Schema-Definition)>
  - `emailInboxes`: Array<`de.mittwald.v1.directus.EmailInbox` (siehe Schema-Definition)>
  - `notes`: string
  - `prices` (erforderlich): Object
  - `provider` (erforderlich): Object
  - `target` (erforderlich): Object
  - `userId`: 

**Responses:**

- **204**
  - No content
- **400**
- **429**
- **default**

**Security:**


---


### SSH/SFTP User

#### `GET /v2/project/{projectId}/sftp-users`

**Zusammenfassung:** Get all SFTPUsers for a Project.

This route is deprecated. Please use /v2/projects/{projectId}/sftp-users instead.

**Tags:** SSH/SFTP User

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to request SFTPUsers for.
  - Schema: string
- `limit` (query) (optional)
  - Schema: integer
- `skip` (query) (optional)
  - Schema: integer

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}/sftp-users`

**Zusammenfassung:** Get all SFTPUsers for a Project.

**Operation ID:** `sftp-user-list-sftp-users`

**Tags:** SSH/SFTP User

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to request SFTPUsers for.
  - Schema: string
- `limit` (query) (optional)
  - Schema: integer
- `skip` (query) (optional)
  - Schema: integer

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.sshuser.SftpUser` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.sshuser.SftpUser` (siehe Schema-Definition)
- **403**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/projects/{projectId}/sftp-users`

**Zusammenfassung:** Create an SFTPUser for a Project.

**Operation ID:** `sftp-user-create-sftp-user`

**Tags:** SSH/SFTP User

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to create an SFTPUser for.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `accessLevel`: string - Enum: `read`, `full`
  - `authentication` (erforderlich): `de.mittwald.v1.sshuser.Authentication` (siehe Schema-Definition)
  - `description` (erforderlich): string
  - `directories` (erforderlich): Array<string>
  - `expiresAt`: string (date-time)

**Responses:**

- **201**
  - Created

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.sshuser.SftpUser` (siehe Schema-Definition)
- **400**
- **403**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}/sftp-users`

**Zusammenfassung:** Get all SFTPUsers for a Project.

**Operation ID:** `sftp-user-list-sftp-users`

**Tags:** SSH/SFTP User

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to request SFTPUsers for.
  - Schema: string
- `limit` (query) (optional)
  - Schema: integer
- `skip` (query) (optional)
  - Schema: integer

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.sshuser.SftpUser` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.sshuser.SftpUser` (siehe Schema-Definition)
- **403**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/projects/{projectId}/sftp-users`

**Zusammenfassung:** Create an SFTPUser for a Project.

**Operation ID:** `sftp-user-create-sftp-user`

**Tags:** SSH/SFTP User

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to create an SFTPUser for.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `accessLevel`: string - Enum: `read`, `full`
  - `authentication` (erforderlich): `de.mittwald.v1.sshuser.Authentication` (siehe Schema-Definition)
  - `description` (erforderlich): string
  - `directories` (erforderlich): Array<string>
  - `expiresAt`: string (date-time)

**Responses:**

- **201**
  - Created

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.sshuser.SftpUser` (siehe Schema-Definition)
- **400**
- **403**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}/ssh-users`

**Zusammenfassung:** Get all SSHUsers for a Project.

**Operation ID:** `ssh-user-list-ssh-users`

**Tags:** SSH/SFTP User

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to retrieve SSHUsers for.
  - Schema: string
- `limit` (query) (optional)
  - Schema: integer
- `skip` (query) (optional)
  - Schema: integer

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.sshuser.SshUser` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.sshuser.SshUser` (siehe Schema-Definition)
- **403**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/projects/{projectId}/ssh-users`

**Zusammenfassung:** Create an SSHUser for a Project.

**Operation ID:** `ssh-user-create-ssh-user`

**Tags:** SSH/SFTP User

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to create an SSHUser for.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `authentication` (erforderlich): `de.mittwald.v1.sshuser.Authentication` (siehe Schema-Definition)
  - `description` (erforderlich): string
  - `expiresAt`: string (date-time)

**Responses:**

- **201**
  - Created

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.sshuser.SshUser` (siehe Schema-Definition)
- **400**
- **403**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/projects/{projectId}/ssh-users`

**Zusammenfassung:** Get all SSHUsers for a Project.

**Operation ID:** `ssh-user-list-ssh-users`

**Tags:** SSH/SFTP User

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to retrieve SSHUsers for.
  - Schema: string
- `limit` (query) (optional)
  - Schema: integer
- `skip` (query) (optional)
  - Schema: integer

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.sshuser.SshUser` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.sshuser.SshUser` (siehe Schema-Definition)
- **403**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/projects/{projectId}/ssh-users`

**Zusammenfassung:** Create an SSHUser for a Project.

**Operation ID:** `ssh-user-create-ssh-user`

**Tags:** SSH/SFTP User

**Parameter:**

- `projectId` (path) **(erforderlich)**
  - ID of the Project to create an SSHUser for.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `authentication` (erforderlich): `de.mittwald.v1.sshuser.Authentication` (siehe Schema-Definition)
  - `description` (erforderlich): string
  - `expiresAt`: string (date-time)

**Responses:**

- **201**
  - Created

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.sshuser.SshUser` (siehe Schema-Definition)
- **400**
- **403**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/sftp-users/{sftpUserId}`

**Zusammenfassung:** Get an SFTPUser.

**Operation ID:** `sftp-user-get-sftp-user`

**Tags:** SSH/SFTP User

**Parameter:**

- `sftpUserId` (path) **(erforderlich)**
  - ID of the SFTPUser to get.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.sshuser.SftpUser` (siehe Schema-Definition)
- **403**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/sftp-users/{sftpUserId}`

**Zusammenfassung:** Delete an SFTPUser.

**Operation ID:** `sftp-user-delete-sftp-user`

**Tags:** SSH/SFTP User

**Parameter:**

- `sftpUserId` (path) **(erforderlich)**
  - ID of the SFTPUser to be deleted.
  - Schema: string

**Responses:**

- **204**
  - NoContent
- **403**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/sftp-users/{sftpUserId}`

**Zusammenfassung:** Update an SFTPUser.

**Operation ID:** `sftp-user-update-sftp-user`

**Tags:** SSH/SFTP User

**Parameter:**

- `sftpUserId` (path) **(erforderlich)**
  - ID of the SFTPUser to be updated.
  - Schema: string

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `accessLevel`: string - Enum: `read`, `full`
  - `active`: boolean
  - `description`: string
  - `directories`: Array<string>
  - `expiresAt`: string (date-time)
  - `password`: string
  - `publicKeys`: Array<`de.mittwald.v1.sshuser.PublicKey` (siehe Schema-Definition)>

**Responses:**

- **204**
  - NoContent
- **400**
- **403**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/sftp-users/{sftpUserId}`

**Zusammenfassung:** Get an SFTPUser.

**Operation ID:** `sftp-user-get-sftp-user`

**Tags:** SSH/SFTP User

**Parameter:**

- `sftpUserId` (path) **(erforderlich)**
  - ID of the SFTPUser to get.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.sshuser.SftpUser` (siehe Schema-Definition)
- **403**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/sftp-users/{sftpUserId}`

**Zusammenfassung:** Delete an SFTPUser.

**Operation ID:** `sftp-user-delete-sftp-user`

**Tags:** SSH/SFTP User

**Parameter:**

- `sftpUserId` (path) **(erforderlich)**
  - ID of the SFTPUser to be deleted.
  - Schema: string

**Responses:**

- **204**
  - NoContent
- **403**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/sftp-users/{sftpUserId}`

**Zusammenfassung:** Update an SFTPUser.

**Operation ID:** `sftp-user-update-sftp-user`

**Tags:** SSH/SFTP User

**Parameter:**

- `sftpUserId` (path) **(erforderlich)**
  - ID of the SFTPUser to be updated.
  - Schema: string

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `accessLevel`: string - Enum: `read`, `full`
  - `active`: boolean
  - `description`: string
  - `directories`: Array<string>
  - `expiresAt`: string (date-time)
  - `password`: string
  - `publicKeys`: Array<`de.mittwald.v1.sshuser.PublicKey` (siehe Schema-Definition)>

**Responses:**

- **204**
  - NoContent
- **400**
- **403**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/sftp-users/{sftpUserId}`

**Zusammenfassung:** Get an SFTPUser.

**Operation ID:** `sftp-user-get-sftp-user`

**Tags:** SSH/SFTP User

**Parameter:**

- `sftpUserId` (path) **(erforderlich)**
  - ID of the SFTPUser to get.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.sshuser.SftpUser` (siehe Schema-Definition)
- **403**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/sftp-users/{sftpUserId}`

**Zusammenfassung:** Delete an SFTPUser.

**Operation ID:** `sftp-user-delete-sftp-user`

**Tags:** SSH/SFTP User

**Parameter:**

- `sftpUserId` (path) **(erforderlich)**
  - ID of the SFTPUser to be deleted.
  - Schema: string

**Responses:**

- **204**
  - NoContent
- **403**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/sftp-users/{sftpUserId}`

**Zusammenfassung:** Update an SFTPUser.

**Operation ID:** `sftp-user-update-sftp-user`

**Tags:** SSH/SFTP User

**Parameter:**

- `sftpUserId` (path) **(erforderlich)**
  - ID of the SFTPUser to be updated.
  - Schema: string

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `accessLevel`: string - Enum: `read`, `full`
  - `active`: boolean
  - `description`: string
  - `directories`: Array<string>
  - `expiresAt`: string (date-time)
  - `password`: string
  - `publicKeys`: Array<`de.mittwald.v1.sshuser.PublicKey` (siehe Schema-Definition)>

**Responses:**

- **204**
  - NoContent
- **400**
- **403**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/ssh-users/{sshUserId}`

**Zusammenfassung:** Get an SSHUser.

**Operation ID:** `ssh-user-get-ssh-user`

**Tags:** SSH/SFTP User

**Parameter:**

- `sshUserId` (path) **(erforderlich)**
  - ID of the SSHUser to be retrieved.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.sshuser.SshUser` (siehe Schema-Definition)
- **403**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/ssh-users/{sshUserId}`

**Zusammenfassung:** Delete an SSHUser.

**Operation ID:** `ssh-user-delete-ssh-user`

**Tags:** SSH/SFTP User

**Parameter:**

- `sshUserId` (path) **(erforderlich)**
  - ID of the SSHUser to be deleted.
  - Schema: string

**Responses:**

- **204**
  - NoContent
- **403**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/ssh-users/{sshUserId}`

**Zusammenfassung:** Update an SSHUser.

**Operation ID:** `ssh-user-update-ssh-user`

**Tags:** SSH/SFTP User

**Parameter:**

- `sshUserId` (path) **(erforderlich)**
  - ID of the SSHUser to be updated.
  - Schema: string

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `active`: boolean
  - `description`: string
  - `expiresAt`: string (date-time)
  - `password`: string
  - `publicKeys`: Array<`de.mittwald.v1.sshuser.PublicKey` (siehe Schema-Definition)>

**Responses:**

- **204**
  - NoContent
- **400**
- **403**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/ssh-users/{sshUserId}`

**Zusammenfassung:** Get an SSHUser.

**Operation ID:** `ssh-user-get-ssh-user`

**Tags:** SSH/SFTP User

**Parameter:**

- `sshUserId` (path) **(erforderlich)**
  - ID of the SSHUser to be retrieved.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.sshuser.SshUser` (siehe Schema-Definition)
- **403**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/ssh-users/{sshUserId}`

**Zusammenfassung:** Delete an SSHUser.

**Operation ID:** `ssh-user-delete-ssh-user`

**Tags:** SSH/SFTP User

**Parameter:**

- `sshUserId` (path) **(erforderlich)**
  - ID of the SSHUser to be deleted.
  - Schema: string

**Responses:**

- **204**
  - NoContent
- **403**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/ssh-users/{sshUserId}`

**Zusammenfassung:** Update an SSHUser.

**Operation ID:** `ssh-user-update-ssh-user`

**Tags:** SSH/SFTP User

**Parameter:**

- `sshUserId` (path) **(erforderlich)**
  - ID of the SSHUser to be updated.
  - Schema: string

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `active`: boolean
  - `description`: string
  - `expiresAt`: string (date-time)
  - `password`: string
  - `publicKeys`: Array<`de.mittwald.v1.sshuser.PublicKey` (siehe Schema-Definition)>

**Responses:**

- **204**
  - NoContent
- **400**
- **403**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/ssh-users/{sshUserId}`

**Zusammenfassung:** Get an SSHUser.

**Operation ID:** `ssh-user-get-ssh-user`

**Tags:** SSH/SFTP User

**Parameter:**

- `sshUserId` (path) **(erforderlich)**
  - ID of the SSHUser to be retrieved.
  - Schema: string

**Responses:**

- **200**
  - OK

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.sshuser.SshUser` (siehe Schema-Definition)
- **403**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/ssh-users/{sshUserId}`

**Zusammenfassung:** Delete an SSHUser.

**Operation ID:** `ssh-user-delete-ssh-user`

**Tags:** SSH/SFTP User

**Parameter:**

- `sshUserId` (path) **(erforderlich)**
  - ID of the SSHUser to be deleted.
  - Schema: string

**Responses:**

- **204**
  - NoContent
- **403**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/ssh-users/{sshUserId}`

**Zusammenfassung:** Update an SSHUser.

**Operation ID:** `ssh-user-update-ssh-user`

**Tags:** SSH/SFTP User

**Parameter:**

- `sshUserId` (path) **(erforderlich)**
  - ID of the SSHUser to be updated.
  - Schema: string

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `active`: boolean
  - `description`: string
  - `expiresAt`: string (date-time)
  - `password`: string
  - `publicKeys`: Array<`de.mittwald.v1.sshuser.PublicKey` (siehe Schema-Definition)>

**Responses:**

- **204**
  - NoContent
- **400**
- **403**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PATCH /v2/sshusers/{sshUserId}`

**Zusammenfassung:** Update an SSHUser.

This route is deprecated. Please use /v2/ssh-users/{sshUserId} instead.

**Tags:** SSH/SFTP User

**Parameter:**

- `sshUserId` (path) **(erforderlich)**
  - ID of the SSHUser to be updated.
  - Schema: string

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `active`: boolean
  - `description`: string
  - `expiresAt`: string (date-time)
  - `password`: string
  - `publicKeys`: Array<`de.mittwald.v1.sshuser.PublicKey` (siehe Schema-Definition)>

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---


### User

#### `POST /v2/authenticate`

**Zusammenfassung:** Authenticate yourself to get an access token.

**Operation ID:** `user-authenticate`

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `email` (erforderlich): string
  - `password` (erforderlich): string

**Responses:**

- **200**
  - Your authentication request was successfull and you've got an access token.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `expires` (erforderlich): string (date-time)
    - `refreshToken` (erforderlich): string
    - `token` (erforderlich): string
- **202**
  - Multi factor authentication is activated for this user. After calling this, you need to call '/authentication/mfa' with a valid multi factor code.


  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `name`: string - Enum: `SecondFactorRequired`
- **400**
  - Authentication failed because of wrong credentials.


  - **Content-Type:** `application/json`
- **401**
  - Authentication failed because of wrong credentials.


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.commons.ValidationErrors` (siehe Schema-Definition)
- **429**
- **default**

---

#### `POST /v2/authenticate-mfa`

**Zusammenfassung:** Validate your second factor.

**Operation ID:** `user-authenticate-mfa`

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `email` (erforderlich): string (email)
  - `multiFactorCode` (erforderlich): string
  - `password` (erforderlich): string

**Responses:**

- **200**
  - Your authentication request was successful and you've got an access token.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `expires` (erforderlich): string (date-time)
    - `refreshToken` (erforderlich): string
    - `token` (erforderlich): string
- **400**
  - Some of the specified values do not meet our requirements.
Possible your multiFactorCode is not valid


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.commons.ValidationErrors` (siehe Schema-Definition)
- **408**
  - Your first factor has been expired. Please call '/authentication' again


  - **Content-Type:** `application/json`
- **429**
- **default**

---

#### `POST /v2/authenticate-token-retrieval-key`

**Zusammenfassung:** Authenticate an user with an access token retrieval key.

**Operation ID:** `user-authenticate-with-access-token-retrieval-key`

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `accessTokenRetrievalKey` (erforderlich): string
  - `userId` (erforderlich): string (uuid)

**Responses:**

- **200**
  - Your authentication request was successful and you've got an access token.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `expiresAt` (erforderlich): string (date-time)
    - `refreshToken` (erforderlich): string
    - `token` (erforderlich): string
- **400**
- **429**
- **default**

---

#### `PUT /v2/logout`

**Zusammenfassung:** Terminate session and invalidate access token.

**Operation ID:** `user-logout`

**Tags:** User

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** Object

**Responses:**

- **204**
  - You've been logged out. The access token has been removed and invalidated.
- **400**
  - Some of the specified values do not meet our requirements.


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.commons.ValidationErrors` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/oauth2/authorize`

**Zusammenfassung:** Obtain authorization from the resource owner.

The OAuth 2.0 client requests authorization from the resource owner according to
[RFC6749](https://datatracker.ietf.org/doc/html/rfc6749). The
authorization request is made indirectly via the authorization
server as an intermediary.


**Operation ID:** `user-oauth-get-authorization`

**Tags:** User

**Parameter:**

- `x-access-token` (cookie) (optional)
  - Access Token of the Resource Owner.

  - Schema: string
- `grant_consent` (query) (optional)
  - Can be set in combination with `Authorization`-Header to grant consent for the requested scopes.
If set to `true`, the scopes will be marked as consented and the authorization server will
redirect the user-agent back to the client.
If set to `false`, the authorization server will redirect the user-agent back to the client with an
access denied error.
If not set and `Authorization`-Header is set, the user will be asked for consent.

  - Schema: boolean
- `grant_type` (query) (optional)
  - The grant type. Must be set to `authorization_code` for this endpoint.

  - Schema: string - Enum: `authorization_code`
- `response_type` (query) **(erforderlich)**
  - The response type. Must be set to `code` for this endpoint.

  - Schema: string - Enum: `code`
- `client_id` (query) **(erforderlich)**
  - The client identifier as described in
[RFC6749](https://datatracker.ietf.org/doc/html/rfc6749#section-2.2).

  - Schema: string
- `redirect_uri` (query) (optional)
  - The redirection URI to which the authorization server
directs the user-agent back after the authorization
endpoint. Must be a valid URI.

  - Schema: string (uri)
- `scope` (query) (optional)
  - The scope of the access request as described by
[RFC6749](https://datatracker.ietf.org/doc/html/rfc6749#section-3.3).

  - Schema: string
- `state` (query) (optional)
  - An opaque value used by the client to maintain state
between the request and callback. The authorization server
includes this value when redirecting the user-agent back to
the client. The parameter SHOULD be used for preventing
cross-site request forgery as described in
[RFC6749](https://datatracker.ietf.org/doc/html/rfc6749#section-10.12).

  - Schema: string
- `code_challenge` (query) (optional)
  - The code challenge as described by
[RFC7636](https://datatracker.ietf.org/doc/html/rfc7636#section-4.2).
If the authorization code flow should be used with Proof Key for Code Exchange (PKCE), this parameter
  must be set and the code verifier has to be given to the token endpoint.

  - Schema: string
- `code_challenge_method` (query) (optional)
  - The code challenge method as described in
[RFC7636](https://datatracker.ietf.org/doc/html/rfc7636#section-4.3).
If used, the code_challenge must be set as well and the code verifier
has to be given to the token endpoint

  - Schema: string - Enum: `S256`

**Responses:**

- **302**
  - The authorization server redirects the user-agent by
sending the HTTP response with status code 302 and the HTTP
`Location`-Header field containing the authorization endpoint URI
with either the query parameters `code` added, if successful or `error`
and `error_description` added, if not. Fore more Information see
[Authorization Response](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.2).

- **400**
  - The request is missing a required parameter, includes an
invalid parameter value, includes a parameter more than
once, or is otherwise malformed.


  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `error` (erforderlich): string - Enum: `invalid_request`
    - `error_description`: string
- **429**
- **default**

---

#### `POST /v2/oauth2/token`

**Zusammenfassung:** Retrieve Access Token from Authorization Code.

The OAuth 2.0 client retrieves an Access Token from an existing authorization code according to
[RFC6749](https://datatracker.ietf.org/doc/html/rfc6749).


**Operation ID:** `user-oauth-retrieve-access-token`

**Tags:** User

**Parameter:**

- `Authorization` (header) (optional)
  - The client credentials (`client_id` and `client_secret`), separated with a colon
and base64 encoded as described in
[RFC6749](https://datatracker.ietf.org/doc/html/rfc6749#section-2.3.1).
Submitting the `client_id` and `client_secret` as request-body as suggested is forbidden.

  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/x-www-form-urlencoded`
**Schema:** Object
  **Properties:**
  - `code` (erforderlich): string
  - `code_verifier`: string
  - `grant_type` (erforderlich): string - Enum: `authorization_code`
  - `redirect_uri` (erforderlich): string (uri)

**Responses:**

- **200**
  - The authorization server issues an access token as described in
[RFC6749](https://datatracker.ietf.org/doc/html/rfc6749#section-5.1).


  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `access_token` (erforderlich): string
    - `expires_in` (erforderlich): integer
    - `refresh_token` (erforderlich): string
    - `scope`: string
    - `token_type` (erforderlich): string - Enum: `bearer`
- **400**
  - The request of an access token is invalid as described in
[RFC6749](https://datatracker.ietf.org/doc/html/rfc6749#section-5.2).


  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `error` (erforderlich): string - Enum: `invalid_request`, `invalid_client`, `invalid_grant`, `unauthorized_client`, `unsupported_grant_type`, `invalid_scope`
    - `error_description`: string
- **429**
- **default**

---

#### `GET /v2/password-policies/{passwordPolicy}`

**Zusammenfassung:** Get a PasswordPolicy.

**Operation ID:** `password-validation-get-password-policy`

**Tags:** User

**Parameter:**

- `passwordPolicy` (path) **(erforderlich)**
  - The name of the PasswordPolicy to be retrieved.
  - Schema: string

**Responses:**

- **200**
  - The PasswordPolicy to be retrieved.

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.policy.Policy` (siehe Schema-Definition)
- **429**
- **default**

---

#### `GET /v2/password/policies/{path}`

**Zusammenfassung:** Get a password policy.

**Operation ID:** `password-validation-get-password-policy-v2-deprecated`

**Tags:** User

**Parameter:**

- `path` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **200**
  - The requested password policy

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.policy.Policy` (siehe Schema-Definition)
- **429**
- **default**

---

#### `GET /v2/poll-settings/{userId}`

**Zusammenfassung:** Get poll settings for the specified user.

**Operation ID:** `user-get-poll-status`

**Tags:** User

**Parameter:**

- `userId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **200**

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.poll.UserPollSettings` (siehe Schema-Definition)
- **400**
- **404**
- **429**
- **default**

---

#### `POST /v2/poll-settings/{userId}`

**Zusammenfassung:** Store new or update poll settings.

**Operation ID:** `user-post-poll-status`

**Tags:** User

**Parameter:**

- `userId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**



**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `status` (erforderlich): string - Enum: `completed`, `muted`, `ignored`
  - `userId` (erforderlich): string

**Responses:**

- **200**
  - The updated poll settings.

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.poll.UserPollSettings` (siehe Schema-Definition)
- **400**
- **403**
- **429**
- **default**

---

#### `GET /v2/poll-settings/{userId}`

**Zusammenfassung:** Get poll settings for the specified user.

**Operation ID:** `user-get-poll-status`

**Tags:** User

**Parameter:**

- `userId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **200**

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.poll.UserPollSettings` (siehe Schema-Definition)
- **400**
- **404**
- **429**
- **default**

---

#### `POST /v2/poll-settings/{userId}`

**Zusammenfassung:** Store new or update poll settings.

**Operation ID:** `user-post-poll-status`

**Tags:** User

**Parameter:**

- `userId` (path) **(erforderlich)**
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**



**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `status` (erforderlich): string - Enum: `completed`, `muted`, `ignored`
  - `userId` (erforderlich): string

**Responses:**

- **200**
  - The updated poll settings.

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.poll.UserPollSettings` (siehe Schema-Definition)
- **400**
- **403**
- **429**
- **default**

---

#### `POST /v2/register`

**Zusammenfassung:** Register with email and password.

**Operation ID:** `user-register`

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `email` (erforderlich): string (email)
  - `password` (erforderlich): string
  - `person` (erforderlich): `de.mittwald.v1.commons.Person` (siehe Schema-Definition)

**Responses:**

- **201**
  - Registration was successfull. A verification email will be sent to the specified email address.
The users can be used as soon as the verification link was opened


  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `userId` (erforderlich): string (uuid)
- **400**
  - Some of the specified values does not meet our requirements.
Possible domain specific `type` values are:
    * EmailInUse
    * PasswordIsLeaked
    * ValidationError
    * PasswordEqualsEmail


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.commons.ValidationErrors` (siehe Schema-Definition)
- **429**
- **default**

---

#### `POST /v2/signup/authentication`

**Zusammenfassung:** Authenticate yourself to get an access token.

This route is deprecated. Please use /v2/authenticate instead.

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `email` (erforderlich): string
  - `password` (erforderlich): string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

---

#### `POST /v2/signup/authentication/mfa`

**Zusammenfassung:** Validate your second factor.

This route is deprecated. Please use /v2/authenticate-mfa instead.

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `email` (erforderlich): string (email)
  - `multiFactorCode` (erforderlich): string
  - `password` (erforderlich): string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

---

#### `GET /v2/signup/email`

**Zusammenfassung:** Get your verified Email-Address.

This route is deprecated. Please use /v2/users/self/credentials/email instead.

**Tags:** User

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/signup/email`

**Zusammenfassung:** Change your Email-Address. Replaced by `PUT` `/v2/users/self/credentials/email`.

**Operation ID:** `deprecated-user-change-email`

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `email` (erforderlich): string (email)

**Responses:**

- **200**
  - Your email has been added, but needs to be verfied. Check your mails and
call /email/verify with the verification code sent with the mail.

- **400**
  - Some of the specified values does not meet our requirements.
Possible domain specific `type` values are:
  * EmailInUse
  * EmailBlacklisted
  * EmailMXInvalid


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.commons.ValidationErrors` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/signup/email`

**Zusammenfassung:** Get your verified Email-Address.

This route is deprecated. Please use /v2/users/self/credentials/email instead.

**Tags:** User

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/signup/email`

**Zusammenfassung:** Change your Email-Address. Replaced by `PUT` `/v2/users/self/credentials/email`.

**Operation ID:** `deprecated-user-change-email`

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `email` (erforderlich): string (email)

**Responses:**

- **200**
  - Your email has been added, but needs to be verfied. Check your mails and
call /email/verify with the verification code sent with the mail.

- **400**
  - Some of the specified values does not meet our requirements.
Possible domain specific `type` values are:
  * EmailInUse
  * EmailBlacklisted
  * EmailMXInvalid


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.commons.ValidationErrors` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/signup/email/resend`

**Zusammenfassung:** Resend the Email-Address verification email. Replaced by `POST` `/v2/users/self/credentials/email/actions/resend-email`.


**Operation ID:** `deprecated-user-resend-verification-email`

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `email`: string (email)
  - `userId`: string (uuid)

**Responses:**

- **204**
  - New Email-Address verification mail was sent.
- **400**
  - Some of the specified values do not meet our requirements.


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.commons.ValidationErrors` (siehe Schema-Definition)
- **429**
- **default**

---

#### `POST /v2/signup/email/verify`

**Zusammenfassung:** Verify an added Email-Address. Replaced by `POST` `/v2/users/self/credentials/email/actions/verify-email`.

**Operation ID:** `deprecated-user-verify-email`

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `email` (erforderlich): string (email)
  - `token`: string

**Responses:**

- **200**
  - Email has been verified.
- **400**
  - Some of the specified values do not meet our requirements.
Possible domain specific `type` values are:
  * WrongVerificationToken
  * EmailNotFound
  * WrongVerificationToken
  * EmailAddressAlreadyVerified


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.commons.ValidationErrors` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/signup/logout`

**Zusammenfassung:** Terminate session and invalidate access token. Replaced by `DELETE` `/v2/users/self/sessions/{current}`.

**Operation ID:** `deprecated-user-logout`

**Tags:** User

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** Object

**Responses:**

- **200**
  - You've been logged out. The access token has been removed and invalidated.
- **400**
  - Some of the specified values do not meet our requirements.


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.commons.ValidationErrors` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/signup/mfa`

**Zusammenfassung:** Get your current multi factor auth status.

This route is deprecated. Please use /v2/users/self/credentials/mfa instead.

**Tags:** User

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/signup/mfa`

**Zusammenfassung:** Initialize Multi Factor Authentication. If successful, it needs to be confirmed, before usage of mfa.

This route is deprecated. Please use /v2/users/self/credentials/init-mfa instead.

**Tags:** User

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** Object

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/signup/mfa`

**Zusammenfassung:** Disable Multi Factor Authentication. Replaced by `DELETE` `/v2/users/self/credentials/mfa`.

**Operation ID:** `deprecated-user-disable-mfa`

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `multiFactorCode` (erforderlich): string

**Responses:**

- **200**
  - Multi Factor Authentication was disabled.

  - **Content-Type:** `application/json`
    - Schema: Object
- **400**
  - Some of the specified values does not meet our requirements.
Possible domain specific `type` values are:
  * MultiFactorCodeNotValid


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.commons.ValidationErrors` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/signup/mfa`

**Zusammenfassung:** Get your current multi factor auth status.

This route is deprecated. Please use /v2/users/self/credentials/mfa instead.

**Tags:** User

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/signup/mfa`

**Zusammenfassung:** Initialize Multi Factor Authentication. If successful, it needs to be confirmed, before usage of mfa.

This route is deprecated. Please use /v2/users/self/credentials/init-mfa instead.

**Tags:** User

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** Object

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/signup/mfa`

**Zusammenfassung:** Disable Multi Factor Authentication. Replaced by `DELETE` `/v2/users/self/credentials/mfa`.

**Operation ID:** `deprecated-user-disable-mfa`

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `multiFactorCode` (erforderlich): string

**Responses:**

- **200**
  - Multi Factor Authentication was disabled.

  - **Content-Type:** `application/json`
    - Schema: Object
- **400**
  - Some of the specified values does not meet our requirements.
Possible domain specific `type` values are:
  * MultiFactorCodeNotValid


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.commons.ValidationErrors` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/signup/mfa`

**Zusammenfassung:** Get your current multi factor auth status.

This route is deprecated. Please use /v2/users/self/credentials/mfa instead.

**Tags:** User

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/signup/mfa`

**Zusammenfassung:** Initialize Multi Factor Authentication. If successful, it needs to be confirmed, before usage of mfa.

This route is deprecated. Please use /v2/users/self/credentials/init-mfa instead.

**Tags:** User

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** Object

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/signup/mfa`

**Zusammenfassung:** Disable Multi Factor Authentication. Replaced by `DELETE` `/v2/users/self/credentials/mfa`.

**Operation ID:** `deprecated-user-disable-mfa`

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `multiFactorCode` (erforderlich): string

**Responses:**

- **200**
  - Multi Factor Authentication was disabled.

  - **Content-Type:** `application/json`
    - Schema: Object
- **400**
  - Some of the specified values does not meet our requirements.
Possible domain specific `type` values are:
  * MultiFactorCodeNotValid


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.commons.ValidationErrors` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/signup/mfa/confirm`

**Zusammenfassung:** Confirm Multi Factor Authentication.

This route is deprecated. Please use /v2/users/self/credentials/mfa instead.

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `multiFactorCode` (erforderlich): string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/signup/mfa/reset-recoverycodes`

**Zusammenfassung:** Reset RecoveryCodes for MFA.

This route is deprecated. Please use /v2/users/self/credentials/mfa instead.

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `multiFactorCode` (erforderlich): string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/signup/password`

**Zusammenfassung:** The timestamp of your latest password change.

This route is deprecated. Please use /v2/users/self/credentials/password-updated-at instead.

**Tags:** User

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** Object

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/signup/password`

**Zusammenfassung:** Change your password.

This route is deprecated. Please use /v2/users/self/credentials/password instead.

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `multiFactorCode`: string
  - `newPassword` (erforderlich): string
  - `oldPassword` (erforderlich): string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/signup/password`

**Zusammenfassung:** The timestamp of your latest password change.

This route is deprecated. Please use /v2/users/self/credentials/password-updated-at instead.

**Tags:** User

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** Object

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/signup/password`

**Zusammenfassung:** Change your password.

This route is deprecated. Please use /v2/users/self/credentials/password instead.

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `multiFactorCode`: string
  - `newPassword` (erforderlich): string
  - `oldPassword` (erforderlich): string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/signup/password/reset`

**Zusammenfassung:** Initialize password reset process. Replaced by `POST` `/v2/users/self/credentials/actions/init-password-reset`.


**Operation ID:** `deprecated-user-init-password-reset`

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `email` (erforderlich): string (email)

**Responses:**

- **200**
  - The password reset process has been initialized and an email with confirmation code has been sent.

- **400**
  - Some of the specified values do not meet our requirements.


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.commons.ValidationErrors` (siehe Schema-Definition)
- **429**
- **default**

---

#### `POST /v2/signup/password/reset/confirm`

**Zusammenfassung:** Confirm password reset. Replaced by `POST` `/v2/users/self/credentials/password/confirm-reset`.

**Operation ID:** `deprecated-user-confirm-password-reset`

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `password` (erforderlich): string
  - `token` (erforderlich): string
  - `userId` (erforderlich): string (uuid)

**Responses:**

- **200**
  - Password reset was successful.
- **400**
  - Some of the specified values do not meet our requirements.
Possible domain specific `type` values are:
  * WrongPasswordResetToken
  * EmailAddressNotVerified
  * PasswordIsLeaked
  * ValidationError
  * PasswordEqualsEmail


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.commons.ValidationErrors` (siehe Schema-Definition)
- **429**
- **default**

---

#### `GET /v2/signup/profile`

**Zusammenfassung:** Get your account information. Replaced by `GET` `/v2/users/self`.

This route is deprecated. Please use /v2/users/self/personal-information instead.

**Tags:** User

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** Object

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/signup/profile`

**Zusammenfassung:** Update your account information.

**Operation ID:** `deprecated-user-update-account`

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `person` (erforderlich): `de.mittwald.v1.commons.Person` (siehe Schema-Definition)

**Responses:**

- **200**
  - Account has been updated.
- **400**
  - Some of the specified values does not meet our requirements.


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.commons.ValidationErrors` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/signup/profile`

**Zusammenfassung:** Delete your account and all your personal data.

This route is deprecated. Please use /v2/users/self instead.

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `multiFactorCode`: string
  - `password` (erforderlich): string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/signup/profile`

**Zusammenfassung:** Get your account information. Replaced by `GET` `/v2/users/self`.

This route is deprecated. Please use /v2/users/self/personal-information instead.

**Tags:** User

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** Object

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/signup/profile`

**Zusammenfassung:** Update your account information.

**Operation ID:** `deprecated-user-update-account`

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `person` (erforderlich): `de.mittwald.v1.commons.Person` (siehe Schema-Definition)

**Responses:**

- **200**
  - Account has been updated.
- **400**
  - Some of the specified values does not meet our requirements.


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.commons.ValidationErrors` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/signup/profile`

**Zusammenfassung:** Delete your account and all your personal data.

This route is deprecated. Please use /v2/users/self instead.

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `multiFactorCode`: string
  - `password` (erforderlich): string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/signup/profile`

**Zusammenfassung:** Get your account information. Replaced by `GET` `/v2/users/self`.

This route is deprecated. Please use /v2/users/self/personal-information instead.

**Tags:** User

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** Object

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/signup/profile`

**Zusammenfassung:** Update your account information.

**Operation ID:** `deprecated-user-update-account`

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `person` (erforderlich): `de.mittwald.v1.commons.Person` (siehe Schema-Definition)

**Responses:**

- **200**
  - Account has been updated.
- **400**
  - Some of the specified values does not meet our requirements.


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.commons.ValidationErrors` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/signup/profile`

**Zusammenfassung:** Delete your account and all your personal data.

This route is deprecated. Please use /v2/users/self instead.

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `multiFactorCode`: string
  - `password` (erforderlich): string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/signup/registration`

**Zusammenfassung:** Register with email and password.

This route is deprecated. Please use /v2/register instead.

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `email` (erforderlich): string (email)
  - `password` (erforderlich): string
  - `person` (erforderlich): `de.mittwald.v1.commons.Person` (siehe Schema-Definition)

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

---

#### `POST /v2/signup/registration/verification`

**Zusammenfassung:** Verify your registration.

This route is deprecated. Please use /v2/verify-registration instead.

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `email` (erforderlich): string (email)
  - `token` (erforderlich): string
  - `userId` (erforderlich): string (uuid)

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

---

#### `GET /v2/signup/sessions`

**Zusammenfassung:** List all sessions.

This route is deprecated. Please use /v2/users/self/sessions instead.

**Tags:** User

**Parameter:**

- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/signup/sessions`

**Zusammenfassung:** Terminate all sessions, except the current session. Replaced by `DELETE` `/v2/users/self/sessions`.

**Operation ID:** `deprecated-user-terminate-all-sessions`

**Tags:** User

**Responses:**

- **200**
  - All sessions terminated.
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/signup/sessions`

**Zusammenfassung:** List all sessions.

This route is deprecated. Please use /v2/users/self/sessions instead.

**Tags:** User

**Parameter:**

- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/signup/sessions`

**Zusammenfassung:** Terminate all sessions, except the current session. Replaced by `DELETE` `/v2/users/self/sessions`.

**Operation ID:** `deprecated-user-terminate-all-sessions`

**Tags:** User

**Responses:**

- **200**
  - All sessions terminated.
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/signup/sessions/{tokenId}`

**Zusammenfassung:** Get a specific session.

This route is deprecated. Please use /v2/users/self/sessions/{tokenId} instead.

**Tags:** User

**Parameter:**

- `tokenId` (path) **(erforderlich)**
  - TokenId to identify a specific session.
  - Schema: string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/signup/sessions/{tokenId}`

**Zusammenfassung:** Terminate a specific Session. Replaced by `DELETE` `/v2/users/self/sessions/{tokenId}`.

**Operation ID:** `deprecated-user-terminate-session`

**Tags:** User

**Parameter:**

- `tokenId` (path) **(erforderlich)**
  - TokenId to identify the concrete session.
  - Schema: string

**Responses:**

- **200**
  - Session terminated.
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/signup/sessions/{tokenId}`

**Zusammenfassung:** Get a specific session.

This route is deprecated. Please use /v2/users/self/sessions/{tokenId} instead.

**Tags:** User

**Parameter:**

- `tokenId` (path) **(erforderlich)**
  - TokenId to identify a specific session.
  - Schema: string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/signup/sessions/{tokenId}`

**Zusammenfassung:** Terminate a specific Session. Replaced by `DELETE` `/v2/users/self/sessions/{tokenId}`.

**Operation ID:** `deprecated-user-terminate-session`

**Tags:** User

**Parameter:**

- `tokenId` (path) **(erforderlich)**
  - TokenId to identify the concrete session.
  - Schema: string

**Responses:**

- **200**
  - Session terminated.
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/signup/ssh`

**Zusammenfassung:** Get your stored ssh-keys.

This route is deprecated. Please use /v2/users/self/ssh-keys instead.

**Tags:** User

**Parameter:**

- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/signup/ssh`

**Zusammenfassung:** Store a new ssh-key.

This route is deprecated. Please use /v2/users/self/ssh-keys instead.

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `expiresAt`: string (date-time)
  - `publicKey` (erforderlich): string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/signup/ssh`

**Zusammenfassung:** Get your stored ssh-keys.

This route is deprecated. Please use /v2/users/self/ssh-keys instead.

**Tags:** User

**Parameter:**

- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/signup/ssh`

**Zusammenfassung:** Store a new ssh-key.

This route is deprecated. Please use /v2/users/self/ssh-keys instead.

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `expiresAt`: string (date-time)
  - `publicKey` (erforderlich): string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/signup/ssh/{sshKeyId}`

**Zusammenfassung:** Get a specific stored ssh-key.

This route is deprecated. Please use /v2/users/self/ssh-keys/{sshKeyId} instead.

**Tags:** User

**Parameter:**

- `sshKeyId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/signup/ssh/{sshKeyId}`

**Zusammenfassung:** Edit a stored ssh-key. Replaced by `PUT` `/v2/users/self/ssh-keys/{sshKeyId}`.

**Operation ID:** `deprecated-user-edit-ssh-key`

**Tags:** User

**Parameter:**

- `sshKeyId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `comment` (erforderlich): string
  - `expiresAt`: string (date-time)

**Responses:**

- **200**
  - The ssh-key has been edited.
- **400**
  - Some of the specified values do not meet our requirements.


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.commons.ValidationErrors` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/signup/ssh/{sshKeyId}`

**Zusammenfassung:** Remove a ssh-key. Replaced by `DELETE` `/v2/users/self/ssh-keys/{sshKeyId}`.

**Operation ID:** `deprecated-user-delete-ssh-key`

**Tags:** User

**Parameter:**

- `sshKeyId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **200**
  - The ssh-key was removed.
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/signup/ssh/{sshKeyId}`

**Zusammenfassung:** Get a specific stored ssh-key.

This route is deprecated. Please use /v2/users/self/ssh-keys/{sshKeyId} instead.

**Tags:** User

**Parameter:**

- `sshKeyId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/signup/ssh/{sshKeyId}`

**Zusammenfassung:** Edit a stored ssh-key. Replaced by `PUT` `/v2/users/self/ssh-keys/{sshKeyId}`.

**Operation ID:** `deprecated-user-edit-ssh-key`

**Tags:** User

**Parameter:**

- `sshKeyId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `comment` (erforderlich): string
  - `expiresAt`: string (date-time)

**Responses:**

- **200**
  - The ssh-key has been edited.
- **400**
  - Some of the specified values do not meet our requirements.


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.commons.ValidationErrors` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/signup/ssh/{sshKeyId}`

**Zusammenfassung:** Remove a ssh-key. Replaced by `DELETE` `/v2/users/self/ssh-keys/{sshKeyId}`.

**Operation ID:** `deprecated-user-delete-ssh-key`

**Tags:** User

**Parameter:**

- `sshKeyId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **200**
  - The ssh-key was removed.
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/signup/ssh/{sshKeyId}`

**Zusammenfassung:** Get a specific stored ssh-key.

This route is deprecated. Please use /v2/users/self/ssh-keys/{sshKeyId} instead.

**Tags:** User

**Parameter:**

- `sshKeyId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/signup/ssh/{sshKeyId}`

**Zusammenfassung:** Edit a stored ssh-key. Replaced by `PUT` `/v2/users/self/ssh-keys/{sshKeyId}`.

**Operation ID:** `deprecated-user-edit-ssh-key`

**Tags:** User

**Parameter:**

- `sshKeyId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `comment` (erforderlich): string
  - `expiresAt`: string (date-time)

**Responses:**

- **200**
  - The ssh-key has been edited.
- **400**
  - Some of the specified values do not meet our requirements.


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.commons.ValidationErrors` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/signup/ssh/{sshKeyId}`

**Zusammenfassung:** Remove a ssh-key. Replaced by `DELETE` `/v2/users/self/ssh-keys/{sshKeyId}`.

**Operation ID:** `deprecated-user-delete-ssh-key`

**Tags:** User

**Parameter:**

- `sshKeyId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **200**
  - The ssh-key was removed.
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/signup/supportcode`

**Zusammenfassung:** Request a support code.

This route is deprecated. Please use /v2/users/self/credentials/support-code instead.

**Tags:** User

**Parameter:**

- `forceRecreate` (query) (optional)
  - Schema: boolean

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/signup/supportcodes`

**Zusammenfassung:** Request a support code.

This route is deprecated. Please use /v2/users/self/credentials/support-code instead.

**Tags:** User

**Parameter:**

- `forceRecreate` (query) (optional)
  - Schema: boolean

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/signup/token/api`

**Zusammenfassung:** List all of your ApiTokens.

This route is deprecated. Please use /v2/users/self/api-tokens instead.

**Tags:** User

**Parameter:**

- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/signup/token/api`

**Zusammenfassung:** Store a new ApiToken.

This route is deprecated. Please use /v2/users/self/api-tokens instead.

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `description` (erforderlich): string
  - `expiresAt`: string (date-time)
  - `roles` (erforderlich): Array<string - Enum: `api_read`, `api_write`>

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/signup/token/api`

**Zusammenfassung:** List all of your ApiTokens.

This route is deprecated. Please use /v2/users/self/api-tokens instead.

**Tags:** User

**Parameter:**

- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/signup/token/api`

**Zusammenfassung:** Store a new ApiToken.

This route is deprecated. Please use /v2/users/self/api-tokens instead.

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `description` (erforderlich): string
  - `expiresAt`: string (date-time)
  - `roles` (erforderlich): Array<string - Enum: `api_read`, `api_write`>

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/signup/token/api/{apiTokenId}`

**Zusammenfassung:** Get a specific ApiToken.

This route is deprecated. Please use /v2/users/self/api-tokens/{apiTokenId} instead.

**Tags:** User

**Parameter:**

- `apiTokenId` (path) **(erforderlich)**
  - The id of an ApiToken.
  - Schema: string (uuid)

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/signup/token/api/{apiTokenId}`

**Zusammenfassung:** Update an existing `ApiToken`. Replaced by `PUT` `/v2/users/{userId}/api-tokens/{apiTokenId}`.

**Operation ID:** `deprecated-user-edit-api-token`

**Tags:** User

**Parameter:**

- `apiTokenId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `description` (erforderlich): string
  - `expiresAt`: string (date-time)

**Responses:**

- **200**
  - ApiToken was updated.
- **400**
  - Some of the specified values do not meet our requirements.


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.commons.ValidationErrors` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/signup/token/api/{apiTokenId}`

**Zusammenfassung:** Deletes an ApiToken. Replaces by `DELETE` `/v2/user/{userid}/api-tokens/{apiTokenId}`.

**Operation ID:** `deprecated-user-delete-api-token`

**Tags:** User

**Parameter:**

- `apiTokenId` (path) **(erforderlich)**
  - The uuid of an ApiToken.
  - Schema: string (uuid)

**Responses:**

- **200**
  - The `ApiToken` has been deleted.
- **400**
  - Some of the specified values does not meet our requirements.
Possible domain specific `type` values are:
  * ValidationError


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.commons.ValidationErrors` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/signup/token/api/{apiTokenId}`

**Zusammenfassung:** Get a specific ApiToken.

This route is deprecated. Please use /v2/users/self/api-tokens/{apiTokenId} instead.

**Tags:** User

**Parameter:**

- `apiTokenId` (path) **(erforderlich)**
  - The id of an ApiToken.
  - Schema: string (uuid)

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/signup/token/api/{apiTokenId}`

**Zusammenfassung:** Update an existing `ApiToken`. Replaced by `PUT` `/v2/users/{userId}/api-tokens/{apiTokenId}`.

**Operation ID:** `deprecated-user-edit-api-token`

**Tags:** User

**Parameter:**

- `apiTokenId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `description` (erforderlich): string
  - `expiresAt`: string (date-time)

**Responses:**

- **200**
  - ApiToken was updated.
- **400**
  - Some of the specified values do not meet our requirements.


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.commons.ValidationErrors` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/signup/token/api/{apiTokenId}`

**Zusammenfassung:** Deletes an ApiToken. Replaces by `DELETE` `/v2/user/{userid}/api-tokens/{apiTokenId}`.

**Operation ID:** `deprecated-user-delete-api-token`

**Tags:** User

**Parameter:**

- `apiTokenId` (path) **(erforderlich)**
  - The uuid of an ApiToken.
  - Schema: string (uuid)

**Responses:**

- **200**
  - The `ApiToken` has been deleted.
- **400**
  - Some of the specified values does not meet our requirements.
Possible domain specific `type` values are:
  * ValidationError


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.commons.ValidationErrors` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/signup/token/api/{apiTokenId}`

**Zusammenfassung:** Get a specific ApiToken.

This route is deprecated. Please use /v2/users/self/api-tokens/{apiTokenId} instead.

**Tags:** User

**Parameter:**

- `apiTokenId` (path) **(erforderlich)**
  - The id of an ApiToken.
  - Schema: string (uuid)

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/signup/token/api/{apiTokenId}`

**Zusammenfassung:** Update an existing `ApiToken`. Replaced by `PUT` `/v2/users/{userId}/api-tokens/{apiTokenId}`.

**Operation ID:** `deprecated-user-edit-api-token`

**Tags:** User

**Parameter:**

- `apiTokenId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `description` (erforderlich): string
  - `expiresAt`: string (date-time)

**Responses:**

- **200**
  - ApiToken was updated.
- **400**
  - Some of the specified values do not meet our requirements.


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.commons.ValidationErrors` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/signup/token/api/{apiTokenId}`

**Zusammenfassung:** Deletes an ApiToken. Replaces by `DELETE` `/v2/user/{userid}/api-tokens/{apiTokenId}`.

**Operation ID:** `deprecated-user-delete-api-token`

**Tags:** User

**Parameter:**

- `apiTokenId` (path) **(erforderlich)**
  - The uuid of an ApiToken.
  - Schema: string (uuid)

**Responses:**

- **200**
  - The `ApiToken` has been deleted.
- **400**
  - Some of the specified values does not meet our requirements.
Possible domain specific `type` values are:
  * ValidationError


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.commons.ValidationErrors` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/signup/token/check`

**Zusammenfassung:** Check token for validity.

This route is deprecated. Please use /v2/users/self/credentials/token instead.

**Tags:** User

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** Object

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/user`

**Zusammenfassung:** Get profile information for the executing user

Use /v2/users/{userId} instead.

**Operation ID:** `deprecated-user-service-user-get-own`

**Tags:** User

**Responses:**

- **200**
  - The Profile

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.user.User` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/user/feedback`

**Zusammenfassung:** Returns your submitted feedback

Use /v2/users/{userId}/feedback instead.

**Operation ID:** `deprecated-user-service-feedback-list`

**Tags:** User

**Parameter:**

- `subject` (query) (optional)
  - Schema: string

**Responses:**

- **200**
  - A list of feedback submitted by the user

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.user.UserFeedback` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.user.UserFeedback` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/user/feedback`

**Zusammenfassung:** Submit user feedback

Use /v2/users/self/feedback instead.

**Operation ID:** `deprecated-user-service-feedback-create`

**Tags:** User

**Parameter:**


**Request Body:**

Request Body (optional)

The user feedback

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `message`: string
  - `origin` (erforderlich): string
  - `subject` (erforderlich): string
  - `vote` (erforderlich): number

**Responses:**

- **201**

  - **Content-Type:** `application/json`
    - Schema: Object
- **401**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/user/feedback`

**Zusammenfassung:** Returns your submitted feedback

Use /v2/users/{userId}/feedback instead.

**Operation ID:** `deprecated-user-service-feedback-list`

**Tags:** User

**Parameter:**

- `subject` (query) (optional)
  - Schema: string

**Responses:**

- **200**
  - A list of feedback submitted by the user

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.user.UserFeedback` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.user.UserFeedback` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/user/feedback`

**Zusammenfassung:** Submit user feedback

Use /v2/users/self/feedback instead.

**Operation ID:** `deprecated-user-service-feedback-create`

**Tags:** User

**Parameter:**


**Request Body:**

Request Body (optional)

The user feedback

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `message`: string
  - `origin` (erforderlich): string
  - `subject` (erforderlich): string
  - `vote` (erforderlich): number

**Responses:**

- **201**

  - **Content-Type:** `application/json`
    - Schema: Object
- **401**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/user/issues`

**Zusammenfassung:** create a new issue

was replaced by /v2/users/self/feedback.

**Operation ID:** `deprecated-user-service-issue-new`

**Tags:** User

**Request Body:**

Request Body (optional)

Submit an issue.

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `message` (erforderlich): string
  - `origin`: string
  - `subject`: string
  - `type` (erforderlich): string - Enum: `feedback`, `bug`

**Responses:**

- **201**
  - Issue created
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/user/settings`

**Zusammenfassung:** Get personalized settings for the user executing the request

Use /v2/users/{userId}/settings instead.

**Operation ID:** `deprecated-user-service-personalized-settings-get`

**Tags:** User

**Responses:**

- **200**
  - The settingsString

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `settingsString`: string
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/user/settings`

**Zusammenfassung:** update personalized settings

Use /v2/users/{userId}/settings instead.

**Operation ID:** `deprecated-user-service-personalized-settings-update`

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `settingsString` (erforderlich): string

**Responses:**

- **204**
  - PersonalSettings have been updated
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/user/settings`

**Zusammenfassung:** Get personalized settings for the user executing the request

Use /v2/users/{userId}/settings instead.

**Operation ID:** `deprecated-user-service-personalized-settings-get`

**Tags:** User

**Responses:**

- **200**
  - The settingsString

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `settingsString`: string
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/user/settings`

**Zusammenfassung:** update personalized settings

Use /v2/users/{userId}/settings instead.

**Operation ID:** `deprecated-user-service-personalized-settings-update`

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `settingsString` (erforderlich): string

**Responses:**

- **204**
  - PersonalSettings have been updated
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/user/{userId}`

**Zusammenfassung:** Get profile information for the specified user if the user is related to the executing user

Use /v2/users/{userId} instead.

**Operation ID:** `deprecated-user-service-user-get`

**Tags:** User

**Parameter:**

- `userId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **200**
  - The Profile

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.user.User` (siehe Schema-Definition)
- **403**
- **404**
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/user/{userId}`

**Zusammenfassung:** Change your personal information

Use /v2/users/{userId} instead.

**Operation ID:** `deprecated-user-service-personal-information-update`

**Tags:** User

**Parameter:**

- `userId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `person` (erforderlich): `de.mittwald.v1.commons.Person` (siehe Schema-Definition)

**Responses:**

- **204**
  - Your personal information has been changed
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/user/{userId}`

**Zusammenfassung:** Get profile information for the specified user if the user is related to the executing user

Use /v2/users/{userId} instead.

**Operation ID:** `deprecated-user-service-user-get`

**Tags:** User

**Parameter:**

- `userId` (path) **(erforderlich)**
  - Schema: string

**Responses:**

- **200**
  - The Profile

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.user.User` (siehe Schema-Definition)
- **403**
- **404**
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/user/{userId}`

**Zusammenfassung:** Change your personal information

Use /v2/users/{userId} instead.

**Operation ID:** `deprecated-user-service-personal-information-update`

**Tags:** User

**Parameter:**

- `userId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `person` (erforderlich): `de.mittwald.v1.commons.Person` (siehe Schema-Definition)

**Responses:**

- **204**
  - Your personal information has been changed
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/user/{userId}/avatar`

**Zusammenfassung:** Request a new avatar upload

Use /v2/users/{userId}/avatar instead.

**Operation ID:** `deprecated-user-service-avatar-request-upload`

**Tags:** User

**Parameter:**

- `userId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** Object

**Responses:**

- **200**
  - Avatar upload request was successful. Use the `refId` to upload your avatar to the /v2/files/:refId

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `refId` (erforderlich): string (uuid)
    - `rules` (erforderlich): Object
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/user/{userId}/avatar`

**Zusammenfassung:** Remove Avatar

Use /v2/users/{userId}/avatar instead.

**Operation ID:** `deprecated-user-service-avatar-remove`

**Tags:** User

**Parameter:**

- `userId` (path) **(erforderlich)**
  - `self` or the id of a user.
  - Schema: string

**Responses:**

- **204**
  - Avatar removal was successful
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/user/{userId}/avatar`

**Zusammenfassung:** Request a new avatar upload

Use /v2/users/{userId}/avatar instead.

**Operation ID:** `deprecated-user-service-avatar-request-upload`

**Tags:** User

**Parameter:**

- `userId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** Object

**Responses:**

- **200**
  - Avatar upload request was successful. Use the `refId` to upload your avatar to the /v2/files/:refId

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `refId` (erforderlich): string (uuid)
    - `rules` (erforderlich): Object
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/user/{userId}/avatar`

**Zusammenfassung:** Remove Avatar

Use /v2/users/{userId}/avatar instead.

**Operation ID:** `deprecated-user-service-avatar-remove`

**Tags:** User

**Parameter:**

- `userId` (path) **(erforderlich)**
  - `self` or the id of a user.
  - Schema: string

**Responses:**

- **204**
  - Avatar removal was successful
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/user/{userId}/phone`

**Zusammenfassung:** Add phone number and init verification process

use /v2/users/{userId}/phone instead.

**Operation ID:** `deprecated-user-service-phone-number-add`

**Tags:** User

**Parameter:**

- `userId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `phoneNumber` (erforderlich): string

**Responses:**

- **204**
  - PhoneNumber was added successfully. Now, it can be verified under /v2/user/{userId}/phone/verify
- **400**
- **409**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/user/{userId}/phone`

**Zusammenfassung:** remove your PhoneNumber

Use /v2/users/{userId}/phone instead.

**Operation ID:** `deprecated-user-service-phone-number-remove`

**Tags:** User

**Parameter:**

- `userId` (path) **(erforderlich)**
  - `self` or the id of a user.
  - Schema: string

**Responses:**

- **204**
  - PhoneNumber removal was successful
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/user/{userId}/phone`

**Zusammenfassung:** Add phone number and init verification process

use /v2/users/{userId}/phone instead.

**Operation ID:** `deprecated-user-service-phone-number-add`

**Tags:** User

**Parameter:**

- `userId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `phoneNumber` (erforderlich): string

**Responses:**

- **204**
  - PhoneNumber was added successfully. Now, it can be verified under /v2/user/{userId}/phone/verify
- **400**
- **409**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/user/{userId}/phone`

**Zusammenfassung:** remove your PhoneNumber

Use /v2/users/{userId}/phone instead.

**Operation ID:** `deprecated-user-service-phone-number-remove`

**Tags:** User

**Parameter:**

- `userId` (path) **(erforderlich)**
  - `self` or the id of a user.
  - Schema: string

**Responses:**

- **204**
  - PhoneNumber removal was successful
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/user/{userId}/phone/verify`

**Zusammenfassung:** Verify phone number

Instead, use /v2/users/{userId}/actions/verify-phone or alternatively /v2/users/{userId}/phone/verify.

**Operation ID:** `deprecated-user-service-phone-number-verify`

**Tags:** User

**Parameter:**

- `userId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `code` (erforderlich): string
  - `phoneNumber` (erforderlich): string

**Responses:**

- **204**
  - The PhoneNumber has been verified
- **400**
- **404**
- **409**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/users/self`

**Zusammenfassung:** Delete your account and all your personal data.

**Operation ID:** `user-delete-user`

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `multiFactorCode`: string
  - `password` (erforderlich): string

**Responses:**

- **200**
  - Your user has been deleted.
- **202**
- **400**
  - Some of the specified values does not meet our requirements.
Possible domain specific `type` values are:
           * WrongPassword
           * MfaCodeNotValid


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.commons.ValidationErrors` (siehe Schema-Definition)
- **409**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/users/self/api-tokens`

**Zusammenfassung:** List all of your ApiTokens.

**Operation ID:** `user-list-api-tokens`

**Tags:** User

**Parameter:**

- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer

**Responses:**

- **200**
  - A list of ApiTokens.

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.signup.ApiToken` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.signup.ApiToken` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/users/self/api-tokens`

**Zusammenfassung:** Store a new ApiToken.

**Operation ID:** `user-create-api-token`

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `description` (erforderlich): string
  - `expiresAt`: string (date-time)
  - `roles` (erforderlich): Array<string - Enum: `api_read`, `api_write`>

**Responses:**

- **201**
  - ApiToken was added.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `token` (erforderlich): string
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/users/self/api-tokens`

**Zusammenfassung:** List all of your ApiTokens.

**Operation ID:** `user-list-api-tokens`

**Tags:** User

**Parameter:**

- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer

**Responses:**

- **200**
  - A list of ApiTokens.

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.signup.ApiToken` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.signup.ApiToken` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/users/self/api-tokens`

**Zusammenfassung:** Store a new ApiToken.

**Operation ID:** `user-create-api-token`

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `description` (erforderlich): string
  - `expiresAt`: string (date-time)
  - `roles` (erforderlich): Array<string - Enum: `api_read`, `api_write`>

**Responses:**

- **201**
  - ApiToken was added.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `token` (erforderlich): string
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/users/self/api-tokens/{apiTokenId}`

**Zusammenfassung:** Get a specific ApiToken.

**Operation ID:** `user-get-api-token`

**Tags:** User

**Parameter:**

- `apiTokenId` (path) **(erforderlich)**
  - The id of an ApiToken.
  - Schema: string (uuid)

**Responses:**

- **200**
  - The ApiToken.

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.signup.ApiToken` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/users/self/api-tokens/{apiTokenId}`

**Zusammenfassung:** Update an existing `ApiToken`.

**Operation ID:** `user-edit-api-token`

**Tags:** User

**Parameter:**

- `apiTokenId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `description` (erforderlich): string
  - `expiresAt`: string (date-time)

**Responses:**

- **204**
  - ApiToken was updated.
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/users/self/api-tokens/{apiTokenId}`

**Zusammenfassung:** Deletes an ApiToken.

**Operation ID:** `user-delete-api-token`

**Tags:** User

**Parameter:**

- `apiTokenId` (path) **(erforderlich)**
  - The uuid of an ApiToken.
  - Schema: string (uuid)

**Responses:**

- **204**
  - The `ApiToken` has been deleted.
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/users/self/api-tokens/{apiTokenId}`

**Zusammenfassung:** Get a specific ApiToken.

**Operation ID:** `user-get-api-token`

**Tags:** User

**Parameter:**

- `apiTokenId` (path) **(erforderlich)**
  - The id of an ApiToken.
  - Schema: string (uuid)

**Responses:**

- **200**
  - The ApiToken.

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.signup.ApiToken` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/users/self/api-tokens/{apiTokenId}`

**Zusammenfassung:** Update an existing `ApiToken`.

**Operation ID:** `user-edit-api-token`

**Tags:** User

**Parameter:**

- `apiTokenId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `description` (erforderlich): string
  - `expiresAt`: string (date-time)

**Responses:**

- **204**
  - ApiToken was updated.
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/users/self/api-tokens/{apiTokenId}`

**Zusammenfassung:** Deletes an ApiToken.

**Operation ID:** `user-delete-api-token`

**Tags:** User

**Parameter:**

- `apiTokenId` (path) **(erforderlich)**
  - The uuid of an ApiToken.
  - Schema: string (uuid)

**Responses:**

- **204**
  - The `ApiToken` has been deleted.
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/users/self/api-tokens/{apiTokenId}`

**Zusammenfassung:** Get a specific ApiToken.

**Operation ID:** `user-get-api-token`

**Tags:** User

**Parameter:**

- `apiTokenId` (path) **(erforderlich)**
  - The id of an ApiToken.
  - Schema: string (uuid)

**Responses:**

- **200**
  - The ApiToken.

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.signup.ApiToken` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/users/self/api-tokens/{apiTokenId}`

**Zusammenfassung:** Update an existing `ApiToken`.

**Operation ID:** `user-edit-api-token`

**Tags:** User

**Parameter:**

- `apiTokenId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `description` (erforderlich): string
  - `expiresAt`: string (date-time)

**Responses:**

- **204**
  - ApiToken was updated.
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/users/self/api-tokens/{apiTokenId}`

**Zusammenfassung:** Deletes an ApiToken.

**Operation ID:** `user-delete-api-token`

**Tags:** User

**Parameter:**

- `apiTokenId` (path) **(erforderlich)**
  - The uuid of an ApiToken.
  - Schema: string (uuid)

**Responses:**

- **204**
  - The `ApiToken` has been deleted.
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/users/self/credentials/actions/init-password-reset`

**Zusammenfassung:** Initialize password reset process.

**Operation ID:** `user-init-password-reset`

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `email` (erforderlich): string (email)

**Responses:**

- **201**
  - The password reset process has been initialized and an email with confirmation code has been sent.


  - **Content-Type:** `application/json`
    - Schema: Object
- **400**
  - Some of the specified values do not meet our requirements.


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.commons.ValidationErrors` (siehe Schema-Definition)
- **429**
- **default**

---

#### `GET /v2/users/self/credentials/email`

**Zusammenfassung:** Get your verified Email-Address.

**Operation ID:** `user-get-own-email`

**Tags:** User

**Responses:**

- **200**
  - Your Email-Address.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `email` (erforderlich): string (email)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/users/self/credentials/email`

**Zusammenfassung:** Change your Email-Address.

**Operation ID:** `user-change-email`

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `email` (erforderlich): string (email)

**Responses:**

- **204**
  - Your email has been added, but needs to be verfied. Check your mails and
call /email/verify with the verification code sent with the mail.

- **400**
  - Some of the specified values does not meet our requirements.
Possible domain specific `type` values are:
  * EmailInUse
  * EmailBlacklisted
  * EmailMXInvalid


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.commons.ValidationErrors` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/users/self/credentials/email`

**Zusammenfassung:** Get your verified Email-Address.

**Operation ID:** `user-get-own-email`

**Tags:** User

**Responses:**

- **200**
  - Your Email-Address.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `email` (erforderlich): string (email)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/users/self/credentials/email`

**Zusammenfassung:** Change your Email-Address.

**Operation ID:** `user-change-email`

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `email` (erforderlich): string (email)

**Responses:**

- **204**
  - Your email has been added, but needs to be verfied. Check your mails and
call /email/verify with the verification code sent with the mail.

- **400**
  - Some of the specified values does not meet our requirements.
Possible domain specific `type` values are:
  * EmailInUse
  * EmailBlacklisted
  * EmailMXInvalid


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.commons.ValidationErrors` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/users/self/credentials/email/actions/resend-email`

**Zusammenfassung:** Resend the Email-Address verification email.

**Operation ID:** `user-resend-verification-email`

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `email` (erforderlich): string (email)
  - `userId` (erforderlich): string (uuid)

**Responses:**

- **204**
  - New Email-Address verification email was sent.
- **400**
  - Some of the specified values do not meet our requirements.


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.commons.ValidationErrors` (siehe Schema-Definition)
- **429**
- **default**

---

#### `POST /v2/users/self/credentials/email/actions/verify-email`

**Zusammenfassung:** Verify an added Email-Address.

**Operation ID:** `user-verify-email`

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `email` (erforderlich): string (email)
  - `token`: string

**Responses:**

- **204**
  - Email has been verified.
- **400**
  - Some of the specified values do not meet our requirements.
Possible domain specific `type` values are:
  * WrongVerificationToken
  * EmailNotFound
  * WrongVerificationToken
  * EmailAddressAlreadyVerified


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.commons.ValidationErrors` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/users/self/credentials/init-mfa`

**Zusammenfassung:** Initialize Multi Factor Authentication. If successful, it needs to be confirmed, before usage of mfa.

**Operation ID:** `user-init-mfa`

**Tags:** User

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** Object

**Responses:**

- **200**
  - The process of activating Multi Factor Authentication is initialized.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `barcode` (erforderlich): string
    - `url` (erforderlich): string
- **400**
  - Some of the specified values does not meet our requirements.
Possible domain specific `type` values are:
  * EmailAddressNotVerified
  * MfaAlreadyConfirmed


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.commons.ValidationErrors` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/users/self/credentials/mfa`

**Zusammenfassung:** Get your current multi factor auth status.

**Operation ID:** `user-get-mfa-status`

**Tags:** User

**Responses:**

- **200**
  - Multi factor auth status

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `confirmed` (erforderlich): boolean
    - `initialized` (erforderlich): boolean
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/users/self/credentials/mfa`

**Zusammenfassung:** Confirm Multi Factor Authentication.

**Operation ID:** `user-confirm-mfa`

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `multiFactorCode` (erforderlich): string

**Responses:**

- **200**
  - Mfa is now activated and recovery codes are in the response body.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `recoveryCodesList` (erforderlich): Array<string>
- **400**
  - Some of the specified values does not meet our requirements.
Possible domain specific `type` values are:
  * EmailAddressNotVerified
  * MfaNotInitialized
  * MfaAlreadyConfirmed


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.commons.ValidationErrors` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/users/self/credentials/mfa`

**Zusammenfassung:** Reset RecoveryCodes for MFA.

**Operation ID:** `user-reset-recoverycodes`

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `multiFactorCode` (erforderlich): string

**Responses:**

- **200**
  - Recovery-Codes are reset now. The new Recovery-Codes are in the response body.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `recoveryCodesList` (erforderlich): Array<string>
- **400**
  - Some of the specified values does not meet our requirements.
Possible domain specific `type` values are:
  * MultiFactorCodeNotValid
  * MfaNotInitialized


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.commons.ValidationErrors` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/users/self/credentials/mfa`

**Zusammenfassung:** Disable Multi Factor Authentication.

**Operation ID:** `user-disable-mfa`

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `multiFactorCode` (erforderlich): string

**Responses:**

- **204**
  - Multi Factor Authentication was disabled.
- **400**
  - Some of the specified values does not meet our requirements.
Possible domain specific `type` values are:
  * MultiFactorCodeNotValid


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.commons.ValidationErrors` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/users/self/credentials/mfa`

**Zusammenfassung:** Get your current multi factor auth status.

**Operation ID:** `user-get-mfa-status`

**Tags:** User

**Responses:**

- **200**
  - Multi factor auth status

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `confirmed` (erforderlich): boolean
    - `initialized` (erforderlich): boolean
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/users/self/credentials/mfa`

**Zusammenfassung:** Confirm Multi Factor Authentication.

**Operation ID:** `user-confirm-mfa`

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `multiFactorCode` (erforderlich): string

**Responses:**

- **200**
  - Mfa is now activated and recovery codes are in the response body.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `recoveryCodesList` (erforderlich): Array<string>
- **400**
  - Some of the specified values does not meet our requirements.
Possible domain specific `type` values are:
  * EmailAddressNotVerified
  * MfaNotInitialized
  * MfaAlreadyConfirmed


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.commons.ValidationErrors` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/users/self/credentials/mfa`

**Zusammenfassung:** Reset RecoveryCodes for MFA.

**Operation ID:** `user-reset-recoverycodes`

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `multiFactorCode` (erforderlich): string

**Responses:**

- **200**
  - Recovery-Codes are reset now. The new Recovery-Codes are in the response body.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `recoveryCodesList` (erforderlich): Array<string>
- **400**
  - Some of the specified values does not meet our requirements.
Possible domain specific `type` values are:
  * MultiFactorCodeNotValid
  * MfaNotInitialized


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.commons.ValidationErrors` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/users/self/credentials/mfa`

**Zusammenfassung:** Disable Multi Factor Authentication.

**Operation ID:** `user-disable-mfa`

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `multiFactorCode` (erforderlich): string

**Responses:**

- **204**
  - Multi Factor Authentication was disabled.
- **400**
  - Some of the specified values does not meet our requirements.
Possible domain specific `type` values are:
  * MultiFactorCodeNotValid


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.commons.ValidationErrors` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/users/self/credentials/mfa`

**Zusammenfassung:** Get your current multi factor auth status.

**Operation ID:** `user-get-mfa-status`

**Tags:** User

**Responses:**

- **200**
  - Multi factor auth status

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `confirmed` (erforderlich): boolean
    - `initialized` (erforderlich): boolean
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/users/self/credentials/mfa`

**Zusammenfassung:** Confirm Multi Factor Authentication.

**Operation ID:** `user-confirm-mfa`

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `multiFactorCode` (erforderlich): string

**Responses:**

- **200**
  - Mfa is now activated and recovery codes are in the response body.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `recoveryCodesList` (erforderlich): Array<string>
- **400**
  - Some of the specified values does not meet our requirements.
Possible domain specific `type` values are:
  * EmailAddressNotVerified
  * MfaNotInitialized
  * MfaAlreadyConfirmed


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.commons.ValidationErrors` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/users/self/credentials/mfa`

**Zusammenfassung:** Reset RecoveryCodes for MFA.

**Operation ID:** `user-reset-recoverycodes`

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `multiFactorCode` (erforderlich): string

**Responses:**

- **200**
  - Recovery-Codes are reset now. The new Recovery-Codes are in the response body.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `recoveryCodesList` (erforderlich): Array<string>
- **400**
  - Some of the specified values does not meet our requirements.
Possible domain specific `type` values are:
  * MultiFactorCodeNotValid
  * MfaNotInitialized


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.commons.ValidationErrors` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/users/self/credentials/mfa`

**Zusammenfassung:** Disable Multi Factor Authentication.

**Operation ID:** `user-disable-mfa`

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `multiFactorCode` (erforderlich): string

**Responses:**

- **204**
  - Multi Factor Authentication was disabled.
- **400**
  - Some of the specified values does not meet our requirements.
Possible domain specific `type` values are:
  * MultiFactorCodeNotValid


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.commons.ValidationErrors` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/users/self/credentials/mfa`

**Zusammenfassung:** Get your current multi factor auth status.

**Operation ID:** `user-get-mfa-status`

**Tags:** User

**Responses:**

- **200**
  - Multi factor auth status

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `confirmed` (erforderlich): boolean
    - `initialized` (erforderlich): boolean
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/users/self/credentials/mfa`

**Zusammenfassung:** Confirm Multi Factor Authentication.

**Operation ID:** `user-confirm-mfa`

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `multiFactorCode` (erforderlich): string

**Responses:**

- **200**
  - Mfa is now activated and recovery codes are in the response body.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `recoveryCodesList` (erforderlich): Array<string>
- **400**
  - Some of the specified values does not meet our requirements.
Possible domain specific `type` values are:
  * EmailAddressNotVerified
  * MfaNotInitialized
  * MfaAlreadyConfirmed


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.commons.ValidationErrors` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/users/self/credentials/mfa`

**Zusammenfassung:** Reset RecoveryCodes for MFA.

**Operation ID:** `user-reset-recoverycodes`

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `multiFactorCode` (erforderlich): string

**Responses:**

- **200**
  - Recovery-Codes are reset now. The new Recovery-Codes are in the response body.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `recoveryCodesList` (erforderlich): Array<string>
- **400**
  - Some of the specified values does not meet our requirements.
Possible domain specific `type` values are:
  * MultiFactorCodeNotValid
  * MfaNotInitialized


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.commons.ValidationErrors` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/users/self/credentials/mfa`

**Zusammenfassung:** Disable Multi Factor Authentication.

**Operation ID:** `user-disable-mfa`

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `multiFactorCode` (erforderlich): string

**Responses:**

- **204**
  - Multi Factor Authentication was disabled.
- **400**
  - Some of the specified values does not meet our requirements.
Possible domain specific `type` values are:
  * MultiFactorCodeNotValid


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.commons.ValidationErrors` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/users/self/credentials/password`

**Zusammenfassung:** Change your password.

**Operation ID:** `user-change-password`

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `multiFactorCode`: string
  - `newPassword` (erforderlich): string
  - `oldPassword` (erforderlich): string

**Responses:**

- **200**
  - Your password has been changed.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `expires` (erforderlich): string (date-time)
    - `token` (erforderlich): string
- **202**
- **400**
  - Some of the specified values does not meet our requirements.
Possible domain specific `type` values are:
  * EmailAddressNotVerified
  * WrongPassword
  * SamePassword
  * PasswordIsLeaked
  * MfaCodeNotValid
  * PasswordEqualsEmail


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.commons.ValidationErrors` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/users/self/credentials/password-updated-at`

**Zusammenfassung:** The timestamp of your latest password change.

**Operation ID:** `user-get-password-updated-at`

**Tags:** User

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** Object

**Responses:**

- **200**
  - Timestamp of latest password change.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `passwordUpdatedAt` (erforderlich): string (date-time)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/users/self/credentials/password/confirm-reset`

**Zusammenfassung:** Confirm password reset.

**Operation ID:** `user-confirm-password-reset`

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `password` (erforderlich): string
  - `token` (erforderlich): string
  - `userId` (erforderlich): string (uuid)

**Responses:**

- **204**
  - Password reset was successful.
- **400**
  - Some of the specified values do not meet our requirements.
Possible domain specific `type` values are:
  * WrongPasswordResetToken
  * EmailAddressNotVerified
  * PasswordIsLeaked
  * ValidationError
  * PasswordEqualsEmail


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.commons.ValidationErrors` (siehe Schema-Definition)
- **429**
- **default**

---

#### `GET /v2/users/self/credentials/support-code`

**Zusammenfassung:** Request a support code.

**Operation ID:** `user-support-code-request`

**Tags:** User

**Parameter:**

- `forceRecreate` (query) (optional)
  - Schema: boolean

**Responses:**

- **200**
  - The requested support code and the expiry.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `expiresAt` (erforderlich): string (date-time)
    - `supportCode` (erforderlich): string
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/users/self/credentials/token`

**Zusammenfassung:** Check token for validity.

**Operation ID:** `user-check-token`

**Tags:** User

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** Object

**Responses:**

- **200**
  - Your token is valid.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `id` (erforderlich): string (uuid)
    - `publicToken` (erforderlich): string
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/users/self/feedback`

**Zusammenfassung:** Submit your user feedback.

**Operation ID:** `user-create-feedback`

**Tags:** User

**Request Body:**

Request Body (optional)

The feedback to give.

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `message`: string
  - `origin`: string
  - `subject` (erforderlich): string
  - `type`: string - Enum: `feedback`, `bug`
  - `vote`: number

**Responses:**

- **201**
  - Feedback successfully submitted.

  - **Content-Type:** `application/json`
    - Schema: Object
- **401**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/users/self/issues`

**Zusammenfassung:** Create a new issue.

was replaced by /v2/users/self/feedback.

**Operation ID:** `deprecated-user-create-issue`

**Tags:** User

**Request Body:**

Request Body (optional)

Submit an issue.

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `message` (erforderlich): string
  - `origin`: string
  - `subject`: string
  - `type` (erforderlich): string - Enum: `feedback`, `bug`
  - `vote`: number

**Responses:**

- **201**
  - Issue successfully submitted.

  - **Content-Type:** `application/json`
    - Schema: Object
- **401**
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/users/self/personal-information`

**Zusammenfassung:** Get your account information. Replaced by `GET` `/v2/users/self`.

**Operation ID:** `deprecated-user-get-own-account`

**Tags:** User

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** Object

**Responses:**

- **200**
  - Account information.

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.signup.Account` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/users/self/personal-information`

**Zusammenfassung:** Update your account information.

**Operation ID:** `user-update-account`

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `person` (erforderlich): `de.mittwald.v1.commons.Person` (siehe Schema-Definition)

**Responses:**

- **204**
  - Account has been updated.
- **400**
  - Some of the specified values does not meet our requirements.


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.commons.ValidationErrors` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/users/self/personal-information`

**Zusammenfassung:** Get your account information. Replaced by `GET` `/v2/users/self`.

**Operation ID:** `deprecated-user-get-own-account`

**Tags:** User

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** Object

**Responses:**

- **200**
  - Account information.

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.signup.Account` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/users/self/personal-information`

**Zusammenfassung:** Update your account information.

**Operation ID:** `user-update-account`

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `person` (erforderlich): `de.mittwald.v1.commons.Person` (siehe Schema-Definition)

**Responses:**

- **204**
  - Account has been updated.
- **400**
  - Some of the specified values does not meet our requirements.


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.commons.ValidationErrors` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/users/self/sessions`

**Zusammenfassung:** List all sessions.

**Operation ID:** `user-list-sessions`

**Tags:** User

**Parameter:**

- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer

**Responses:**

- **200**
  - List of all sessions.

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.signup.UserSession` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.signup.UserSession` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/users/self/sessions`

**Zusammenfassung:** Refresh a session.

**Operation ID:** `user-refresh-session`

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `refreshToken` (erforderlich): string

**Responses:**

- **200**
  - Your token refresh was successful and you've got new a new access token. The used one in this call is no longer valid.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `expiresAt` (erforderlich): string (date-time)
    - `refreshToken` (erforderlich): string
    - `token` (erforderlich): string
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/users/self/sessions`

**Zusammenfassung:** Terminate all sessions, except the current session.

**Operation ID:** `user-terminate-all-sessions`

**Tags:** User

**Responses:**

- **204**
  - All sessions terminated.
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/users/self/sessions`

**Zusammenfassung:** List all sessions.

**Operation ID:** `user-list-sessions`

**Tags:** User

**Parameter:**

- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer

**Responses:**

- **200**
  - List of all sessions.

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.signup.UserSession` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.signup.UserSession` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/users/self/sessions`

**Zusammenfassung:** Refresh a session.

**Operation ID:** `user-refresh-session`

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `refreshToken` (erforderlich): string

**Responses:**

- **200**
  - Your token refresh was successful and you've got new a new access token. The used one in this call is no longer valid.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `expiresAt` (erforderlich): string (date-time)
    - `refreshToken` (erforderlich): string
    - `token` (erforderlich): string
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/users/self/sessions`

**Zusammenfassung:** Terminate all sessions, except the current session.

**Operation ID:** `user-terminate-all-sessions`

**Tags:** User

**Responses:**

- **204**
  - All sessions terminated.
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/users/self/sessions`

**Zusammenfassung:** List all sessions.

**Operation ID:** `user-list-sessions`

**Tags:** User

**Parameter:**

- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer

**Responses:**

- **200**
  - List of all sessions.

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.signup.UserSession` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.signup.UserSession` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/users/self/sessions`

**Zusammenfassung:** Refresh a session.

**Operation ID:** `user-refresh-session`

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `refreshToken` (erforderlich): string

**Responses:**

- **200**
  - Your token refresh was successful and you've got new a new access token. The used one in this call is no longer valid.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `expiresAt` (erforderlich): string (date-time)
    - `refreshToken` (erforderlich): string
    - `token` (erforderlich): string
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/users/self/sessions`

**Zusammenfassung:** Terminate all sessions, except the current session.

**Operation ID:** `user-terminate-all-sessions`

**Tags:** User

**Responses:**

- **204**
  - All sessions terminated.
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/users/self/sessions/{tokenId}`

**Zusammenfassung:** Get a specific session.

**Operation ID:** `user-get-session`

**Tags:** User

**Parameter:**

- `tokenId` (path) **(erforderlich)**
  - TokenId to identify a specific session.
  - Schema: string

**Responses:**

- **200**
  - The session.

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.signup.UserSession` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/users/self/sessions/{tokenId}`

**Zusammenfassung:** Terminate a specific Session.

**Operation ID:** `user-terminate-session`

**Tags:** User

**Parameter:**

- `tokenId` (path) **(erforderlich)**
  - The sessionId is the id of the token used to create the session.
  - Schema: string

**Responses:**

- **204**
  - Session terminated.
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/users/self/sessions/{tokenId}`

**Zusammenfassung:** Get a specific session.

**Operation ID:** `user-get-session`

**Tags:** User

**Parameter:**

- `tokenId` (path) **(erforderlich)**
  - TokenId to identify a specific session.
  - Schema: string

**Responses:**

- **200**
  - The session.

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.signup.UserSession` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/users/self/sessions/{tokenId}`

**Zusammenfassung:** Terminate a specific Session.

**Operation ID:** `user-terminate-session`

**Tags:** User

**Parameter:**

- `tokenId` (path) **(erforderlich)**
  - The sessionId is the id of the token used to create the session.
  - Schema: string

**Responses:**

- **204**
  - Session terminated.
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/users/self/ssh-keys`

**Zusammenfassung:** Get your stored ssh-keys.

**Operation ID:** `user-list-ssh-keys`

**Tags:** User

**Parameter:**

- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer

**Responses:**

- **200**
  - The list of stored ssh-keys.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `sshKeys`: Array<`de.mittwald.v1.signup.SshKey` (siehe Schema-Definition)>
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/users/self/ssh-keys`

**Zusammenfassung:** Store a new ssh-key.

**Operation ID:** `user-create-ssh-key`

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `expiresAt`: string (date-time)
  - `publicKey` (erforderlich): string

**Responses:**

- **201**
  - The ssh-key was stored.

  - **Content-Type:** `application/json`
    - Schema: Object
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/users/self/ssh-keys`

**Zusammenfassung:** Get your stored ssh-keys.

**Operation ID:** `user-list-ssh-keys`

**Tags:** User

**Parameter:**

- `limit` (query) (optional)
  - The max count of resources to return in the list response.
  - Schema: integer
- `skip` (query) (optional)
  - Number of items to skip. Should be multiple of `limit`.
  - Schema: integer (Standard: `0`)
- `page` (query) (optional)
  - Page to display. `skip` and `page` end up doing the same. If both `page` and `skip` are set, skip is used.
  - Schema: integer

**Responses:**

- **200**
  - The list of stored ssh-keys.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `sshKeys`: Array<`de.mittwald.v1.signup.SshKey` (siehe Schema-Definition)>
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/users/self/ssh-keys`

**Zusammenfassung:** Store a new ssh-key.

**Operation ID:** `user-create-ssh-key`

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `expiresAt`: string (date-time)
  - `publicKey` (erforderlich): string

**Responses:**

- **201**
  - The ssh-key was stored.

  - **Content-Type:** `application/json`
    - Schema: Object
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/users/self/ssh-keys/{sshKeyId}`

**Zusammenfassung:** Get a specific stored ssh-key.

**Operation ID:** `user-get-ssh-key`

**Tags:** User

**Parameter:**

- `sshKeyId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **200**
  - The requested ssh-key.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `sshKey` (erforderlich): `de.mittwald.v1.signup.SshKey` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/users/self/ssh-keys/{sshKeyId}`

**Zusammenfassung:** Edit a stored ssh-key.

**Operation ID:** `user-edit-ssh-key`

**Tags:** User

**Parameter:**

- `sshKeyId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `comment` (erforderlich): string
  - `expiresAt`: string (date-time)

**Responses:**

- **204**
  - The ssh-key has been edited.
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/users/self/ssh-keys/{sshKeyId}`

**Zusammenfassung:** Remove a ssh-key.

**Operation ID:** `user-delete-ssh-key`

**Tags:** User

**Parameter:**

- `sshKeyId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **204**
  - The ssh-key has been removed.
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/users/self/ssh-keys/{sshKeyId}`

**Zusammenfassung:** Get a specific stored ssh-key.

**Operation ID:** `user-get-ssh-key`

**Tags:** User

**Parameter:**

- `sshKeyId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **200**
  - The requested ssh-key.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `sshKey` (erforderlich): `de.mittwald.v1.signup.SshKey` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/users/self/ssh-keys/{sshKeyId}`

**Zusammenfassung:** Edit a stored ssh-key.

**Operation ID:** `user-edit-ssh-key`

**Tags:** User

**Parameter:**

- `sshKeyId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `comment` (erforderlich): string
  - `expiresAt`: string (date-time)

**Responses:**

- **204**
  - The ssh-key has been edited.
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/users/self/ssh-keys/{sshKeyId}`

**Zusammenfassung:** Remove a ssh-key.

**Operation ID:** `user-delete-ssh-key`

**Tags:** User

**Parameter:**

- `sshKeyId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **204**
  - The ssh-key has been removed.
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/users/self/ssh-keys/{sshKeyId}`

**Zusammenfassung:** Get a specific stored ssh-key.

**Operation ID:** `user-get-ssh-key`

**Tags:** User

**Parameter:**

- `sshKeyId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **200**
  - The requested ssh-key.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `sshKey` (erforderlich): `de.mittwald.v1.signup.SshKey` (siehe Schema-Definition)
- **404**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/users/self/ssh-keys/{sshKeyId}`

**Zusammenfassung:** Edit a stored ssh-key.

**Operation ID:** `user-edit-ssh-key`

**Tags:** User

**Parameter:**

- `sshKeyId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `comment` (erforderlich): string
  - `expiresAt`: string (date-time)

**Responses:**

- **204**
  - The ssh-key has been edited.
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/users/self/ssh-keys/{sshKeyId}`

**Zusammenfassung:** Remove a ssh-key.

**Operation ID:** `user-delete-ssh-key`

**Tags:** User

**Parameter:**

- `sshKeyId` (path) **(erforderlich)**
  - Schema: string (uuid)

**Responses:**

- **204**
  - The ssh-key has been removed.
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/users/{userId}`

**Zusammenfassung:** Get profile information for a user.

**Operation ID:** `user-get-user`

**Tags:** User

**Parameter:**

- `userId` (path) **(erforderlich)**
  - `self` or the id of a user.
  - Schema: string

**Responses:**

- **200**
  - The user profile.

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.user.User` (siehe Schema-Definition)
- **403**
- **404**
- **412**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/users/{userId}`

**Zusammenfassung:** Change personal information.

**Operation ID:** `user-update-personal-information`

**Tags:** User

**Parameter:**

- `userId` (path) **(erforderlich)**
  - `self` or the id of a user.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `person` (erforderlich): `de.mittwald.v1.commons.Person` (siehe Schema-Definition)

**Responses:**

- **204**
  - Your personal information has been changed
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/users/{userId}`

**Zusammenfassung:** Get profile information for a user.

**Operation ID:** `user-get-user`

**Tags:** User

**Parameter:**

- `userId` (path) **(erforderlich)**
  - `self` or the id of a user.
  - Schema: string

**Responses:**

- **200**
  - The user profile.

  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.user.User` (siehe Schema-Definition)
- **403**
- **404**
- **412**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/users/{userId}`

**Zusammenfassung:** Change personal information.

**Operation ID:** `user-update-personal-information`

**Tags:** User

**Parameter:**

- `userId` (path) **(erforderlich)**
  - `self` or the id of a user.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `person` (erforderlich): `de.mittwald.v1.commons.Person` (siehe Schema-Definition)

**Responses:**

- **204**
  - Your personal information has been changed
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/users/{userId}/actions/verify-phone`

**Zusammenfassung:** Verify phone number.

**Operation ID:** `user-verify-phone-number`

**Tags:** User

**Parameter:**

- `userId` (path) **(erforderlich)**
  - `self` or the id of a user.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `code` (erforderlich): string
  - `phoneNumber` (erforderlich): string

**Responses:**

- **204**
  - The phone number has been verified.
- **400**
- **404**
- **409**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/users/{userId}/avatar`

**Zusammenfassung:** Request a new avatar image upload.

**Operation ID:** `user-request-avatar-upload`

**Tags:** User

**Parameter:**

- `userId` (path) **(erforderlich)**
  - `self` or the id of a user.
  - Schema: string

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** Object

**Responses:**

- **200**
  - Avatar upload request was successful.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `refId` (erforderlich): string (uuid)
    - `rules` (erforderlich): Object
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/users/{userId}/avatar`

**Zusammenfassung:** Remove Avatar.

**Operation ID:** `user-remove-avatar`

**Tags:** User

**Parameter:**

- `userId` (path) **(erforderlich)**
  - `self` or the id of a user.
  - Schema: string

**Responses:**

- **204**
  - Avatar removal was successful.
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/users/{userId}/avatar`

**Zusammenfassung:** Request a new avatar image upload.

**Operation ID:** `user-request-avatar-upload`

**Tags:** User

**Parameter:**

- `userId` (path) **(erforderlich)**
  - `self` or the id of a user.
  - Schema: string

**Request Body:**

Request Body (optional)

**Content-Type:** `application/json`
**Schema:** Object

**Responses:**

- **200**
  - Avatar upload request was successful.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `refId` (erforderlich): string (uuid)
    - `rules` (erforderlich): Object
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/users/{userId}/avatar`

**Zusammenfassung:** Remove Avatar.

**Operation ID:** `user-remove-avatar`

**Tags:** User

**Parameter:**

- `userId` (path) **(erforderlich)**
  - `self` or the id of a user.
  - Schema: string

**Responses:**

- **204**
  - Avatar removal was successful.
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/users/{userId}/feedback`

**Zusammenfassung:** Submitted feedback of the given user.

**Operation ID:** `user-list-feedback`

**Tags:** User

**Parameter:**

- `userId` (path) **(erforderlich)**
  - `self` or the id of a user.
  - Schema: string
- `subject` (query) (optional)
  - Filter for subject content.
  - Schema: string

**Responses:**

- **200**
  - Feedback submitted by the user.

  - **Content-Type:** `application/json`
    - Schema: Array<`de.mittwald.v1.user.UserFeedback` (siehe Schema-Definition)>
    **Array Items:** `de.mittwald.v1.user.UserFeedback` (siehe Schema-Definition)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/users/{userId}/phone`

**Zusammenfassung:** Add phone number and start verification process.

**Operation ID:** `user-add-phone-number`

**Tags:** User

**Parameter:**

- `userId` (path) **(erforderlich)**
  - `self` or the id of a user.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `phoneNumber` (erforderlich): string

**Responses:**

- **204**
  - Phone number was added successfully. Now, it can be verified via /v2/users/:userId/actions/verify-phone.
- **400**
- **409**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/users/{userId}/phone`

**Zusammenfassung:** Remove phone number.

**Operation ID:** `user-remove-phone-number`

**Tags:** User

**Parameter:**

- `userId` (path) **(erforderlich)**
  - `self` or the id of a user.
  - Schema: string

**Responses:**

- **204**
  - PhoneNumber removal was successful
- **400**
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/users/{userId}/phone`

**Zusammenfassung:** Add phone number and start verification process.

**Operation ID:** `user-add-phone-number`

**Tags:** User

**Parameter:**

- `userId` (path) **(erforderlich)**
  - `self` or the id of a user.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `phoneNumber` (erforderlich): string

**Responses:**

- **204**
  - Phone number was added successfully. Now, it can be verified via /v2/users/:userId/actions/verify-phone.
- **400**
- **409**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `DELETE /v2/users/{userId}/phone`

**Zusammenfassung:** Remove phone number.

**Operation ID:** `user-remove-phone-number`

**Tags:** User

**Parameter:**

- `userId` (path) **(erforderlich)**
  - `self` or the id of a user.
  - Schema: string

**Responses:**

- **204**
  - PhoneNumber removal was successful
- **400**
- **412**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/users/{userId}/phone/verify`

**Zusammenfassung:** Verify phone number.

This route is deprecated. Please use /v2/users/{userId}/actions/verify-phone instead.

**Tags:** User

**Parameter:**

- `userId` (path) **(erforderlich)**
  - `self` or the id of a user.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `code` (erforderlich): string
  - `phoneNumber` (erforderlich): string

**Responses:**

- **308**
  - This route is deprecated, and will redirect you to another URL.

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/users/{userId}/settings`

**Zusammenfassung:** Get personalized settings.

**Operation ID:** `user-get-personalized-settings`

**Tags:** User

**Parameter:**

- `userId` (path) **(erforderlich)**
  - `self` or the id of a user.
  - Schema: string

**Responses:**

- **200**
  - Personal settings of the user.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `settingsString`: string (base64)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/users/{userId}/settings`

**Zusammenfassung:** Update personalized GUI settings.

**Operation ID:** `user-update-personalized-settings`

**Tags:** User

**Parameter:**

- `userId` (path) **(erforderlich)**
  - `self` or the id of a user.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `settingsString` (erforderlich): string (base64)

**Responses:**

- **204**
  - PersonalSettings have been updated
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `GET /v2/users/{userId}/settings`

**Zusammenfassung:** Get personalized settings.

**Operation ID:** `user-get-personalized-settings`

**Tags:** User

**Parameter:**

- `userId` (path) **(erforderlich)**
  - `self` or the id of a user.
  - Schema: string

**Responses:**

- **200**
  - Personal settings of the user.

  - **Content-Type:** `application/json`
    - Schema: Object
    **Properties:**
    - `settingsString`: string (base64)
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `PUT /v2/users/{userId}/settings`

**Zusammenfassung:** Update personalized GUI settings.

**Operation ID:** `user-update-personalized-settings`

**Tags:** User

**Parameter:**

- `userId` (path) **(erforderlich)**
  - `self` or the id of a user.
  - Schema: string

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `settingsString` (erforderlich): string (base64)

**Responses:**

- **204**
  - PersonalSettings have been updated
- **400**
- **429**
- **default**

**Security:**

- `de.mittwald.v1.commons.AccessToken` (Scopes: keine)

---

#### `POST /v2/verify-registration`

**Zusammenfassung:** Verify your registration.

**Operation ID:** `user-verify-registration`

**Tags:** User

**Request Body:**

Request Body **(erforderlich)**

**Content-Type:** `application/json`
**Schema:** Object
  **Properties:**
  - `email` (erforderlich): string (email)
  - `token` (erforderlich): string
  - `userId` (erforderlich): string (uuid)

**Responses:**

- **200**
  - User is verified and you can now login to your user account.


  - **Content-Type:** `application/json`
    - Schema: Object
- **400**
  - Some of the specified values do not meet our requirements.
Possible domain specific `type` values are:
  * UserRegistrationAlreadyVerified
  * WrongVerificationToken


  - **Content-Type:** `application/json`
    - Schema: `de.mittwald.v1.commons.ValidationErrors` (siehe Schema-Definition)
- **404**
- **429**
- **default**

---


---

## Schema-Definitionen

### de.mittwald.v1.aihosting.ContainerMeta

**Properties:**

- `containerId`: string
- `errorMessage`: string
- `ingressId`: string
- `stackId`: string
- `status` **(erforderlich)**: string - Enum: `created`, `requested`, `failed`

---

### de.mittwald.v1.aihosting.Licence

**Properties:**

- `containerMeta`: `de.mittwald.v1.aihosting.ContainerMeta` (siehe Schema-Definition)
- `customerId`: string
- `isBlocked` **(erforderlich)**: boolean (Standard: `False`)
  - Indicates whether the licence is blocked.
- `licenceId` **(erforderlich)**: string
  - Auto generated uuid to identify licences in requests.
- `licenceKey` **(erforderlich)**: string
  - The secret API key which is required for authentication with the LLM hosting.
- `limit` **(erforderlich)**: Object
  - The number of allowed requests per unit. Limits are shared across all licences within the same project.
- `models` **(erforderlich)**: Array<string>
  - An array of LLM model identifiers enabled for this licence.
- `name` **(erforderlich)**: string
- `projectId`: string
- `rateLimit` **(erforderlich)**: number
  - Deprecated, please us limit.allowedRequestsPerUnit

---

### de.mittwald.v1.aihosting.Model

**Properties:**

- `displayName` **(erforderlich)**: string
- `docLink` **(erforderlich)**: string
- `name` **(erforderlich)**: string
- `termsOfServiceLink` **(erforderlich)**: string

---

### de.mittwald.v1.app.Action

An Action is a string that describes a runtime concerning action which can be executed on an AppInstallation or an  App  can be capable of.

**Mögliche Werte:**

- `start`
- `stop`
- `restart`

---

### de.mittwald.v1.app.ActionCapabilities

---

### de.mittwald.v1.app.AdditionalValidationSchema

AdditionalValidationSchema is a stringified custom validation schema, e.g password rules.

**Properties:**

- `kind`: `de.mittwald.v1.app.AdditionalValidationSchemaKind` (siehe Schema-Definition)
- `schema`: string

---

### de.mittwald.v1.app.AdditionalValidationSchemaKind

AdditionalValidationSchemaKind is an enum, describing the possible types of an additional validation schema.

**Mögliche Werte:**

- `password-rule`

---

### de.mittwald.v1.app.App

An App is to be understood as a manifest for AppInstallations. E.g. 'WordPress' only exists inside our ecosystem, because there is an  App -Manifest for it.

**Properties:**

- `actionCapabilities`: `de.mittwald.v1.app.ActionCapabilities` (siehe Schema-Definition)
- `id` **(erforderlich)**: string
- `name` **(erforderlich)**: string
- `tags` **(erforderlich)**: Array<string>

---

### de.mittwald.v1.app.AppInstallation

An AppInstallation is a concrete manifestation of an App in a specific AppVersion.

**Properties:**

- `appId` **(erforderlich)**: string (uuid)
- `appVersion` **(erforderlich)**: `de.mittwald.v1.app.VersionStatus` (siehe Schema-Definition)
- `createdAt` **(erforderlich)**: string (date-time)
- `customDocumentRoot`: string
- `deletionRequested`: boolean (Standard: `False`)
- `description` **(erforderlich)**: string
- `disabled` **(erforderlich)**: boolean (Standard: `False`)
- `id` **(erforderlich)**: string (uuid)
- `installationPath` **(erforderlich)**: string
- `linkedDatabases` **(erforderlich)**: Array<`de.mittwald.v1.app.LinkedDatabase` (siehe Schema-Definition)>
- `lockedBy`: Object
- `phase` **(erforderlich)**: `de.mittwald.v1.app.Phase` (siehe Schema-Definition)
- `projectId` **(erforderlich)**: string (uuid)
- `screenshotId`: string (uuid)
- `screenshotRef`: string
- `shortId` **(erforderlich)**: string
- `systemSoftware` **(erforderlich)**: Array<`de.mittwald.v1.app.InstalledSystemSoftware` (siehe Schema-Definition)>
- `updatePolicy` **(erforderlich)**: `de.mittwald.v1.app.AppUpdatePolicy` (siehe Schema-Definition)
- `userInputs` **(erforderlich)**: Array<`de.mittwald.v1.app.SavedUserInput` (siehe Schema-Definition)>

---

### de.mittwald.v1.app.AppInstallationLifecycle

The AppInstallationLifecycle can be used to express a specific point in the AppInstallation Lifecycle, e.g. while installing a new AppInstallation.

**Mögliche Werte:**

- `installation`
- `update`
- `reconfigure`

---

### de.mittwald.v1.app.AppInstallationStatus

AppInstallationStatus describes the overall runtime status of an AppInstallation.

**Properties:**

- `lastExitCode`: integer
- `logFileLocation` **(erforderlich)**: string
- `state` **(erforderlich)**: string - Enum: `running`, `stopped`, `exited`
- `uptimeSeconds`: number (double)

---

### de.mittwald.v1.app.AppJobImage

**Properties:**

- `imageTemplate` **(erforderlich)**: string

---

### de.mittwald.v1.app.AppJobImages

**Properties:**

- `reconfigureImage` **(erforderlich)**: `de.mittwald.v1.app.AppJobImage` (siehe Schema-Definition)
- `setupImage` **(erforderlich)**: `de.mittwald.v1.app.AppJobImage` (siehe Schema-Definition)
- `uninstallImage` **(erforderlich)**: `de.mittwald.v1.app.AppJobImage` (siehe Schema-Definition)
- `upgradeImage` **(erforderlich)**: `de.mittwald.v1.app.AppJobImage` (siehe Schema-Definition)

---

### de.mittwald.v1.app.AppUpdatePolicy

AppUpdatePolicy describes which updates should be applied automatically by our systems.

**Mögliche Werte:**

- `none`
- `patchLevel`
- `all`

---

### de.mittwald.v1.app.AppVersion

An AppVersion is an officially supported version of an App, containing the necessary and recommended configuration und dependencies.

**Properties:**

- `appId` **(erforderlich)**: string (uuid)
- `backendPathTemplate`: string
- `breakingNote`: `de.mittwald.v1.app.BreakingNote` (siehe Schema-Definition)
- `databases`: Array<`de.mittwald.v1.app.DatabaseDependency` (siehe Schema-Definition)>
- `defaultCronjobs`: Array<`de.mittwald.v1.app.DefaultCronjob` (siehe Schema-Definition)>
- `docRoot` **(erforderlich)**: string
- `docRootUserEditable` **(erforderlich)**: boolean
- `externalVersion` **(erforderlich)**: string
- `id` **(erforderlich)**: string (uuid)
- `internalVersion` **(erforderlich)**: string
- `recommended`: boolean
- `requestHandler`: `de.mittwald.v1.app.RequestHandlerRequirement` (siehe Schema-Definition)
- `systemSoftwareDependencies`: Array<`de.mittwald.v1.app.SystemSoftwareDependency` (siehe Schema-Definition)>
- `userInputs`: Array<`de.mittwald.v1.app.UserInput` (siehe Schema-Definition)>

---

### de.mittwald.v1.app.BreakingNote

A BreakingNote is a hint that something serious has changed in the AppVersion containing it, so an automatic update is not possible.

**Properties:**

- `faqLink` **(erforderlich)**: string (uri)

---

### de.mittwald.v1.app.CronjobCommand

**Properties:**

- `interpreterTemplate` **(erforderlich)**: string
- `parametersTemplate`: string
- `pathTemplate` **(erforderlich)**: string

---

### de.mittwald.v1.app.DatabaseDependency

A DatabaseDependency is a generic description of need for a database, used by AppVersions.

**Properties:**

- `description` **(erforderlich)**: string
- `kind` **(erforderlich)**: string - Enum: `mysql`
- `parameters`: Object
- `version` **(erforderlich)**: string (uuid)

---

### de.mittwald.v1.app.DefaultCronjob

**Properties:**

- `active` **(erforderlich)**: boolean
- `command`: `de.mittwald.v1.app.CronjobCommand` (siehe Schema-Definition)
- `description` **(erforderlich)**: string
- `interval` **(erforderlich)**: string
- `timeout` **(erforderlich)**: integer (int32)
- `urlTemplate`: string

---

### de.mittwald.v1.app.Error

**Properties:**

- `message` **(erforderlich)**: string
- `type` **(erforderlich)**: string

---

### de.mittwald.v1.app.InstalledSystemSoftware

InstalledSystemSoftware describes the currently configured and installed SystemSoftwareVersion of a SystemSoftware besides the desired SystemSoftwareUpdatePolicy inside an AppInstallation.

**Properties:**

- `systemSoftwareId` **(erforderlich)**: string (uuid)
- `systemSoftwareVersion` **(erforderlich)**: `de.mittwald.v1.app.VersionStatus` (siehe Schema-Definition)
- `updatePolicy` **(erforderlich)**: `de.mittwald.v1.app.SystemSoftwareUpdatePolicy` (siehe Schema-Definition)

---

### de.mittwald.v1.app.LinkedDatabase

LinkedDatabase is a reference to a concrete Database and DatabaseUsers.

**Properties:**

- `databaseId` **(erforderlich)**: string (uuid)
- `databaseUserIds`: Object
- `kind` **(erforderlich)**: string - Enum: `mysql`, `redis`
- `purpose` **(erforderlich)**: string - Enum: `primary`, `cache`, `custom`

---

### de.mittwald.v1.app.LockPurpose

LockPurpose describes why a given AppInstallation is locked from deletion.

**Mögliche Werte:**

- `unspecified`
- `copy`

---

### de.mittwald.v1.app.Phase

Phase describes the current phase/state of an AppInstallation in its lifecycle.

**Mögliche Werte:**

- `pending`
- `installing`
- `upgrading`
- `ready`
- `disabled`
- `reconfiguring`

---

### de.mittwald.v1.app.RequestHandlerRequirement

RequestHandlerRequirement describes the necessary properties to internally resolve the request handler or process to start.

**Properties:**

- `exampleValues`: Array<`de.mittwald.v1.app.SavedUserInput` (siehe Schema-Definition)>
- `name` **(erforderlich)**: string
- `namespace` **(erforderlich)**: string
- `parametersTemplate` **(erforderlich)**: string

---

### de.mittwald.v1.app.SavedUserInput

A SavedUserInput is an entered value for a desired UserInput of an AppVersion or SystemSoftwareVersion.

**Properties:**

- `name` **(erforderlich)**: string
- `value` **(erforderlich)**: string

---

### de.mittwald.v1.app.SystemSoftware

A SystemSoftware is a software that can be installed for an AppInstallation but mostly is not itself externally reachable and/or deliverable.

**Properties:**

- `id` **(erforderlich)**: string
- `meta`: Object
- `name` **(erforderlich)**: string
- `tags` **(erforderlich)**: Array<string>

---

### de.mittwald.v1.app.SystemSoftwareDependency

A SystemSoftwareDependency is a description of a need for a specific SystemSoftware in a semver versionRange.

**Properties:**

- `systemSoftwareId` **(erforderlich)**: string (uuid)
- `versionRange` **(erforderlich)**: string

---

### de.mittwald.v1.app.SystemSoftwareUpdatePolicy

SystemSoftwareUpdatePolicy describes which updates should be applied automatically by our systems.

**Mögliche Werte:**

- `none`
- `inheritedFromApp`
- `patchLevel`
- `all`

---

### de.mittwald.v1.app.SystemSoftwareVersion

A SystemSoftwareVersion is an officially  supported version of a SystemSoftware, containing the necessary and recommended configuration und dependencies.

**Properties:**

- `expiryDate`: string (date-time)
- `externalVersion` **(erforderlich)**: string
- `fee`: `de.mittwald.v1.fee.FeeStrategy` (siehe Schema-Definition)
- `id` **(erforderlich)**: string (uuid)
- `internalVersion` **(erforderlich)**: string
- `recommended`: boolean
- `systemSoftwareDependencies`: Array<`de.mittwald.v1.app.SystemSoftwareDependency` (siehe Schema-Definition)>
- `userInputs`: Array<`de.mittwald.v1.app.UserInput` (siehe Schema-Definition)>

---

### de.mittwald.v1.app.UserInput

A UserInput is a description of an information which cannot be determined or estimated by mittwald, but has to be given by the person who is requesting an AppInstallation or SystemSoftware.

**Properties:**

- `additionalValidationSchema`: `de.mittwald.v1.app.AdditionalValidationSchema` (siehe Schema-Definition)
- `dataSource`: string
  - Optional field to tell the frontend, which data to put into the select.
- `dataType` **(erforderlich)**: `de.mittwald.v1.app.UserInputDataType` (siehe Schema-Definition)
- `defaultValue`: string
- `format`: `de.mittwald.v1.app.UserInputFormat` (siehe Schema-Definition)
- `lifecycleConstraint` **(erforderlich)**: `de.mittwald.v1.app.AppInstallationLifecycle` (siehe Schema-Definition)
- `name` **(erforderlich)**: string
- `positionMeta`: `de.mittwald.v1.app.UserInputPositionMeta` (siehe Schema-Definition)
- `required` **(erforderlich)**: boolean
- `validationSchema` **(erforderlich)**: string
  - JSON Schema formatted (https://json-schema.org/).

---

### de.mittwald.v1.app.UserInputDataType

UserInputDataType is an enum, describing the possible data types of a UserInput.

**Mögliche Werte:**

- `text`
- `number`
- `boolean`
- `select`

---

### de.mittwald.v1.app.UserInputFormat

UserInputFormat is an enum, describing the possible data formats of a UserInput, the given values can be validated against.

**Mögliche Werte:**

- `email`
- `password`
- `url`
- `uri`

---

### de.mittwald.v1.app.UserInputPositionMeta

UserInputPositionMeta is a utility information, helping to position the UserInput properly on the frontend.

**Properties:**

- `index`: integer
- `section`: string
- `step`: string

---

### de.mittwald.v1.app.VersionStatus

VersionStatus describes the current and desired version of something like the AppVersion of an AppInstallation. If diverging, an internal process is going to assert, the current value will be aligned.

**Properties:**

- `current`: string
- `desired` **(erforderlich)**: string

---

### de.mittwald.v1.article.ArticleAddons

**Properties:**

- `hidden`: boolean
- `key` **(erforderlich)**: string
- `type`: string
- `value` **(erforderlich)**: string
- `valueMergeType`: string - Enum: `add`, `set`

---

### de.mittwald.v1.article.ArticleAttributes

**Properties:**

- `customerEditable`: boolean
- `key` **(erforderlich)**: string
- `mergeType`: string - Enum: `add`, `set`
- `readonly`: boolean
- `required`: boolean
- `unit`: string
- `value`: string

---

### de.mittwald.v1.article.ArticleTag

**Properties:**

- `description`: string
- `hexColor`: string
- `id` **(erforderlich)**: string
- `name`: string

---

### de.mittwald.v1.article.ArticleTemplate

**Properties:**

- `additionalArticles`: Array<`de.mittwald.v1.article.ReadableBookableArticleOptions` (siehe Schema-Definition)>
- `addons`: Array<`de.mittwald.v1.article.ArticleAddons` (siehe Schema-Definition)>
- `attributes`: Array<`de.mittwald.v1.article.ArticleAttributes` (siehe Schema-Definition)>
- `description`: string
- `id` **(erforderlich)**: string
- `isManagedByDomain` **(erforderlich)**: boolean
- `isRecurring` **(erforderlich)**: boolean
- `modifierArticles`: Array<`de.mittwald.v1.article.ReadableModifierArticleOptions` (siehe Schema-Definition)>
- `name` **(erforderlich)**: string
- `type` **(erforderlich)**: string - Enum: `miscellaneous`, `base`, `additional`, `modifier`, `setup_fee`

---

### de.mittwald.v1.article.ReadableArticle

**Properties:**

- `addons`: Array<`de.mittwald.v1.article.ArticleAddons` (siehe Schema-Definition)>
- `articleId` **(erforderlich)**: string
- `attributes`: Array<`de.mittwald.v1.article.ArticleAttributes` (siehe Schema-Definition)>
- `balanceAddonKey`: string
- `contractDurationInMonth` **(erforderlich)**: number
- `description`: string
- `forcedInvoicingPeriodInMonth`: number
- `hasIndependentContractPeriod`: boolean
- `hideOnInvoice`: boolean
- `machineType`: Object
- `modifierArticles`: Array<`de.mittwald.v1.article.ReadableModifierArticleOptions` (siehe Schema-Definition)>
- `name` **(erforderlich)**: string
- `orderable` **(erforderlich)**: string - Enum: `forbidden`, `internal`, `beta_testing`, `full`, `deprecated`
- `possibleArticleChanges`: Array<`de.mittwald.v1.article.ReadableChangeArticleOptions` (siehe Schema-Definition)>
- `price`: number
- `tags`: Array<`de.mittwald.v1.article.ArticleTag` (siehe Schema-Definition)>
- `template` **(erforderlich)**: `de.mittwald.v1.article.ArticleTemplate` (siehe Schema-Definition)

---

### de.mittwald.v1.article.ReadableBookableArticleOptions

**Properties:**

- `articleId` **(erforderlich)**: string
- `info`: Object
- `maxArticleCount`: number

---

### de.mittwald.v1.article.ReadableChangeArticleOptions

**Properties:**

- `articleId` **(erforderlich)**: string
- `info`: Object

---

### de.mittwald.v1.article.ReadableModifierArticleOptions

**Properties:**

- `articleId` **(erforderlich)**: string
- `info`: Object
- `maxArticleCount` **(erforderlich)**: number

---

### de.mittwald.v1.backup.BackupSortOrder

**Mögliche Werte:**

- `oldestFirst`
- `newestFirst`

---

### de.mittwald.v1.backup.BackupTemplate

**Properties:**

- `expirationTime` **(erforderlich)**: string (date-time)
- `ignoredSources`: `de.mittwald.v1.backup.IgnoredSources` (siehe Schema-Definition)

---

### de.mittwald.v1.backup.DatabaseReference

**Properties:**

- `kind` **(erforderlich)**: string
- `name` **(erforderlich)**: string

---

### de.mittwald.v1.backup.IgnoredSources

**Properties:**

- `databases`: Array<`de.mittwald.v1.backup.DatabaseReference` (siehe Schema-Definition)>
- `files` **(erforderlich)**: boolean

---

### de.mittwald.v1.backup.ProjectBackup

**Properties:**

- `createdAt`: string (date-time)
- `deletable` **(erforderlich)**: boolean
- `description`: string
- `expiresAt`: string (date-time)
- `export`: `de.mittwald.v1.backup.ProjectBackupExport` (siehe Schema-Definition)
- `id` **(erforderlich)**: string (uuid)
- `parentId`: string (uuid)
- `projectId` **(erforderlich)**: string (uuid)
- `requestedAt` **(erforderlich)**: string (date-time)
- `restorePath`: `de.mittwald.v1.backup.ProjectBackupRestorePath` (siehe Schema-Definition)
- `status` **(erforderlich)**: string

---

### de.mittwald.v1.backup.ProjectBackupExport

**Properties:**

- `downloadURL`: string (url)
- `expiresAt`: string (date-time)
- `format` **(erforderlich)**: string
- `phase`: string - Enum: `Pending`, `Exporting`, `Failed`, `Completed`, `Expired`
- `sha256Checksum`: string
- `withPassword` **(erforderlich)**: boolean

---

### de.mittwald.v1.backup.ProjectBackupPath

**Properties:**

- `absolutePath` **(erforderlich)**: string
- `isDirectory`: boolean
- `isExecutable`: boolean
- `isFile`: boolean
- `isSymlink`: boolean
- `items`: Array<`de.mittwald.v1.backup.ProjectBackupPath` (siehe Schema-Definition)>
- `name` **(erforderlich)**: string
- `size` **(erforderlich)**: integer (int64)
- `target`: string

---

### de.mittwald.v1.backup.ProjectBackupRestorePath

**Properties:**

- `clearTargetPath` **(erforderlich)**: boolean (Standard: `False`)
- `determinedTargetPath` **(erforderlich)**: string
- `phase` **(erforderlich)**: `de.mittwald.v1.backup.RestorePathPhase` (siehe Schema-Definition)
- `sourcePath` **(erforderlich)**: string
- `targetPath`: string

---

### de.mittwald.v1.backup.ProjectBackupRestorePathRequest

**Properties:**

- `clearTargetPath`: boolean (Standard: `False`)
  - Whether to clear the target path before restoring. If true, existing files in the target path will be deleted before the restore. If false, existing files will be kept and may be overwritten if they exist in the backup.
- `sourcePath` **(erforderlich)**: string
- `targetPath`: string
  - Target path where the source path should be restored to. If not set, the target path will be determined to equal the origin source. The target path should always be a folder, no files allowed here.

---

### de.mittwald.v1.backup.ProjectBackupSchedule

**Properties:**

- `createdAt`: string (date-time)
- `description`: string
  - Description of this ProjectBackupSchedule.
- `id` **(erforderlich)**: string (uuid)
  - ID of this ProjectBackupSchedule.
- `isSystemBackup` **(erforderlich)**: boolean
  - True if this ProjectBackupSchedule was created and is managed by mittwald.
- `projectId` **(erforderlich)**: string (uuid)
  - ID of the Project this ProjectBackupSchedule belongs to.
- `schedule` **(erforderlich)**: string
  - Execution schedule in crontab notation.
- `ttl`: string
  - TTL of the ProjectBackupSchedule as time string.
- `updatedAt`: string (date-time)

---

### de.mittwald.v1.backup.RestorePathPhase

**Mögliche Werte:**

- `running`
- `completed`

---

### de.mittwald.v1.commons.Address

**Properties:**

- `street` **(erforderlich)**: string
- `houseNumber` **(erforderlich)**: string
- `city` **(erforderlich)**: string
- `zip` **(erforderlich)**: string
- `countryCode` **(erforderlich)**: string
  - ISO 3166-1 alpha-2 country code
- `addressPrefix`: string

---

### de.mittwald.v1.commons.Contact

**Properties:**

- `firstName`: string
- `lastName`: string
- `title`: string
- `salutation` **(erforderlich)**: `de.mittwald.v1.commons.Salutation` (siehe Schema-Definition)
- `company`: string
- `address` **(erforderlich)**: `de.mittwald.v1.commons.Address` (siehe Schema-Definition)
- `emailAddress`: string (email)
- `phoneNumbers`: Array<string>
- `useFormalTerm`: boolean

---

### de.mittwald.v1.commons.Error

**Properties:**

- `message` **(erforderlich)**: string
- `type` **(erforderlich)**: string

---

### de.mittwald.v1.commons.Person

The users personal information, e.g. first name.

**Properties:**

- `firstName` **(erforderlich)**: string
  - The users first name
- `lastName` **(erforderlich)**: string
  - The users last name
- `title`: `de.mittwald.v1.commons.Salutation` (siehe Schema-Definition)

---

### de.mittwald.v1.commons.Salutation

**Mögliche Werte:**

- `mr`
- `ms`
- `other`

---

### de.mittwald.v1.commons.ValidationErrorSchema

**Properties:**

- `message` **(erforderlich)**: string
  - The standard error message
- `path` **(erforderlich)**: string
  - The path to the part of the data that was validated. JavaScript property access notation (e.g., ".prop[1].subProp") is used.

- `type` **(erforderlich)**: string
  - ajv validation error type (e.g. "format", "required", "type") or own validation error types
- `context`: Object
  - The object with the additional information about the error that can be used to create custom error messages. Keys depend on the
type that failed validation (e.g. "missingProperty" for type "required")


---

### de.mittwald.v1.commons.ValidationErrors

**Properties:**

- `type` **(erforderlich)**: string - Enum: `ValidationError`
- `message`: string
- `validationErrors` **(erforderlich)**: Array<`de.mittwald.v1.commons.ValidationErrorSchema` (siehe Schema-Definition)>

---

### de.mittwald.v1.container.ContainerImageConfig

**Properties:**

- `command`: Array<string>
  - Command of the container image.
- `digest` **(erforderlich)**: string
  - The image digest.
- `entrypoint`: Array<string>
  - Entrypoint of the container image.
- `env`: Array<`de.mittwald.v1.container.ContainerImageConfigEnv` (siehe Schema-Definition)>
  - List of environment variables the container image has.
- `exposedPorts`: Array<`de.mittwald.v1.container.ContainerImageConfigExposedPort` (siehe Schema-Definition)>
  - List of exposed ports the container image has.
- `hasAiGeneratedData` **(erforderlich)**: boolean
  - Whether the image config has ai generated data.
- `isAiAvailable` **(erforderlich)**: boolean
  - Whether ai generation is available for the image reference.
- `isUserRoot` **(erforderlich)**: boolean
  - Whether the container user is root.
- `overwritingUser`: integer
  - Deprecated, user will never be overwritten.
- `user` **(erforderlich)**: string
  - The user the container image is running with.
- `userId` **(erforderlich)**: integer
  - The user id the container image is running with.
- `volumes`: Array<`de.mittwald.v1.container.ContainerImageConfigVolume` (siehe Schema-Definition)>
  - List of volumes the container image has.

---

### de.mittwald.v1.container.ContainerImageConfigEnv

**Properties:**

- `description`: string
  - The description of the env key.
- `isAiGenerated` **(erforderlich)**: boolean
  - Whether the env has been ai generated.
- `isSensitive`: boolean
  - Whether the env key is a sensitive field, e.g. password fields.
- `key` **(erforderlich)**: string
  - The env key.
- `value`: string
  - The env default value.

---

### de.mittwald.v1.container.ContainerImageConfigExposedPort

**Properties:**

- `description`: string
  - The description of the exposed port.
- `isAiGenerated` **(erforderlich)**: boolean
  - Whether the port has been ai generated.
- `port` **(erforderlich)**: string
  - The exposed port.

---

### de.mittwald.v1.container.ContainerImageConfigVolume

**Properties:**

- `description`: string
  - The description of the volume path.
- `isAiGenerated` **(erforderlich)**: boolean
  - Whether the volume has been ai generated.
- `volume` **(erforderlich)**: string
  - The volume path.

---

### de.mittwald.v1.container.CreateRegistry

**Properties:**

- `credentials`: `de.mittwald.v1.container.SetRegistryCredentials` (siehe Schema-Definition)
- `description` **(erforderlich)**: string
- `uri` **(erforderlich)**: string

---

### de.mittwald.v1.container.Deploy

**Properties:**

- `resources`: `de.mittwald.v1.container.Resources` (siehe Schema-Definition)

---

### de.mittwald.v1.container.Registry

**Properties:**

- `credentials`: `de.mittwald.v1.container.RegistryCredentials` (siehe Schema-Definition)
- `description` **(erforderlich)**: string
- `id` **(erforderlich)**: string (uuid)
- `projectId` **(erforderlich)**: string (uuid)
- `uri` **(erforderlich)**: string

---

### de.mittwald.v1.container.RegistryCredentials

**Properties:**

- `username` **(erforderlich)**: string
  - Your registry username.
- `valid` **(erforderlich)**: boolean
  - Status of the credentials.

---

### de.mittwald.v1.container.ResourceSpec

---

### de.mittwald.v1.container.Resources

**Properties:**

- `limits`: `de.mittwald.v1.container.ResourceSpec` (siehe Schema-Definition)

---

### de.mittwald.v1.container.ServiceDeclareRequest

**Properties:**

- `command`: Array<string>
  - Defaults to image config on empty
- `deploy`: `de.mittwald.v1.container.Deploy` (siehe Schema-Definition)
- `description`: string
- `entrypoint`: Array<string>
  - Defaults to image config on empty
- `environment`: Object
- `envs`: Object
  - DEPRECATED: Use 'environment' instead. This field will be removed in a future version.
- `image` **(erforderlich)**: string
- `ports`: Array<string>
- `volumes`: Array<string>

---

### de.mittwald.v1.container.ServiceRequest

**Properties:**

- `command`: Array<string>
  - Defaults to image config on empty
- `deploy`: `de.mittwald.v1.container.Deploy` (siehe Schema-Definition)
- `description`: string
- `entrypoint`: Array<string>
  - Defaults to image config on empty
- `environment`: Object
- `envs`: Object
  - Deprecated by 'environment'. This field will be removed in a future version.
- `image`: string
- `ports`: Array<string>
- `volumes`: Array<string>

---

### de.mittwald.v1.container.ServiceResponse

**Properties:**

- `deploy`: `de.mittwald.v1.container.Deploy` (siehe Schema-Definition)
- `deployedState` **(erforderlich)**: `de.mittwald.v1.container.ServiceState` (siehe Schema-Definition)
- `description` **(erforderlich)**: string
- `id` **(erforderlich)**: string (uuid)
- `message`: string
- `pendingState` **(erforderlich)**: `de.mittwald.v1.container.ServiceState` (siehe Schema-Definition)
- `projectId` **(erforderlich)**: string (uuid)
- `requiresRecreate` **(erforderlich)**: boolean
- `serviceName` **(erforderlich)**: string
- `shortId` **(erforderlich)**: string
- `stackId` **(erforderlich)**: string (uuid)
- `status` **(erforderlich)**: `de.mittwald.v1.container.ServiceStatus` (siehe Schema-Definition)
- `statusSetAt` **(erforderlich)**: string (date-time)

---

### de.mittwald.v1.container.ServiceSortOrder

**Mögliche Werte:**

- `descriptionAsc`
- `descriptionDesc`

---

### de.mittwald.v1.container.ServiceState

**Properties:**

- `command`: Array<string>
- `entrypoint`: Array<string>
- `envs`: Object
- `image` **(erforderlich)**: string
- `imageDigest`: string
- `ports`: Array<string>
- `volumes`: Array<string>

---

### de.mittwald.v1.container.ServiceStatus

**Mögliche Werte:**

- `running`
- `stopped`
- `restarting`
- `error`
- `creating`
- `starting`

---

### de.mittwald.v1.container.SetRegistryCredentials

**Properties:**

- `password` **(erforderlich)**: string
  - Your registry password or access token.
- `username` **(erforderlich)**: string
  - Your registry username, use 'oauth2accesstoken' for access token authentication.

---

### de.mittwald.v1.container.StackResponse

**Properties:**

- `description` **(erforderlich)**: string
- `disabled` **(erforderlich)**: boolean
- `id` **(erforderlich)**: string (uuid)
- `prefix` **(erforderlich)**: string
  - Prefix for all service-names in this stack.
- `projectId` **(erforderlich)**: string (uuid)
- `services`: Array<`de.mittwald.v1.container.ServiceResponse` (siehe Schema-Definition)>
- `volumes`: Array<`de.mittwald.v1.container.VolumeResponse` (siehe Schema-Definition)>

---

### de.mittwald.v1.container.UpdateRegistry

**Properties:**

- `credentials`: 
- `description`: string
- `uri`: string

---

### de.mittwald.v1.container.VolumeDeclareRequest

**Properties:**

- `name` **(erforderlich)**: string

---

### de.mittwald.v1.container.VolumeRequest

**Properties:**

- `name`: string

---

### de.mittwald.v1.container.VolumeResponse

**Properties:**

- `id` **(erforderlich)**: string (uuid)
- `linkedServices`: Array<string (uuid)>
- `name` **(erforderlich)**: string
- `orphaned` **(erforderlich)**: boolean
  - Whether the Volume is attached to a Stack.
- `stackId` **(erforderlich)**: string (uuid)
- `storageUsageInBytes` **(erforderlich)**: integer (int64)
- `storageUsageInBytesSetAt` **(erforderlich)**: string (date-time)

---

### de.mittwald.v1.container.VolumeSortOrder

**Mögliche Werte:**

- `nameAsc`
- `nameDesc`
- `storageAsc`
- `storageDesc`

---

### de.mittwald.v1.contract.AggregateReference

**Properties:**

- `aggregate` **(erforderlich)**: string
- `domain` **(erforderlich)**: string
- `id` **(erforderlich)**: string

---

### de.mittwald.v1.contract.Article

**Properties:**

- `amount` **(erforderlich)**: integer
- `articleTemplateId` **(erforderlich)**: string
- `description`: string
- `id` **(erforderlich)**: string
- `name` **(erforderlich)**: string
- `unitPrice` **(erforderlich)**: `de.mittwald.v1.contract.Price` (siehe Schema-Definition)

---

### de.mittwald.v1.contract.Contact

**Properties:**

- `address` **(erforderlich)**: `de.mittwald.v1.commons.Address` (siehe Schema-Definition)
- `company`: string
- `emailAddress`: string (email)
- `firstName`: string
- `lastName`: string
- `phoneNumbers`: Array<string>
- `salutation` **(erforderlich)**: `de.mittwald.v1.commons.Salutation` (siehe Schema-Definition)
- `title`: string
- `useFormalTerm`: boolean

---

### de.mittwald.v1.contract.Contract

**Properties:**

- `additionalItems`: Array<`de.mittwald.v1.contract.ContractItem` (siehe Schema-Definition)>
- `baseItem` **(erforderlich)**: `de.mittwald.v1.contract.ContractItem` (siehe Schema-Definition)
- `contractId` **(erforderlich)**: string (uuid)
- `contractNumber` **(erforderlich)**: string
- `customerId` **(erforderlich)**: string
- `termination`: `de.mittwald.v1.contract.Termination` (siehe Schema-Definition)

---

### de.mittwald.v1.contract.ContractItem

**Properties:**

- `activationDate`: string (date-time)
- `aggregateReference`: `de.mittwald.v1.contract.AggregateReference` (siehe Schema-Definition)
- `articles` **(erforderlich)**: Array<`de.mittwald.v1.contract.Article` (siehe Schema-Definition)>
- `contractPeriod` **(erforderlich)**: number
- `description` **(erforderlich)**: string
- `freeTrialDays`: number
- `groupByProjectId`: string (uuid)
- `invoiceStop`: string (date-time)
  - If this attribute is set, the contract item will currently only be invoiced until this date.
- `invoicingPeriod`: number
- `isActivated` **(erforderlich)**: boolean
- `isBaseItem` **(erforderlich)**: boolean
- `isInFreeTrial`: boolean
- `isInclusive`: boolean
- `itemId` **(erforderlich)**: string (uuid)
- `nextPossibleDowngradeDate`: string (date-time)
  - If this attribute is not set, termination is not allowed.
- `nextPossibleTerminationDate`: string (date-time)
  - If this attribute is not set, a tariff change is not allowed.
- `nextPossibleUpgradeDate`: string (date-time)
  - If this attribute is not set, a tariff change is not allowed.
- `orderDate`: string (date-time)
- `orderId`: string (uuid)
- `replacedByItem`: string (uuid)
- `tariffChange`: `de.mittwald.v1.contract.TariffChange` (siehe Schema-Definition)
- `termination`: `de.mittwald.v1.contract.Termination` (siehe Schema-Definition)
- `totalPrice` **(erforderlich)**: `de.mittwald.v1.contract.Price` (siehe Schema-Definition)

---

### de.mittwald.v1.contract.Error

**Properties:**

- `message` **(erforderlich)**: string
- `type` **(erforderlich)**: string

---

### de.mittwald.v1.contract.Price

**Properties:**

- `currency` **(erforderlich)**: string - Enum: `EUR`
- `value` **(erforderlich)**: integer
  - The value of the price in the smallest currency unit (e.g. cents)

---

### de.mittwald.v1.contract.TariffChange

**Properties:**

- `newArticles` **(erforderlich)**: Array<`de.mittwald.v1.contract.Article` (siehe Schema-Definition)>
- `scheduledAtDate` **(erforderlich)**: string (date-time)
- `scheduledByUserId`: string
- `targetDate` **(erforderlich)**: string (date-time)

---

### de.mittwald.v1.contract.Termination

**Properties:**

- `cancellationForbidden`: boolean
  - Indicates whether the User is allowed to cancel the Termination.
- `explanation`: string
- `reason`: string
- `scheduledAtDate` **(erforderlich)**: string (date-time)
- `scheduledByUserId`: string
- `targetDate` **(erforderlich)**: string (date-time)

---

### de.mittwald.v1.conversation.AggregateReference

**Properties:**

- `aggregate` **(erforderlich)**: string
- `domain` **(erforderlich)**: string
- `id` **(erforderlich)**: string

---

### de.mittwald.v1.conversation.Category

**Properties:**

- `categoryId` **(erforderlich)**: string (uuid)
- `name` **(erforderlich)**: string
- `referenceType` **(erforderlich)**: `de.mittwald.v1.conversation.CategoryReferenceType` (siehe Schema-Definition)

---

### de.mittwald.v1.conversation.CategoryReferenceType

---

### de.mittwald.v1.conversation.Conversation

**Properties:**

- `category`: `de.mittwald.v1.conversation.Category` (siehe Schema-Definition)
- `conversationId` **(erforderlich)**: string (uuid)
- `createdAt` **(erforderlich)**: string (date-time)
- `createdBy`: `de.mittwald.v1.conversation.User` (siehe Schema-Definition)
- `lastMessage`: Object
- `lastMessageAt`: string (date-time)
- `lastMessageBy`: `de.mittwald.v1.conversation.User` (siehe Schema-Definition)
- `mainUser` **(erforderlich)**: `de.mittwald.v1.conversation.User` (siehe Schema-Definition)
- `notificationRoles`: Array<`de.mittwald.v1.conversation.NotificationRole` (siehe Schema-Definition)>
- `relatedTo`: `de.mittwald.v1.conversation.RelatedAggregateReference` (siehe Schema-Definition)
- `relations`: Array<`de.mittwald.v1.conversation.AggregateReference` (siehe Schema-Definition)>
- `sharedWith`: `de.mittwald.v1.conversation.ShareableAggregateReference` (siehe Schema-Definition)
- `shortId` **(erforderlich)**: string
- `status` **(erforderlich)**: `de.mittwald.v1.conversation.Status` (siehe Schema-Definition)
- `title` **(erforderlich)**: string
- `visibility` **(erforderlich)**: string - Enum: `shared`, `private`

---

### de.mittwald.v1.conversation.ConversationMembers

---

### de.mittwald.v1.conversation.ConversationPreferences

**Properties:**

- `customerId` **(erforderlich)**: string (uuid)
- `preferredUsers` **(erforderlich)**: Object

---

### de.mittwald.v1.conversation.DeletedFile

**Properties:**

- `deletionDate` **(erforderlich)**: string (date-time)
- `id` **(erforderlich)**: string (uuid)
- `name` **(erforderlich)**: string
- `status` **(erforderlich)**: string - Enum: `deleted`
- `type` **(erforderlich)**: string

---

### de.mittwald.v1.conversation.Department

**Mögliche Werte:**

- `development`
- `mail`
- `accounting`
- `cloudHosting`
- `customerService`
- `productManagement`
- `generic`

---

### de.mittwald.v1.conversation.Error

**Properties:**

- `message` **(erforderlich)**: string
- `type` **(erforderlich)**: string

---

### de.mittwald.v1.conversation.File

---

### de.mittwald.v1.conversation.GetConversationIdResponse

**Properties:**

- `conversationId` **(erforderlich)**: string (uuid)
- `shortId` **(erforderlich)**: string

---

### de.mittwald.v1.conversation.Group

**Properties:**

- `acronym`: string
- `id` **(erforderlich)**: string
- `isDefaultGroup`: boolean
- `name` **(erforderlich)**: string

---

### de.mittwald.v1.conversation.Message

**Properties:**

- `conversationId` **(erforderlich)**: string (uuid)
- `createdAt` **(erforderlich)**: string (date-time)
- `createdBy`: `de.mittwald.v1.conversation.User` (siehe Schema-Definition)
- `files`: Array<`de.mittwald.v1.conversation.File` (siehe Schema-Definition)>
- `internal`: boolean
- `messageContent`: string
- `messageId` **(erforderlich)**: string (uuid)
- `type` **(erforderlich)**: string - Enum: `MESSAGE`

---

### de.mittwald.v1.conversation.NotificationRole

**Mögliche Werte:**

- `customer_owner`
- `customer_accountant`
- `customer_member`
- `project_owner`
- `project_emailadmin`
- `project_external`

---

### de.mittwald.v1.conversation.RelatedAggregateReference

---

### de.mittwald.v1.conversation.RequestedFile

**Properties:**

- `id` **(erforderlich)**: string (uuid)
- `status` **(erforderlich)**: string - Enum: `requested`

---

### de.mittwald.v1.conversation.ServiceRequest

**Properties:**

- `conversationId` **(erforderlich)**: string (uuid)
- `createdAt` **(erforderlich)**: string (date-time)
- `files`: Array<`de.mittwald.v1.conversation.File` (siehe Schema-Definition)>
- `messageContent` **(erforderlich)**: string - Enum: `relocation`, `call`
- `messageId` **(erforderlich)**: string (uuid)
- `meta` **(erforderlich)**: 
- `type` **(erforderlich)**: string - Enum: `SERVICE_REQUEST`

---

### de.mittwald.v1.conversation.ServiceRequestRelocationPayload

**Properties:**

- `contact` **(erforderlich)**: Object
- `domain`: Object
- `notes`: string
- `preferredRelocationDate`: string (date-time)
- `redirectusKey` **(erforderlich)**: number
- `source` **(erforderlich)**: Object
- `target` **(erforderlich)**: Object
- `userId` **(erforderlich)**: string (uuid)

---

### de.mittwald.v1.conversation.ShareableAggregateReference

---

### de.mittwald.v1.conversation.Status

**Mögliche Werte:**

- `open`
- `closed`
- `answered`
- `inProgress`
- `waiting`

---

### de.mittwald.v1.conversation.StatusUpdate

**Properties:**

- `conversationId` **(erforderlich)**: string
- `createdAt` **(erforderlich)**: string
- `internal`: boolean
- `messageContent` **(erforderlich)**: string
- `meta`: Object
- `type` **(erforderlich)**: string - Enum: `STATUS_UPDATE`

---

### de.mittwald.v1.conversation.UploadedFile

**Properties:**

- `id` **(erforderlich)**: string (uuid)
- `name` **(erforderlich)**: string
- `status` **(erforderlich)**: string - Enum: `uploaded`
- `type` **(erforderlich)**: string

---

### de.mittwald.v1.conversation.User

**Properties:**

- `active`: boolean
- `atlasGroup`: `de.mittwald.v1.conversation.Group` (siehe Schema-Definition)
- `avatarRefId`: string
- `clearName`: string
- `department`: `de.mittwald.v1.conversation.Department` (siehe Schema-Definition)
- `group`: `de.mittwald.v1.conversation.Group` (siehe Schema-Definition)
- `userId` **(erforderlich)**: string

---

### de.mittwald.v1.cronjob.Cronjob

**Properties:**

- `active` **(erforderlich)**: boolean
- `appId` **(erforderlich)**: string (uuid)
- `createdAt` **(erforderlich)**: string (date-time)
- `description` **(erforderlich)**: string
- `destination` **(erforderlich)**: 
- `email`: string (email)
- `failedExecutionAlertThreshold` **(erforderlich)**: integer
- `id` **(erforderlich)**: string (uuid)
- `interval` **(erforderlich)**: string
- `latestExecution`: `de.mittwald.v1.cronjob.CronjobExecution` (siehe Schema-Definition)
- `nextExecutionTime`: string (date-time)
- `projectId`: string (uuid)
- `shortId` **(erforderlich)**: string
- `timeout` **(erforderlich)**: integer
- `updatedAt` **(erforderlich)**: string (date-time)

---

### de.mittwald.v1.cronjob.CronjobCommand

**Properties:**

- `interpreter` **(erforderlich)**: string
- `parameters`: string
- `path` **(erforderlich)**: string

---

### de.mittwald.v1.cronjob.CronjobExecution

**Properties:**

- `abortedBy`: Object
- `cronjobId` **(erforderlich)**: string
- `durationInMilliseconds`: integer (int64)
- `end`: string (date-time)
- `executionEnd`: string (date-time)
- `executionStart`: string (date-time)
- `id` **(erforderlich)**: string
- `logPath`: string
- `start`: string (date-time)
- `status` **(erforderlich)**: string - Enum: `Complete`, `Failed`, `AbortedBySystem`, `Pending`, `Running`, `AbortedByUser`, `TimedOut`
- `successful` **(erforderlich)**: boolean
- `triggeredBy`: Object

---

### de.mittwald.v1.cronjob.CronjobExecutionAnalysis

**Properties:**

- `message` **(erforderlich)**: string

---

### de.mittwald.v1.cronjob.CronjobExecutionSortOrder

**Mögliche Werte:**

- `oldestFirst`
- `newestFirst`
- `slowestFirst`
- `fastestFirst`

---

### de.mittwald.v1.cronjob.CronjobRequest

**Properties:**

- `active` **(erforderlich)**: boolean
- `appId` **(erforderlich)**: string (uuid)
- `description` **(erforderlich)**: string
- `destination` **(erforderlich)**: 
- `email`: string (email)
- `failedExecutionAlertThreshold`: integer
- `interval` **(erforderlich)**: string
- `timeout` **(erforderlich)**: integer

---

### de.mittwald.v1.cronjob.CronjobUrl

**Properties:**

- `url` **(erforderlich)**: string

---

### de.mittwald.v1.customer.Contact

**Properties:**

- `address` **(erforderlich)**: `de.mittwald.v1.commons.Address` (siehe Schema-Definition)
- `company`: string
- `emailAddress`: string (email)
- `firstName`: string
- `lastName`: string
- `phoneNumbers`: Array<string>
- `salutation` **(erforderlich)**: `de.mittwald.v1.commons.Salutation` (siehe Schema-Definition)
- `title`: string
- `useFormalTerm`: boolean

---

### de.mittwald.v1.customer.Customer

**Properties:**

- `activeSuspension`: Object
- `avatarRefId`: string
- `categoryId`: string
- `creationDate` **(erforderlich)**: string (date-time)
- `customerId` **(erforderlich)**: string
- `customerNumber` **(erforderlich)**: string
- `deletionProhibitedBy`: Array<string - Enum: `hasOpenInvoices`, `hasActiveContracts`, `hasActiveExtensionSubscriptions`, `isActiveContributor`>
- `executingUserRoles`: Array<`de.mittwald.v1.customer.Role` (siehe Schema-Definition)>
- `flags`: Array<`de.mittwald.v1.customer.CustomerFlag` (siehe Schema-Definition)>
- `isAllowedToPlaceOrders`: boolean
- `isBanned`: boolean
- `isInDefaultOfPayment`: boolean
- `levelOfUndeliverableDunningNotice`: string - Enum: `first`, `second`
- `memberCount` **(erforderlich)**: integer
- `name` **(erforderlich)**: string
- `owner`: `de.mittwald.v1.customer.Contact` (siehe Schema-Definition)
- `projectCount` **(erforderlich)**: integer
- `vatId`: string
- `vatIdValidationState`: string - Enum: `valid`, `invalid`, `pending`, `unspecified`

---

### de.mittwald.v1.customer.CustomerFlag

**Mögliche Werte:**

- `agency`
- `employee`

---

### de.mittwald.v1.customer.CustomerMeta

**Properties:**

- `avatarRefId`: string
- `customerId` **(erforderlich)**: string
- `name` **(erforderlich)**: string

---

### de.mittwald.v1.customer.Role

the role within a customer

**Mögliche Werte:**

- `owner`
- `member`
- `accountant`

---

### de.mittwald.v1.database.CreateMySqlDatabase

**Properties:**

- `characterSettings`: `de.mittwald.v1.database.characterSettings` (siehe Schema-Definition)
- `description` **(erforderlich)**: string
- `projectId` **(erforderlich)**: string (uuid)
- `version` **(erforderlich)**: string

---

### de.mittwald.v1.database.CreateMySqlUser

**Properties:**

- `accessIpMask`: string
- `accessLevel` **(erforderlich)**: string - Enum: `full`, `readonly`
- `databaseId` **(erforderlich)**: string (uuid)
- `description` **(erforderlich)**: string
- `externalAccess`: boolean
- `password` **(erforderlich)**: string

---

### de.mittwald.v1.database.CreateMySqlUserWithDatabase

**Properties:**

- `accessIpMask`: string
- `accessLevel` **(erforderlich)**: string - Enum: `full`, `readonly`
- `externalAccess`: boolean
- `password` **(erforderlich)**: string

---

### de.mittwald.v1.database.DatabaseStatus

**Mögliche Werte:**

- `pending`
- `ready`
- `migrating`
- `importing`
- `error`

---

### de.mittwald.v1.database.DatabaseUserStatus

**Mögliche Werte:**

- `pending`
- `ready`
- `error`
- `terminating`
- `disabled`

---

### de.mittwald.v1.database.MySqlCharacterSettings

**Properties:**

- `collations` **(erforderlich)**: Array<string>
- `name` **(erforderlich)**: string
- `versionId` **(erforderlich)**: string

---

### de.mittwald.v1.database.MySqlDatabase

**Properties:**

- `characterSettings` **(erforderlich)**: `de.mittwald.v1.database.characterSettings` (siehe Schema-Definition)
- `createdAt` **(erforderlich)**: string (date-time)
- `description` **(erforderlich)**: string
- `externalHostname` **(erforderlich)**: string
- `finalizers`: Array<string>
- `hostname` **(erforderlich)**: string
- `id` **(erforderlich)**: string (uuid)
- `isReady` **(erforderlich)**: boolean
- `isShared` **(erforderlich)**: boolean
- `mainUser`: `de.mittwald.v1.database.MySqlUser` (siehe Schema-Definition)
- `name` **(erforderlich)**: string
- `projectId` **(erforderlich)**: string (uuid)
- `status` **(erforderlich)**: `de.mittwald.v1.database.DatabaseStatus` (siehe Schema-Definition)
- `statusSetAt` **(erforderlich)**: string (date-time)
- `storageUsageInBytes` **(erforderlich)**: integer (int64)
- `storageUsageInBytesSetAt` **(erforderlich)**: string (date-time)
- `updatedAt` **(erforderlich)**: string (date-time)
- `version` **(erforderlich)**: string

---

### de.mittwald.v1.database.MySqlUser

**Properties:**

- `accessIpMask`: string
- `accessLevel` **(erforderlich)**: string - Enum: `full`, `readonly`
- `createdAt` **(erforderlich)**: string (date-time)
- `databaseId` **(erforderlich)**: string (uuid)
- `description`: string
- `disabled` **(erforderlich)**: boolean
- `externalAccess` **(erforderlich)**: boolean
- `id` **(erforderlich)**: string (uuid)
- `mainUser` **(erforderlich)**: boolean
- `name` **(erforderlich)**: string
- `passwordUpdatedAt` **(erforderlich)**: string (date-time)
- `status` **(erforderlich)**: `de.mittwald.v1.database.DatabaseUserStatus` (siehe Schema-Definition)
- `statusSetAt` **(erforderlich)**: string (date-time)
- `updatedAt` **(erforderlich)**: string (date-time)

---

### de.mittwald.v1.database.MySqlVersion

**Properties:**

- `disabled` **(erforderlich)**: boolean
- `id` **(erforderlich)**: string
- `name` **(erforderlich)**: string
- `number` **(erforderlich)**: string

---

### de.mittwald.v1.database.PhpMyAdminURL

**Properties:**

- `url` **(erforderlich)**: string

---

### de.mittwald.v1.database.RedisDatabase

**Properties:**

- `configuration`: `de.mittwald.v1.database.RedisDatabaseConfiguration` (siehe Schema-Definition)
- `createdAt` **(erforderlich)**: string (date-time)
- `description` **(erforderlich)**: string
- `finalizers`: Array<string>
- `hostname` **(erforderlich)**: string
- `id` **(erforderlich)**: string (uuid)
- `name` **(erforderlich)**: string
- `port` **(erforderlich)**: integer
- `projectId` **(erforderlich)**: string (uuid)
- `status` **(erforderlich)**: `de.mittwald.v1.database.DatabaseStatus` (siehe Schema-Definition)
- `statusSetAt` **(erforderlich)**: string (date-time)
- `storageUsageInBytes` **(erforderlich)**: integer (int64)
- `storageUsageInBytesSetAt` **(erforderlich)**: string (date-time)
- `updatedAt` **(erforderlich)**: string (date-time)
- `version` **(erforderlich)**: string

---

### de.mittwald.v1.database.RedisDatabaseConfiguration

The configuration for a RedisDatabase.

**Properties:**

- `additionalFlags`: Array<string>
  - Additional flags passed to the database.
- `maxMemory`: string
  - The database's maximum memory. This may be a number, optionally suffixed by one of the IEC binary suffixes `Ki`, `Mi` or `Gi`.
- `maxMemoryPolicy`: string
  - The database's key eviction policy. See the [Redis documentation on key evictions](https://redis.io/docs/reference/eviction/) for more information.
- `persistent`: boolean
  - Persistent status of the database.

---

### de.mittwald.v1.database.RedisVersion

**Properties:**

- `disabled` **(erforderlich)**: boolean
- `id` **(erforderlich)**: string
- `name` **(erforderlich)**: string
- `number` **(erforderlich)**: string

---

### de.mittwald.v1.database.characterSettings

**Properties:**

- `characterSet` **(erforderlich)**: string
- `collation` **(erforderlich)**: string

---

### de.mittwald.v1.directus.Domain

**Properties:**

- `authCode`: string
  - The authcode of the domain. Leave empty when mittwald can generate a authcode on its own
- `domainOwnerData`: string
  - Leave empty when mittwald should keep the same domain owner
- `name` **(erforderlich)**: string

---

### de.mittwald.v1.directus.EmailInbox

**Properties:**

- `email` **(erforderlich)**: string
- `password` **(erforderlich)**: string

---

### de.mittwald.v1.dns.CombinedACustom

**Properties:**

- `a` **(erforderlich)**: Array<`de.mittwald.v1.dns.CombinedAManagedARecord` (siehe Schema-Definition)>
- `aaaa` **(erforderlich)**: Array<`de.mittwald.v1.dns.CombinedAManagedAAAARecord` (siehe Schema-Definition)>
- `settings` **(erforderlich)**: `de.mittwald.v1.dns.RecordSettings` (siehe Schema-Definition)

---

### de.mittwald.v1.dns.CombinedAManaged

**Properties:**

- `managedBy` **(erforderlich)**: 

---

### de.mittwald.v1.dns.CombinedAManagedAAAARecord

---

### de.mittwald.v1.dns.CombinedAManagedARecord

---

### de.mittwald.v1.dns.RecordCAA

---

### de.mittwald.v1.dns.RecordCAAComponent

**Properties:**

- `records` **(erforderlich)**: Array<`de.mittwald.v1.dns.RecordCAARecord` (siehe Schema-Definition)>
- `settings` **(erforderlich)**: `de.mittwald.v1.dns.RecordSettings` (siehe Schema-Definition)

---

### de.mittwald.v1.dns.RecordCAARecord

**Properties:**

- `flags` **(erforderlich)**: integer
- `tag` **(erforderlich)**: string - Enum: `issue`, `issuewild`, `iodef`
- `value` **(erforderlich)**: string (idn-dnsname)

---

### de.mittwald.v1.dns.RecordCNAME

---

### de.mittwald.v1.dns.RecordCNAMEComponent

**Properties:**

- `fqdn` **(erforderlich)**: string (idn-dnsname)
- `settings` **(erforderlich)**: `de.mittwald.v1.dns.RecordSettings` (siehe Schema-Definition)

---

### de.mittwald.v1.dns.RecordCombinedA

---

### de.mittwald.v1.dns.RecordMX

---

### de.mittwald.v1.dns.RecordMXCustom

**Properties:**

- `records` **(erforderlich)**: Array<`de.mittwald.v1.dns.RecordMXRecord` (siehe Schema-Definition)>
- `settings` **(erforderlich)**: `de.mittwald.v1.dns.RecordSettings` (siehe Schema-Definition)

---

### de.mittwald.v1.dns.RecordMXManaged

**Properties:**

- `managed` **(erforderlich)**: boolean

---

### de.mittwald.v1.dns.RecordMXRecord

**Properties:**

- `fqdn` **(erforderlich)**: string (idn-dnsname)
- `priority` **(erforderlich)**: integer

---

### de.mittwald.v1.dns.RecordSRV

---

### de.mittwald.v1.dns.RecordSRVComponent

**Properties:**

- `records` **(erforderlich)**: Array<`de.mittwald.v1.dns.RecordSRVRecord` (siehe Schema-Definition)>
- `settings` **(erforderlich)**: `de.mittwald.v1.dns.RecordSettings` (siehe Schema-Definition)

---

### de.mittwald.v1.dns.RecordSRVRecord

**Properties:**

- `fqdn` **(erforderlich)**: string (idn-dnsname)
- `port` **(erforderlich)**: integer
- `priority`: integer
- `weight`: integer

---

### de.mittwald.v1.dns.RecordSettings

**Properties:**

- `ttl`: 

---

### de.mittwald.v1.dns.RecordTXT

---

### de.mittwald.v1.dns.RecordTXTComponent

**Properties:**

- `entries` **(erforderlich)**: Array<string>
- `settings` **(erforderlich)**: `de.mittwald.v1.dns.RecordSettings` (siehe Schema-Definition)

---

### de.mittwald.v1.dns.RecordUnset

**Properties:**


---

### de.mittwald.v1.dns.TtlAuto

**Properties:**

- `auto` **(erforderlich)**: boolean
  - this will always be true

---

### de.mittwald.v1.dns.TtlSeconds

**Properties:**

- `seconds` **(erforderlich)**: integer

---

### de.mittwald.v1.dns.Zone

**Properties:**

- `domain` **(erforderlich)**: string
- `id` **(erforderlich)**: string (uuid)
- `recordSet` **(erforderlich)**: Object

---

### de.mittwald.v1.domain.AuthCode

**Properties:**

- `expires`: string (date-time)
- `value` **(erforderlich)**: string

---

### de.mittwald.v1.domain.AuthCode2

**Properties:**

- `expires` **(erforderlich)**: string (date-time)

---

### de.mittwald.v1.domain.CreateDomainHandleData

**Properties:**

- `adminC`: Array<`de.mittwald.v1.domain.HandleField` (siehe Schema-Definition)>
- `ownerC` **(erforderlich)**: Array<`de.mittwald.v1.domain.HandleField` (siehe Schema-Definition)>

---

### de.mittwald.v1.domain.Domain

**Properties:**

- `authCode`: `de.mittwald.v1.domain.AuthCode` (siehe Schema-Definition)
- `authCode2`: `de.mittwald.v1.domain.AuthCode2` (siehe Schema-Definition)
- `connected` **(erforderlich)**: boolean
- `contactHash`: string
- `deleted` **(erforderlich)**: boolean
- `domain` **(erforderlich)**: string (naked-domain)
- `domainId` **(erforderlich)**: string (uuid)
- `handles` **(erforderlich)**: Object
- `nameservers` **(erforderlich)**: Array<string (idn-hostname)>
- `processes`: Array<`de.mittwald.v1.domain.Process` (siehe Schema-Definition)>
- `projectId` **(erforderlich)**: string (uuid)
- `scheduledDeletionDate`: string (date-time)
- `transferInAuthCode`: string
- `usesDefaultNameserver` **(erforderlich)**: boolean

---

### de.mittwald.v1.domain.HandleData

**Properties:**

- `handleFields`: Array<`de.mittwald.v1.domain.HandleField` (siehe Schema-Definition)>
- `handleRef`: string

---

### de.mittwald.v1.domain.HandleField

**Properties:**

- `name` **(erforderlich)**: string
- `value` **(erforderlich)**: string

---

### de.mittwald.v1.domain.HandleReadable

**Properties:**

- `current` **(erforderlich)**: `de.mittwald.v1.domain.HandleData` (siehe Schema-Definition)
- `desired`: `de.mittwald.v1.domain.HandleData` (siehe Schema-Definition)

---

### de.mittwald.v1.domain.Process

**Properties:**

- `error`: string
- `lastUpdate` **(erforderlich)**: string (date-time)
- `processType` **(erforderlich)**: `de.mittwald.v1.domain.ProcessType` (siehe Schema-Definition)
- `state` **(erforderlich)**: `de.mittwald.v1.domain.ProcessState` (siehe Schema-Definition)
- `status`: string
- `statusCode`: string
- `transactionId` **(erforderlich)**: string

---

### de.mittwald.v1.domain.ProcessState

**Mögliche Werte:**

- `UNSPECIFIED`
- `REQUESTED`
- `FAILED`

---

### de.mittwald.v1.domain.ProcessType

**Mögliche Werte:**

- `UNSPECIFIED`
- `REGISTER`
- `TRANSFER`
- `DELETE`
- `TRANSIT`
- `RESTORE`
- `UPDATE`
- `TRANSFER_OUT`
- `OWNER_CHANGE`
- `DECLARE_REQUESTED`

---

### de.mittwald.v1.domain.Registrar

**Mögliche Werte:**

- `INTERNETX`
- `DENIC`
- `HEXONET`

---

### de.mittwald.v1.domain.SuggestedDomains

**Properties:**

- `domains` **(erforderlich)**: Array<string>

---

### de.mittwald.v1.domain.TopLevel

**Properties:**

- `irtp` **(erforderlich)**: boolean
- `rgpDays` **(erforderlich)**: integer
- `tld` **(erforderlich)**: string
- `transferAuthCodeRequired` **(erforderlich)**: boolean
- `transferAuthentication` **(erforderlich)**: `de.mittwald.v1.domain.TransferAuthentication` (siehe Schema-Definition)

---

### de.mittwald.v1.domain.TransferAuthentication

**Mögliche Werte:**

- `unspecified`
- `code`
- `email`
- `push`

---

### de.mittwald.v1.extension.ExtensionInstanceContract

The Extension Instance Contract.

---

### de.mittwald.v1.extension.PricePlan

PricePlan with Variants.

**Properties:**

- `isDowngradeAllowed`: boolean
  - Indicates whether downgrading between variants is allowed.
- `isUpgradeAllowed`: boolean
  - Indicates whether upgrading between variants is allowed.
- `variants` **(erforderlich)**: Array<`de.mittwald.v1.extension.Variant` (siehe Schema-Definition)>

---

### de.mittwald.v1.extension.SubscriptionBasedContract

A strategy for Contracts that will be paid periodically.

**Properties:**

- `contractPeriodEndDate`: string (date-time)
- `currentPrice`: integer
  - monthly price in Euro Cent
- `interactionDeadline`: string (date-time)
- `interactionRequired` **(erforderlich)**: boolean
- `pendingVariantChange`: Object
- `status` **(erforderlich)**: string - Enum: `notStarted`, `pending`, `active`, `terminationPending`
- `terminationTargetDate`: string (date-time)
- `variantDescription`: string
- `variantKey`: string
- `variantName`: string

---

### de.mittwald.v1.extension.Variant

**Properties:**

- `description`: string
  - Description of Variant.
- `descriptionChangeType`: string - Enum: `FEATURE_SET_MODIFIED`, `FEATURE_SET_UNCHANGED`
  - DescriptionChangeType defines how the description change should be handled. Values:
  - FEATURE_SET_MODIFIED: The users have to confirm to the new contract details equal as price changes.
  - FEATURE_SET_UNCHANGED: The changes are only wording updates and do not impact the contract details, so no confirm is required.

- `isBookingStopped`: boolean
  - stop extension variant from being booked
- `key` **(erforderlich)**: string
  - Key that needs to be unique in Variant.
- `name`: string
  - Name of Variant.
- `priceInCents` **(erforderlich)**: number
  - Price in cents.

---

### de.mittwald.v1.fee.FeeStrategy

A strategy for fees of resources.

---

### de.mittwald.v1.fee.OneTimePaymentFeeStrategy

A strategy for fees that occur once.

**Properties:**

- `price` **(erforderlich)**: number
  - The one-time price in Euro Cents.

---

### de.mittwald.v1.fee.PeriodBasedFeeStrategy

A strategy for fees that occur periodically

**Properties:**

- `periods` **(erforderlich)**: Array<Object>

---

### de.mittwald.v1.fee.ResourceFee

A Fee of a Resource

**Properties:**

- `feeStrategy`: `de.mittwald.v1.fee.FeeStrategy` (siehe Schema-Definition)
- `id` **(erforderlich)**: string
  - The id of the given Resource

---

### de.mittwald.v1.file.FileMeta

**Properties:**

- `friendlyURL` **(erforderlich)**: string
  - deprecated, see friendlyUrl
- `friendlyUrl` **(erforderlich)**: string
- `id` **(erforderlich)**: string (uuid)
- `mimeType` **(erforderlich)**: string
- `name` **(erforderlich)**: string
- `sizeInBytes` **(erforderlich)**: integer (int64)
- `type` **(erforderlich)**: string
  - deprecated, see mimeType

---

### de.mittwald.v1.file.FileType

**Properties:**

- `extensions` **(erforderlich)**: Array<string>
- `mimeType` **(erforderlich)**: string

---

### de.mittwald.v1.file.FileUploadRules

**Properties:**

- `extensions` **(erforderlich)**: Array<string>
- `fileTypes` **(erforderlich)**: Array<`de.mittwald.v1.file.FileType` (siehe Schema-Definition)>
- `maxNameLength` **(erforderlich)**: integer
- `maxSizeInBytes` **(erforderlich)**: integer (int64)
- `maxSizeInKB` **(erforderlich)**: integer (int64)
  - deprecated, see maxSizeInBytes
- `maxSizeInKb` **(erforderlich)**: integer (int64)
  - deprecated, see maxSizeInBytes
- `mimeTypes` **(erforderlich)**: Array<string>
- `properties`: Object

---

### de.mittwald.v1.ingress.Ingress

**Properties:**

- `dnsValidationErrors` **(erforderlich)**: Array<string - Enum: `ERROR_UNSPECIFIED`, `ERROR_QUAD_A`, `ERROR_NO_A_RECORD`, `ERROR_ACME_CERTIFICATE_REQUEST_DEADLINE_EXCEEDED`>
  - A list of errors that occurred while validating the ingress's dns before requesting a certificate.
- `hostname` **(erforderlich)**: string (idn-hostname)
- `id` **(erforderlich)**: string (uuid)
- `ips` **(erforderlich)**: Object
- `isDefault` **(erforderlich)**: boolean
  - Whether this ingress is the default ingress or not. A default ingress is automatically created, it cannot be deleted. There can be only one default ingress per project.
- `isDomain`: boolean
- `isEnabled` **(erforderlich)**: boolean
- `ownership` **(erforderlich)**: `de.mittwald.v1.ingress.Ownership` (siehe Schema-Definition)
- `paths` **(erforderlich)**: Array<`de.mittwald.v1.ingress.Path` (siehe Schema-Definition)>
  - A list of paths. The default path `/` is always present and cannot be removed.
- `projectId` **(erforderlich)**: string (uuid)
- `tls` **(erforderlich)**: 

---

### de.mittwald.v1.ingress.IngressDeprecated

**Properties:**

- `dnsValidationErrors` **(erforderlich)**: Array<string - Enum: `ERROR_UNSPECIFIED`, `ERROR_QUAD_A`, `ERROR_NO_A_RECORD`, `ERROR_ACME_CERTIFICATE_REQUEST_DEADLINE_EXCEEDED`>
  - A list of errors that occurred while validating the ingress's dns before requesting a certificate.
- `hostname` **(erforderlich)**: string (idn-hostname)
- `id` **(erforderlich)**: string (uuid)
- `ips` **(erforderlich)**: Object
- `isDefault` **(erforderlich)**: boolean
  - Whether this ingress is the default ingress or not. A default ingress is automatically created, it cannot be deleted. There can be only one default ingress per project.
- `isDomain`: boolean
- `isEnabled` **(erforderlich)**: boolean
- `ownership` **(erforderlich)**: `de.mittwald.v1.ingress.Ownership` (siehe Schema-Definition)
- `paths` **(erforderlich)**: Array<`de.mittwald.v1.ingress.Path` (siehe Schema-Definition)>
  - A list of paths. The default path `/` is always present and cannot be removed.
- `projectId` **(erforderlich)**: string (uuid)
- `tls` **(erforderlich)**: 

---

### de.mittwald.v1.ingress.Ownership

**Properties:**

- `txtRecord`: string
- `verified` **(erforderlich)**: boolean
  - Whether the domain ownership is verified or not.

---

### de.mittwald.v1.ingress.Path

**Properties:**

- `path` **(erforderlich)**: string
- `target` **(erforderlich)**: 

---

### de.mittwald.v1.ingress.TargetContainer

**Properties:**

- `container` **(erforderlich)**: Object

---

### de.mittwald.v1.ingress.TargetInstallation

**Properties:**

- `installationId` **(erforderlich)**: string (uuid)

---

### de.mittwald.v1.ingress.TargetUrl

**Properties:**

- `url` **(erforderlich)**: string (uri)

---

### de.mittwald.v1.ingress.TargetUseDefaultPage

**Properties:**

- `useDefaultPage` **(erforderlich)**: boolean

---

### de.mittwald.v1.ingress.TlsAcme

**Properties:**

- `acme` **(erforderlich)**: boolean
  - Has to be `true`, as ssl cannot be deactivated.
- `isCreated` **(erforderlich)**: boolean
- `requestDeadline`: string (date-time)

---

### de.mittwald.v1.ingress.TlsAcmeDeprecated

**Properties:**

- `acme` **(erforderlich)**: boolean

---

### de.mittwald.v1.ingress.TlsCertificate

**Properties:**

- `certificateId` **(erforderlich)**: string (uuid)

---

### de.mittwald.v1.invoice.BankingInformation

**Properties:**

- `accountHolder` **(erforderlich)**: string
- `bic`: string
- `iban` **(erforderlich)**: string

---

### de.mittwald.v1.invoice.Cancellation

**Properties:**

- `cancellationId` **(erforderlich)**: string (uuid)
- `cancelledAt` **(erforderlich)**: string (date-time)
- `correctionNumber` **(erforderlich)**: string
- `pdfId` **(erforderlich)**: string (uuid)
- `reason`: string

---

### de.mittwald.v1.invoice.ContractInvoiceDefinition

**Properties:**

- `contractId` **(erforderlich)**: string (uuid)
- `items` **(erforderlich)**: Array<`de.mittwald.v1.invoice.ContractItemInvoiceDefinition` (siehe Schema-Definition)>

---

### de.mittwald.v1.invoice.ContractItemInvoiceDefinition

**Properties:**

- `contractItemId` **(erforderlich)**: string (uuid)
- `isDue`: boolean
- `serviceDate`: string (date-time)
- `servicePeriod` **(erforderlich)**: `de.mittwald.v1.invoice.DatePeriod` (siehe Schema-Definition)
- `vatRate` **(erforderlich)**: integer

---

### de.mittwald.v1.invoice.CorrectionDefinition

**Properties:**

- `contractItemId` **(erforderlich)**: string (uuid)
- `creditPeriod` **(erforderlich)**: `de.mittwald.v1.invoice.DatePeriod` (siehe Schema-Definition)

---

### de.mittwald.v1.invoice.DatePeriod

**Properties:**

- `end` **(erforderlich)**: string (date-time)
- `start` **(erforderlich)**: string (date-time)

---

### de.mittwald.v1.invoice.Error

**Properties:**

- `message` **(erforderlich)**: string
- `type` **(erforderlich)**: string

---

### de.mittwald.v1.invoice.Invoice

**Properties:**

- `amountPaid` **(erforderlich)**: number
- `cancellation`: `de.mittwald.v1.invoice.Cancellation` (siehe Schema-Definition)
- `cancellationOf`: string (uuid)
  - The ID of the Invoice that this invoice cancels.
- `currency` **(erforderlich)**: string
- `customerId` **(erforderlich)**: string
- `date` **(erforderlich)**: string (date-time)
- `groups` **(erforderlich)**: Array<Object>
- `id` **(erforderlich)**: string (uuid)
- `invoiceNumber` **(erforderlich)**: string
- `invoiceType` **(erforderlich)**: string - Enum: `REGULAR`, `REISSUE`, `CORRECTION`, `CANCELLATION`
- `paymentSettings`: `de.mittwald.v1.invoice.PaymentSettings` (siehe Schema-Definition)
- `pdfId` **(erforderlich)**: string (uuid)
- `recipient` **(erforderlich)**: `de.mittwald.v1.invoice.Recipient` (siehe Schema-Definition)
- `reissuedBy`: string (uuid)
  - The ID of the Invoice that is a Reissue of this one.
- `status` **(erforderlich)**: string - Enum: `NEW`, `CONFIRMED`, `DENIED`, `PAID`, `PARTIALLY_PAID`, `OVERPAID`
- `totalGross` **(erforderlich)**: number
- `totalNet` **(erforderlich)**: number
- `vatId`: string

---

### de.mittwald.v1.invoice.InvoiceItem

**Properties:**

- `additionalDescription`: string
- `contractItemId` **(erforderlich)**: string (uuid)
- `description` **(erforderlich)**: string
- `itemCancelledOrCorrectedBy`: Array<Object>
- `itemId` **(erforderlich)**: string (uuid)
- `price` **(erforderlich)**: `de.mittwald.v1.invoice.Price` (siehe Schema-Definition)
- `reference`: Object
- `serviceDate`: string (date-time)
- `servicePeriod`: `de.mittwald.v1.invoice.DatePeriod` (siehe Schema-Definition)
- `vatRate` **(erforderlich)**: number

---

### de.mittwald.v1.invoice.InvoiceSettings

**Properties:**

- `additionalEmailRecipients`: Array<string (email)>
- `debitPaymentStopUntil`: string (date-time)
- `id` **(erforderlich)**: string
- `invoicePeriod`: integer
- `lastBankingInformation`: `de.mittwald.v1.invoice.BankingInformation` (siehe Schema-Definition)
- `paymentSettings`: `de.mittwald.v1.invoice.PaymentSettings` (siehe Schema-Definition)
- `printedInvoices`: boolean
- `recipient`: `de.mittwald.v1.invoice.Recipient` (siehe Schema-Definition)
- `recipientSameAsOwner`: boolean
- `status`: Array<`de.mittwald.v1.invoice.InvoiceSettingsStatus` (siehe Schema-Definition)>
- `targetDay`: integer

---

### de.mittwald.v1.invoice.InvoiceSettingsStatus

**Properties:**

- `message` **(erforderlich)**: string
- `severity` **(erforderlich)**: string - Enum: `success`, `info`, `warning`, `error`
- `type` **(erforderlich)**: string - Enum: `returnDebitNote`, `returnDebitNoteWaitingForPayment`, `debtWrittenOff`, `bankrupt`

---

### de.mittwald.v1.invoice.PaymentSettings

---

### de.mittwald.v1.invoice.PaymentSettingsDebit

**Properties:**

- `accountHolder` **(erforderlich)**: string
- `bic`: string
  - Optional. Required for payments outside of the European Union.
- `iban` **(erforderlich)**: string
- `method` **(erforderlich)**: string - Enum: `debit`

---

### de.mittwald.v1.invoice.PaymentSettingsInvoice

**Properties:**

- `method` **(erforderlich)**: string - Enum: `invoice`

---

### de.mittwald.v1.invoice.Price

**Properties:**

- `currency` **(erforderlich)**: string - Enum: `EUR`
- `value` **(erforderlich)**: integer

---

### de.mittwald.v1.invoice.Recipient

**Properties:**

- `address` **(erforderlich)**: `de.mittwald.v1.commons.Address` (siehe Schema-Definition)
- `company`: string
- `emailAddress`: string (email)
- `firstName`: string
- `lastName`: string
- `phoneNumbers`: Array<string>
- `salutation` **(erforderlich)**: `de.mittwald.v1.commons.Salutation` (siehe Schema-Definition)
- `title`: string
- `useFormalTerm`: boolean

---

### de.mittwald.v1.leadfyndr.BasicCompany

**Properties:**

- `county` **(erforderlich)**: string
- `employeeCount`: integer (int64)
- `foundingYear`: number
- `salesVolume`: integer (int64)

---

### de.mittwald.v1.leadfyndr.BasicMetrics

**Properties:**

- `co2`: number (float)
- `contentLoaded`: number (float)
- `desktop` **(erforderlich)**: `de.mittwald.v1.leadfyndr.Lighthouse` (siehe Schema-Definition)
- `mobile` **(erforderlich)**: `de.mittwald.v1.leadfyndr.Lighthouse` (siehe Schema-Definition)
- `timeToFirstByteMs`: number

---

### de.mittwald.v1.leadfyndr.City

**Properties:**

- `city` **(erforderlich)**: string
- `country` **(erforderlich)**: string
- `county`: string
- `postCode` **(erforderlich)**: string

---

### de.mittwald.v1.leadfyndr.Contact

**Properties:**

- `address`: Object

---

### de.mittwald.v1.leadfyndr.DetailCompany

---

### de.mittwald.v1.leadfyndr.DetailMetrics

**Properties:**

- `additionalMetrics`: Object
- `basic` **(erforderlich)**: `de.mittwald.v1.leadfyndr.BasicMetrics` (siehe Schema-Definition)

---

### de.mittwald.v1.leadfyndr.Hoster

**Properties:**

- `mailServer` **(erforderlich)**: Array<string>
- `nameServer` **(erforderlich)**: Array<string>
- `server` **(erforderlich)**: Array<string>

---

### de.mittwald.v1.leadfyndr.Lead

**Properties:**

- `businessFields` **(erforderlich)**: Array<string>
- `company` **(erforderlich)**: `de.mittwald.v1.leadfyndr.BasicCompany` (siehe Schema-Definition)
- `description` **(erforderlich)**: string
- `hoster` **(erforderlich)**: Object
- `languages` **(erforderlich)**: Array<string>
- `leadId` **(erforderlich)**: string
- `mainTechnology`: `de.mittwald.v1.leadfyndr.Technology` (siehe Schema-Definition)
- `metrics` **(erforderlich)**: `de.mittwald.v1.leadfyndr.BasicMetrics` (siehe Schema-Definition)
- `potential` **(erforderlich)**: number (float)
- `scannedAt`: string (date-time)
- `screenshot` **(erforderlich)**: string
- `technologies` **(erforderlich)**: Array<`de.mittwald.v1.leadfyndr.Technology` (siehe Schema-Definition)>

---

### de.mittwald.v1.leadfyndr.LeadsExport

**Properties:**

- `customerId` **(erforderlich)**: string
- `exportId` **(erforderlich)**: string
- `exportedAt` **(erforderlich)**: string (date-time)
- `exportedBy`: `de.mittwald.v1.leadfyndr.LeadsExportExporter` (siehe Schema-Definition)
- `leadCount` **(erforderlich)**: integer (int32)
  - The number of leads included in the export.

---

### de.mittwald.v1.leadfyndr.LeadsExportExporter

**Properties:**

- `avatarRefId`: string
- `person`: Object
- `userId` **(erforderlich)**: string

---

### de.mittwald.v1.leadfyndr.Lighthouse

**Properties:**

- `accessibility`: number (float)
- `bestPractice`: number (float)
- `cumulativeLayoutShift`: number (float)
- `firstContentfulPaint`: number (float)
- `largestContentfulPaint`: number (float)
- `performance`: number (float)
- `seo`: number (float)
- `totalBlockingTime`: number (float)

---

### de.mittwald.v1.leadfyndr.Metric

**Properties:**

- `category` **(erforderlich)**: string
- `name` **(erforderlich)**: string
- `score`: number
- `unit`: string
- `value`: number

---

### de.mittwald.v1.leadfyndr.Profile

**Properties:**

- `approvedOn` **(erforderlich)**: string (date-time)
- `customerId` **(erforderlich)**: string
- `disabledOn`: string (date-time)
- `domain` **(erforderlich)**: string

---

### de.mittwald.v1.leadfyndr.ProfileRequest

**Properties:**

- `createdOn` **(erforderlich)**: string (date-time)
- `customerId` **(erforderlich)**: string
- `domain` **(erforderlich)**: string
- `profileId` **(erforderlich)**: string
- `requestedBy` **(erforderlich)**: `de.mittwald.v1.leadfyndr.User` (siehe Schema-Definition)
- `resultOn`: string (date-time)
- `status` **(erforderlich)**: string - Enum: `AUTOTEST_INIT`, `MANUAL_VERIFICATION`, `REJECTED`, `APPROVED`

---

### de.mittwald.v1.leadfyndr.SocialMedia

**Properties:**

- `network` **(erforderlich)**: string
- `url` **(erforderlich)**: string

---

### de.mittwald.v1.leadfyndr.TariffOptions

**Properties:**

- `nextUnlockRenewalDate`: string (date)
- `reservation` **(erforderlich)**: Object
- `unlocked` **(erforderlich)**: Object

---

### de.mittwald.v1.leadfyndr.Technology

**Properties:**

- `categories`: Array<Object>
- `categoryPriority` **(erforderlich)**: integer
- `name` **(erforderlich)**: string
- `version`: string

---

### de.mittwald.v1.leadfyndr.UnlockedLead

**Properties:**

- `actualUrl` **(erforderlich)**: string
- `businessFields` **(erforderlich)**: Array<string>
- `company` **(erforderlich)**: `de.mittwald.v1.leadfyndr.DetailCompany` (siehe Schema-Definition)
- `contact` **(erforderlich)**: `de.mittwald.v1.leadfyndr.Contact` (siehe Schema-Definition)
- `description` **(erforderlich)**: string
- `domain` **(erforderlich)**: string
- `hoster` **(erforderlich)**: `de.mittwald.v1.leadfyndr.Hoster` (siehe Schema-Definition)
- `languages` **(erforderlich)**: Array<string>
- `leadId` **(erforderlich)**: string
- `mainTechnology`: `de.mittwald.v1.leadfyndr.Technology` (siehe Schema-Definition)
- `metrics` **(erforderlich)**: `de.mittwald.v1.leadfyndr.DetailMetrics` (siehe Schema-Definition)
- `potential` **(erforderlich)**: number (float)
- `reservationAllowed`: boolean
- `reservedAt`: string (date-time)
- `scannedAt`: string (date-time)
- `screenshot` **(erforderlich)**: string
- `socialMedia` **(erforderlich)**: Array<`de.mittwald.v1.leadfyndr.SocialMedia` (siehe Schema-Definition)>
- `technologies` **(erforderlich)**: Array<`de.mittwald.v1.leadfyndr.Technology` (siehe Schema-Definition)>
- `unlockedAt` **(erforderlich)**: string (date-time)

---

### de.mittwald.v1.leadfyndr.User

**Properties:**

- `userId` **(erforderlich)**: string

---

### de.mittwald.v1.mail.CreateForwardAddress

**Properties:**

- `address` **(erforderlich)**: string (idn-email)
- `forwardAddresses` **(erforderlich)**: Array<string (idn-email)>

---

### de.mittwald.v1.mail.CreateMailAddress

**Properties:**

- `address` **(erforderlich)**: string (idn-email)
- `forwardAddresses`: Array<string (idn-email)>
- `isCatchAll` **(erforderlich)**: boolean
- `mailbox` **(erforderlich)**: Object

---

### de.mittwald.v1.mail.Deliverybox

**Properties:**

- `authenticationEnabled` **(erforderlich)**: boolean
- `description` **(erforderlich)**: string
- `id` **(erforderlich)**: string (uuid)
- `name` **(erforderlich)**: string
- `passwordUpdatedAt` **(erforderlich)**: string (date-time)
- `projectId` **(erforderlich)**: string
- `sendingEnabled` **(erforderlich)**: boolean
- `updatedAt` **(erforderlich)**: string (date-time)

---

### de.mittwald.v1.mail.Error

**Properties:**

- `message` **(erforderlich)**: string
- `type` **(erforderlich)**: string

---

### de.mittwald.v1.mail.MailAddress

**Properties:**

- `address` **(erforderlich)**: string (idn-email)
- `archive` **(erforderlich)**: Object
- `autoResponder` **(erforderlich)**: Object
- `forwardAddresses` **(erforderlich)**: Array<string (idn-email)>
- `id` **(erforderlich)**: string (uuid)
- `isArchived` **(erforderlich)**: boolean
- `isBackupInProgress` **(erforderlich)**: boolean
- `isCatchAll` **(erforderlich)**: boolean
- `mailbox`: Object
- `projectId` **(erforderlich)**: string
- `receivingDisabled` **(erforderlich)**: boolean
- `updatedAt` **(erforderlich)**: string (date-time)

---

### de.mittwald.v1.mail.MailAddressBackup

**Properties:**

- `name` **(erforderlich)**: string

---

### de.mittwald.v1.mail.MailsystemSettings

**Properties:**

- `imapClusterId` **(erforderlich)**: string
- `mailDirectory` **(erforderlich)**: string
- `rateLimitId` **(erforderlich)**: string

---

### de.mittwald.v1.mailmigration.AutoResponder

**Properties:**

- `active` **(erforderlich)**: boolean
- `expiresAt`:  (date-time)
- `message` **(erforderlich)**: string
- `startsAt`:  (date-time)

---

### de.mittwald.v1.mailmigration.CheckMigrationIsPossibleErrorActiveMailArchiveForAddress

**Properties:**

- `address` **(erforderlich)**: string

---

### de.mittwald.v1.mailmigration.CheckMigrationIsPossibleErrorAlreadyExistingMailAddress

**Properties:**

- `address` **(erforderlich)**: string

---

### de.mittwald.v1.mailmigration.CheckMigrationIsPossibleErrorAmbiguousMailAddressDelivery

**Properties:**

- `addresses` **(erforderlich)**: Array<string>
- `mailboxName` **(erforderlich)**: string

---

### de.mittwald.v1.mailmigration.CheckMigrationIsPossibleErrorAmbiguousMailboxDelivery

**Properties:**

- `address` **(erforderlich)**: string
- `mailboxes` **(erforderlich)**: Array<string>

---

### de.mittwald.v1.mailmigration.CheckMigrationIsPossibleErrorCatchAllMissingAddress

**Properties:**

- `address` **(erforderlich)**: string

---

### de.mittwald.v1.mailmigration.CheckMigrationIsPossibleErrorCatchAllTargetWithoutAlias

**Properties:**

- `address` **(erforderlich)**: string
- `mailboxName` **(erforderlich)**: string

---

### de.mittwald.v1.mailmigration.CheckMigrationIsPossibleErrorMissingVerifiedIngress

**Properties:**

- `hostname` **(erforderlich)**: string (idn-hostname)

---

### de.mittwald.v1.mailmigration.CheckMigrationIsPossibleErrorResponse

**Properties:**

- `errors`: `de.mittwald.v1.mailmigration.PossibleCheckErrors` (siehe Schema-Definition)

---

### de.mittwald.v1.mailmigration.MailSystemSettings

**Properties:**

- `imapClusterId` **(erforderlich)**: string
- `mailDirectory` **(erforderlich)**: string
- `rateLimitId` **(erforderlich)**: string

---

### de.mittwald.v1.mailmigration.Mailbox

**Properties:**

- `mailsystem` **(erforderlich)**: `de.mittwald.v1.mailmigration.MailSystemSettings` (siehe Schema-Definition)
- `name` **(erforderlich)**: string
- `quotaInBytes` **(erforderlich)**: integer (int64)
- `spamProtection`: `de.mittwald.v1.mailmigration.SpamProtection` (siehe Schema-Definition)

---

### de.mittwald.v1.mailmigration.MigrateMailAddressCommandRequirements

**Properties:**

- `address`: string
- `autoResponder`: `de.mittwald.v1.mailmigration.AutoResponder` (siehe Schema-Definition)
- `forwardAddresses`: Array<string>
- `isCatchAll`: boolean
- `mailbox`: `de.mittwald.v1.mailmigration.Mailbox` (siehe Schema-Definition)
- `projectId` **(erforderlich)**: string

---

### de.mittwald.v1.mailmigration.MigrateMailboxCommandRequirements

**Properties:**

- `mailbox`: `de.mittwald.v1.mailmigration.Mailbox` (siehe Schema-Definition)
- `projectId` **(erforderlich)**: string

---

### de.mittwald.v1.mailmigration.Migration

**Properties:**

- `aborted` **(erforderlich)**: boolean
- `addresses` **(erforderlich)**: Array<`de.mittwald.v1.mailmigration.MigrationMailAddress` (siehe Schema-Definition)>
- `finalizers` **(erforderlich)**: `de.mittwald.v1.mailmigration.MigrationFinalizeJob` (siehe Schema-Definition)
- `finished` **(erforderlich)**: boolean
- `id` **(erforderlich)**: string (uuid)
- `mailboxes` **(erforderlich)**: Array<`de.mittwald.v1.mailmigration.MigrationMailbox` (siehe Schema-Definition)>
- `sourceCoabProjectId` **(erforderlich)**: string
- `targetNexusProjectId` **(erforderlich)**: string

---

### de.mittwald.v1.mailmigration.MigrationFinalizeJob

**Properties:**

- `disableLegacyEntities`: `de.mittwald.v1.mailmigration.MigrationFinalizeJobDisableLegacyEntities` (siehe Schema-Definition)
- `projectSettingMigrations`: `de.mittwald.v1.mailmigration.MigrationFinalizeJobProjectSetting` (siehe Schema-Definition)

---

### de.mittwald.v1.mailmigration.MigrationFinalizeJobDisableLegacyEntities

**Properties:**

- `addresses` **(erforderlich)**: Array<string>
- `mailboxNames` **(erforderlich)**: Array<string>

---

### de.mittwald.v1.mailmigration.MigrationFinalizeJobProjectSetting

**Properties:**

- `blacklistEntries` **(erforderlich)**: Array<string>
- `whitelistEntries` **(erforderlich)**: Array<string>

---

### de.mittwald.v1.mailmigration.MigrationMailAddress

**Properties:**

- `address` **(erforderlich)**: string
- `finished` **(erforderlich)**: boolean
- `id` **(erforderlich)**: string (uuid)
- `migrationJobs` **(erforderlich)**: `de.mittwald.v1.mailmigration.MigrationMailAddressMigrationJob` (siehe Schema-Definition)
- `preMigrationJobs`: `de.mittwald.v1.mailmigration.MigrationMailAddressPreMigrationJob` (siehe Schema-Definition)

---

### de.mittwald.v1.mailmigration.MigrationMailAddressMigrationJob

**Properties:**

- `migrate` **(erforderlich)**: `de.mittwald.v1.mailmigration.MigrationMailAddressMigrationJobMigrate` (siehe Schema-Definition)

---

### de.mittwald.v1.mailmigration.MigrationMailAddressMigrationJobMigrate

**Properties:**

- `finished` **(erforderlich)**: boolean
- `requirements` **(erforderlich)**: `de.mittwald.v1.mailmigration.MigrateMailAddressCommandRequirements` (siehe Schema-Definition)

---

### de.mittwald.v1.mailmigration.MigrationMailAddressPreMigrationJob

**Properties:**

- `aliasSet` **(erforderlich)**: Array<`de.mittwald.v1.mailmigration.MigrationMailAddressPreMigrationJobAliasSet` (siehe Schema-Definition)>
- `deliveryMigrations` **(erforderlich)**: Array<`de.mittwald.v1.mailmigration.MigrationMailAddressPreMigrationJobDeliveryMigration` (siehe Schema-Definition)>

---

### de.mittwald.v1.mailmigration.MigrationMailAddressPreMigrationJobAliasSet

**Properties:**

- `finished` **(erforderlich)**: boolean
- `sourceCoabMailboxName` **(erforderlich)**: string

---

### de.mittwald.v1.mailmigration.MigrationMailAddressPreMigrationJobDeliveryMigration

**Properties:**

- `finished` **(erforderlich)**: boolean
- `sourceCoabDeliveryMailbox` **(erforderlich)**: string
- `sourceCoabDeliveryUid` **(erforderlich)**: integer
- `targetDeliveryAddress` **(erforderlich)**: string

---

### de.mittwald.v1.mailmigration.MigrationMailbox

**Properties:**

- `description`: string
- `finished` **(erforderlich)**: boolean
- `id` **(erforderlich)**: string (uuid)
- `migrationJobs` **(erforderlich)**: `de.mittwald.v1.mailmigration.MigrationMailboxJob` (siehe Schema-Definition)
- `name` **(erforderlich)**: string

---

### de.mittwald.v1.mailmigration.MigrationMailboxJob

**Properties:**

- `migrate` **(erforderlich)**: `de.mittwald.v1.mailmigration.MigrationMailboxJobMigrate` (siehe Schema-Definition)

---

### de.mittwald.v1.mailmigration.MigrationMailboxJobMigrate

**Properties:**

- `requirements` **(erforderlich)**: `de.mittwald.v1.mailmigration.MigrateMailboxCommandRequirements` (siehe Schema-Definition)

---

### de.mittwald.v1.mailmigration.PossibleCheckErrors

**Properties:**

- `activeMailArchiveForAddress` **(erforderlich)**: Array<`de.mittwald.v1.mailmigration.CheckMigrationIsPossibleErrorActiveMailArchiveForAddress` (siehe Schema-Definition)>
- `alreadyExistingMailAddress` **(erforderlich)**: Array<`de.mittwald.v1.mailmigration.CheckMigrationIsPossibleErrorAlreadyExistingMailAddress` (siehe Schema-Definition)>
- `ambiguousMailAddressDelivery` **(erforderlich)**: Array<`de.mittwald.v1.mailmigration.CheckMigrationIsPossibleErrorAmbiguousMailAddressDelivery` (siehe Schema-Definition)>
- `ambiguousMailboxDelivery` **(erforderlich)**: Array<`de.mittwald.v1.mailmigration.CheckMigrationIsPossibleErrorAmbiguousMailboxDelivery` (siehe Schema-Definition)>
- `catchAllMissingAddress` **(erforderlich)**: Array<`de.mittwald.v1.mailmigration.CheckMigrationIsPossibleErrorCatchAllMissingAddress` (siehe Schema-Definition)>
- `catchAllTargetWithoutAlias` **(erforderlich)**: Array<`de.mittwald.v1.mailmigration.CheckMigrationIsPossibleErrorCatchAllTargetWithoutAlias` (siehe Schema-Definition)>
- `missingVerifiedIngress` **(erforderlich)**: Array<`de.mittwald.v1.mailmigration.CheckMigrationIsPossibleErrorMissingVerifiedIngress` (siehe Schema-Definition)>

---

### de.mittwald.v1.mailmigration.SpamProtection

**Properties:**

- `active` **(erforderlich)**: boolean
- `deleteSensitivity`: integer
- `folder` **(erforderlich)**: integer - Enum: `0`, `1` (Standard: `0`)
  - SPAM_FOLDER_INBOX_UNSPECIFIED = 0 SPAM_FOLDER_SPAM = 1
- `keepDays` **(erforderlich)**: integer
- `relocateSensitivity`: integer

---

### de.mittwald.v1.marketplace.AggregateReference

**Properties:**

- `aggregate` **(erforderlich)**: string - Enum: `project`, `customer`
- `domain` **(erforderlich)**: string - Enum: `project`, `customer`
- `id` **(erforderlich)**: string

---

### de.mittwald.v1.marketplace.AggregateReferenceFilter

**Properties:**

- `aggregate`: string - Enum: `project`, `customer`
- `domain`: string - Enum: `project`, `customer`
- `id`: string

---

### de.mittwald.v1.marketplace.BackendComponent

**Properties:**

- `url` **(erforderlich)**: string

---

### de.mittwald.v1.marketplace.BackendComponents

**Properties:**

- `extensionAddedToContext`: `de.mittwald.v1.marketplace.BackendComponent` (siehe Schema-Definition)
- `extensionInstanceRemovedFromContext`: `de.mittwald.v1.marketplace.BackendComponent` (siehe Schema-Definition)
- `extensionInstanceSecretRotated`: `de.mittwald.v1.marketplace.BackendComponent` (siehe Schema-Definition)
- `extensionInstanceUpdated`: `de.mittwald.v1.marketplace.BackendComponent` (siehe Schema-Definition)

---

### de.mittwald.v1.marketplace.Context

**Mögliche Werte:**

- `project`
- `customer`

---

### de.mittwald.v1.marketplace.ContractOwner

**Properties:**

- `contact` **(erforderlich)**: `de.mittwald.v1.commons.Contact` (siehe Schema-Definition)
- `inherited` **(erforderlich)**: boolean

---

### de.mittwald.v1.marketplace.ContractPartner

**Properties:**

- `contractPartner` **(erforderlich)**: 
- `createdAt` **(erforderlich)**: string (date-time)
- `extensionId` **(erforderlich)**: string (uuid)
- `extensionInstanceId` **(erforderlich)**: string (uuid)
- `parentCustomerId` **(erforderlich)**: string

---

### de.mittwald.v1.marketplace.Contributor

**Properties:**

- `customerId` **(erforderlich)**: string (uuid)
- `description`: string
- `descriptions`: `de.mittwald.v1.marketplace.LocalizedDescription` (siehe Schema-Definition)
- `email` **(erforderlich)**: string
- `homepage`: string (uri)
- `id` **(erforderlich)**: string (uuid)
- `imprint`: `de.mittwald.v1.marketplace.ContributorImprint` (siehe Schema-Definition)
- `logoRefId`: string (uuid)
- `name` **(erforderlich)**: string
- `phone`: string
- `state` **(erforderlich)**: `de.mittwald.v1.marketplace.ContributorState` (siehe Schema-Definition)
- `supportInformation` **(erforderlich)**: 
- `url`: string

---

### de.mittwald.v1.marketplace.ContributorImprint

---

### de.mittwald.v1.marketplace.ContributorState

**Mögliche Werte:**

- `enabled`
- `disabled`

---

### de.mittwald.v1.marketplace.DescriptionFormats

Language specific descriptions in various formats.

**Properties:**

- `markdown` **(erforderlich)**: string
- `plain`: string

---

### de.mittwald.v1.marketplace.DetailedDescriptions

A detailed description of the capabilities of the extension.

**Properties:**

- `de` **(erforderlich)**: `de.mittwald.v1.marketplace.DescriptionFormats` (siehe Schema-Definition)
- `en`: `de.mittwald.v1.marketplace.DescriptionFormats` (siehe Schema-Definition)

---

### de.mittwald.v1.marketplace.Extension

**Properties:**

- `assets` **(erforderlich)**: Array<`de.mittwald.v1.marketplace.ExtensionAsset` (siehe Schema-Definition)>
  - The assets/media (images and videos) of the extension.
- `blocked` **(erforderlich)**: boolean
- `context` **(erforderlich)**: `de.mittwald.v1.marketplace.Context` (siehe Schema-Definition)
- `contributorId` **(erforderlich)**: string (uuid)
- `createdAt` **(erforderlich)**: string (date-time)
- `deprecation`: `de.mittwald.v1.marketplace.ExtensionDeprecation` (siehe Schema-Definition)
- `description` **(erforderlich)**: string
  - A short description of the capabilites of the Extension.
- `detailedDescriptions`: `de.mittwald.v1.marketplace.DetailedDescriptions` (siehe Schema-Definition)
- `disabled` **(erforderlich)**: boolean
- `externalFrontends`: Array<`de.mittwald.v1.marketplace.ExternalComponent` (siehe Schema-Definition)>
- `frontendComponents`: Array<`de.mittwald.v1.marketplace.ExternalComponent` (siehe Schema-Definition)>
- `frontendFragments`: Object
- `id` **(erforderlich)**: string (uuid)
- `logoRefId` **(erforderlich)**: string (uuid)
  - This is the FileId of the Logo. Retrieve the file with this id on `/v2/files/{logoRefId}`.
- `name` **(erforderlich)**: string
- `pricing`: 
- `pricingDetails`: `de.mittwald.v1.marketplace.PricePlanDetails` (siehe Schema-Definition)
- `published` **(erforderlich)**: boolean - Enum: `True`
  - Whether the extension has been published by the contributor.
- `scopes` **(erforderlich)**: Array<string>
- `state` **(erforderlich)**: string - Enum: `enabled`, `blocked`, `disabled`
  - deprecated
- `statistics` **(erforderlich)**: `de.mittwald.v1.marketplace.ExtensionStatistics` (siehe Schema-Definition)
- `subTitle` **(erforderlich)**: `de.mittwald.v1.marketplace.SubTitle` (siehe Schema-Definition)
- `support` **(erforderlich)**: 
- `tags` **(erforderlich)**: Array<string>

---

### de.mittwald.v1.marketplace.ExtensionAsset

The following assets are the media that are associated with the extension and will be shown in extension details page.

**Properties:**

- `assetType` **(erforderlich)**: string - Enum: `image`, `video`
- `fileName`: string
- `id` **(erforderlich)**: string (uuid)
  - The asset ID and reference ID to its file. Retrieve the file with this id on `/v2/files/{id}
- `index` **(erforderlich)**: integer
  - The index of the asset. Does not have to be successive. Can be used to order the assets.

---

### de.mittwald.v1.marketplace.ExtensionDeprecation

The Extension is deprecated by the contributor and will expire at the given date.

**Properties:**

- `deprecatedAt` **(erforderlich)**: string (date-time)
- `note`: string
- `successorId`: string (uuid)
  - The ID of the successor extension.

---

### de.mittwald.v1.marketplace.ExtensionHealth

**Properties:**

- `extensionInstances` **(erforderlich)**: Array<`de.mittwald.v1.marketplace.ExtensionInstanceHealth` (siehe Schema-Definition)>
- `functional` **(erforderlich)**: boolean (Standard: `False`)
- `id` **(erforderlich)**: string (uuid)
- `inoperableReason`: string
- `published` **(erforderlich)**: boolean (Standard: `False`)
- `withdrawalReason`: string

---

### de.mittwald.v1.marketplace.ExtensionInstance

**Properties:**

- `aggregateReference` **(erforderlich)**: Object
- `chargeability` **(erforderlich)**: `de.mittwald.v1.marketplace.ExtensionInstanceChargeability` (siehe Schema-Definition)
- `consentedScopes` **(erforderlich)**: Array<string>
- `contributorId` **(erforderlich)**: string
- `contributorName` **(erforderlich)**: string
- `createdAt`: string (date-time)
- `disabled` **(erforderlich)**: boolean (Standard: `False`)
- `extensionId` **(erforderlich)**: string (uuid)
- `extensionName` **(erforderlich)**: string
- `extensionSubTitle`: `de.mittwald.v1.marketplace.SubTitle` (siehe Schema-Definition)
- `frontendFragments`: Object
- `id` **(erforderlich)**: string (uuid)
- `pendingInstallation` **(erforderlich)**: boolean (Standard: `False`)
- `pendingRemoval` **(erforderlich)**: boolean (Standard: `False`)
- `variantKey`: string

---

### de.mittwald.v1.marketplace.ExtensionInstanceChargeability

**Properties:**

- `isChargeable` **(erforderlich)**: boolean (Standard: `False`)
- `reasons` **(erforderlich)**: Object

---

### de.mittwald.v1.marketplace.ExtensionInstanceHealth

**Properties:**

- `aggregateReference` **(erforderlich)**: Object
- `id` **(erforderlich)**: string (uuid)
- `instantiationIsPending` **(erforderlich)**: boolean (Standard: `False`)
- `pendingWebhooksCount` **(erforderlich)**: integer (Standard: `0`)
- `removalIsPending` **(erforderlich)**: boolean (Standard: `False`)
- `webhooksAreHalted` **(erforderlich)**: boolean (Standard: `False`)

---

### de.mittwald.v1.marketplace.ExtensionSecret

**Properties:**

- `secretId` **(erforderlich)**: string (uuid)
- `usableUntil`: string (date-time)

---

### de.mittwald.v1.marketplace.ExtensionStatistics

**Properties:**

- `amountOfInstances`: integer
  - The amout of instances for this extension. Accurate for the Contributor. Publicly rounded to the next lower hundred.

---

### de.mittwald.v1.marketplace.ExternalComponent

**Properties:**

- `name` **(erforderlich)**: string
- `url` **(erforderlich)**: string

---

### de.mittwald.v1.marketplace.FrontendFragment

---

### de.mittwald.v1.marketplace.LocalizedDescription

A few words about the introduction as a contributor

**Properties:**

- `de` **(erforderlich)**: string
- `en`: string

---

### de.mittwald.v1.marketplace.MonthlyPricePlanStrategy

A price plan with (multiple) variants, including different prices for different included service descriptions

---

### de.mittwald.v1.marketplace.OwnContributor

**Properties:**

- `contactPersonUserId` **(erforderlich)**: string (uuid)
- `contractOwner` **(erforderlich)**: `de.mittwald.v1.marketplace.ContractOwner` (siehe Schema-Definition)
- `contributorNumber` **(erforderlich)**: string
- `customerId` **(erforderlich)**: string
- `description`: string
- `descriptions`: `de.mittwald.v1.marketplace.LocalizedDescription` (siehe Schema-Definition)
- `email` **(erforderlich)**: string (email)
- `homepage`: string (uri)
- `id` **(erforderlich)**: string
- `imprint`: `de.mittwald.v1.marketplace.ContributorImprint` (siehe Schema-Definition)
- `logoInherited`: boolean
- `logoRefId`: string (uuid)
- `name` **(erforderlich)**: string
- `nameInherited` **(erforderlich)**: boolean
- `phone`: string
- `state` **(erforderlich)**: `de.mittwald.v1.marketplace.ContributorState` (siehe Schema-Definition)
- `supportInformation` **(erforderlich)**: 
- `url`: string
- `verificationRequested` **(erforderlich)**: boolean
- `verified` **(erforderlich)**: boolean

---

### de.mittwald.v1.marketplace.OwnExtension

**Properties:**

- `assets` **(erforderlich)**: Array<`de.mittwald.v1.marketplace.ExtensionAsset` (siehe Schema-Definition)>
- `backendComponents`: `de.mittwald.v1.marketplace.BackendComponents` (siehe Schema-Definition)
- `blocked`: boolean
- `context`: `de.mittwald.v1.marketplace.Context` (siehe Schema-Definition)
- `contributorId` **(erforderlich)**: string
- `deprecation`: `de.mittwald.v1.marketplace.ExtensionDeprecation` (siehe Schema-Definition)
- `description`: string
- `detailedDescriptions`: `de.mittwald.v1.marketplace.DetailedDescriptions` (siehe Schema-Definition)
- `disabled`: boolean
- `externalFrontends`: Array<`de.mittwald.v1.marketplace.ExternalComponent` (siehe Schema-Definition)>
- `frontendComponents`: Array<`de.mittwald.v1.marketplace.ExternalComponent` (siehe Schema-Definition)>
- `frontendFragments`: Object
- `functional` **(erforderlich)**: boolean
- `id` **(erforderlich)**: string (uuid)
- `logoRefId`: string (uuid)
  - This is the FileId of the Logo. Retrieve the file with this id on `/v2/files/{logoRefId}`.
- `name` **(erforderlich)**: string
- `pricing`: 
- `pricingDetails`: `de.mittwald.v1.marketplace.PricePlanDetails` (siehe Schema-Definition)
- `published` **(erforderlich)**: boolean
- `requestedChanges`: Object
- `scopes`: Array<string>
- `secrets` **(erforderlich)**: Array<`de.mittwald.v1.marketplace.ExtensionSecret` (siehe Schema-Definition)>
- `state`: string - Enum: `enabled`, `blocked`, `disabled`
  - deprecated
- `statistics` **(erforderlich)**: `de.mittwald.v1.marketplace.ExtensionStatistics` (siehe Schema-Definition)
- `subTitle`: `de.mittwald.v1.marketplace.SubTitle` (siehe Schema-Definition)
- `support`: 
- `tags`: Array<string>
- `verificationRequested` **(erforderlich)**: boolean
- `verified` **(erforderlich)**: boolean
- `webhookUrls`: `de.mittwald.v1.marketplace.WebhookUrls` (siehe Schema-Definition)

---

### de.mittwald.v1.marketplace.PricePlanDetails

The details section of the price plan. It informs if choosing different variants as a upgrade or downgrade is possible.

**Properties:**

- `isDowngradeAllowed` **(erforderlich)**: boolean
- `isUpgradeAllowed` **(erforderlich)**: boolean

---

### de.mittwald.v1.marketplace.PublicKey

**Properties:**

- `algorithm` **(erforderlich)**: string
- `key` **(erforderlich)**: 
- `serial` **(erforderlich)**: string (uuid)

---

### de.mittwald.v1.marketplace.SubTitle

A few words to promote your Extension.

**Properties:**

- `de` **(erforderlich)**: string
- `en`: string

---

### de.mittwald.v1.marketplace.SupportMeta

**Properties:**

- `email` **(erforderlich)**: string (email)
- `phone`: string

---

### de.mittwald.v1.marketplace.UnpublishedExtension

**Properties:**

- `assets` **(erforderlich)**: Array<`de.mittwald.v1.marketplace.ExtensionAsset` (siehe Schema-Definition)>
  - The assets/media (images and videos) of the extension.
- `blocked` **(erforderlich)**: boolean
- `context` **(erforderlich)**: `de.mittwald.v1.marketplace.Context` (siehe Schema-Definition)
- `contributorId` **(erforderlich)**: string (uuid)
- `deprecation`: `de.mittwald.v1.marketplace.ExtensionDeprecation` (siehe Schema-Definition)
- `description`: string
  - A short description of the capabilites of the Extension.
- `detailedDescriptions`: `de.mittwald.v1.marketplace.DetailedDescriptions` (siehe Schema-Definition)
- `disabled` **(erforderlich)**: boolean
- `externalFrontends`: Array<`de.mittwald.v1.marketplace.ExternalComponent` (siehe Schema-Definition)>
- `frontendComponents`: Array<`de.mittwald.v1.marketplace.ExternalComponent` (siehe Schema-Definition)>
- `frontendFragments`: Object
- `id` **(erforderlich)**: string (uuid)
- `logoRefId`: string (uuid)
  - This is the FileId of the Logo. Retrieve the file with this id on `/v2/files/{logoRefId}`.
- `name` **(erforderlich)**: string
- `pricing`: 
- `pricingDetails`: `de.mittwald.v1.marketplace.PricePlanDetails` (siehe Schema-Definition)
- `published`: boolean - Enum: `False`
  - Whether the extension has been published by the contributor.
- `scopes` **(erforderlich)**: Array<string>
- `state` **(erforderlich)**: string - Enum: `enabled`, `blocked`, `disabled`
  - deprecated
- `statistics` **(erforderlich)**: `de.mittwald.v1.marketplace.ExtensionStatistics` (siehe Schema-Definition)
- `subTitle`: `de.mittwald.v1.marketplace.SubTitle` (siehe Schema-Definition)
- `support`: 
- `tags` **(erforderlich)**: Array<string>

---

### de.mittwald.v1.marketplace.UrlFrontendFragment

**Properties:**

- `url` **(erforderlich)**: string

---

### de.mittwald.v1.marketplace.WebhookKind

**Mögliche Werte:**

- `extension-added-to-context`
- `extension-instance-updated`
- `extension-instance-secret-rotated`
- `extension-instance-removed-from-context`

---

### de.mittwald.v1.marketplace.WebhookUrl

**Properties:**

- `url` **(erforderlich)**: string

---

### de.mittwald.v1.marketplace.WebhookUrls

**Properties:**

- `extensionAddedToContext` **(erforderlich)**: `de.mittwald.v1.marketplace.WebhookUrl` (siehe Schema-Definition)
- `extensionInstanceRemovedFromContext` **(erforderlich)**: `de.mittwald.v1.marketplace.WebhookUrl` (siehe Schema-Definition)
- `extensionInstanceSecretRotated` **(erforderlich)**: `de.mittwald.v1.marketplace.WebhookUrl` (siehe Schema-Definition)
- `extensionInstanceUpdated` **(erforderlich)**: `de.mittwald.v1.marketplace.WebhookUrl` (siehe Schema-Definition)

---

### de.mittwald.v1.membership.CustomerInheritedRoles

**Mögliche Werte:**

- `notset`
- `owner`
- `member`
- `accountant`

---

### de.mittwald.v1.membership.CustomerInvite

**Properties:**

- `avatarRefId`: string (uuid)
  - Reference to the Project's avatar.
- `customerId` **(erforderlich)**: string (uuid)
  - ID of the Customer the invite is for.
- `customerName` **(erforderlich)**: string
  - Name of the Customer the user is invited to.
- `id` **(erforderlich)**: string (uuid)
  - ID of the CustomerInvite.
- `information` **(erforderlich)**: `de.mittwald.v1.membership.InviteInformation` (siehe Schema-Definition)
- `mailAddress` **(erforderlich)**: string (email)
  - Mail-address of the user the invite is for.
- `membershipExpiresAt`: string (date-time)
  - Time the CustomerMembership should expire at.
- `message`: string
  - Message contained in the CustomerInvite.
- `role` **(erforderlich)**: `de.mittwald.v1.membership.CustomerRoles` (siehe Schema-Definition)

---

### de.mittwald.v1.membership.CustomerMembership

**Properties:**

- `avatarRef`: string (uuid)
  - Avatar file reference id of the user.
- `customerId` **(erforderlich)**: string (uuid)
  - ID of the Customer the CustomerMembership is for.
- `email` **(erforderlich)**: string (email)
  - Email used by the invited user.
- `expiresAt`: string (date-time)
  - Time the CustomerMembership should expire at.
- `firstName` **(erforderlich)**: string
  - First name of the user.
- `id` **(erforderlich)**: string (uuid)
  - ID of the CustomerMembership.
- `inviteId`: string (uuid)
  - ID of the CustomerInvite the membership was created from.
- `lastName` **(erforderlich)**: string
  - Last name of the user.
- `memberSince`: string (date-time)
  - Date the CustomerMembership was created at.
- `mfa` **(erforderlich)**: boolean
  - MFA activated by the user.
- `role` **(erforderlich)**: `de.mittwald.v1.membership.CustomerRoles` (siehe Schema-Definition)
- `userId` **(erforderlich)**: string (uuid)
  - ID of the user the CustomerMembership is for.

---

### de.mittwald.v1.membership.CustomerRoles

**Mögliche Werte:**

- `notset`
- `owner`
- `member`
- `accountant`

---

### de.mittwald.v1.membership.InviteInformation

**Properties:**

- `invitationToken`: string
  - Token for authentication purposes.
- `invitedBy` **(erforderlich)**: string (uuid)
  - ID of the user that created the invite.
- `userId`: string (uuid)
  - ID of the user this invite is for.

---

### de.mittwald.v1.membership.ProjectInvite

**Properties:**

- `avatarRefId`: string (uuid)
  - Reference to the Project's avatar.
- `id` **(erforderlich)**: string (uuid)
  - ID of the ProjectInvite.
- `information` **(erforderlich)**: `de.mittwald.v1.membership.InviteInformation` (siehe Schema-Definition)
- `mailAddress` **(erforderlich)**: string (email)
  - Mail-address of the user the ProjectInvite is for.
- `membershipExpiresAt`: string (date-time)
  - Time the ProjectMembership should expire at.
- `message`: string
  - Message contained in the ProjectInvite.
- `projectDescription` **(erforderlich)**: string
  - Description of the Project the invite is created for.
- `projectId` **(erforderlich)**: string (uuid)
  - ID of the Project the invitation is for.
- `role` **(erforderlich)**: `de.mittwald.v1.membership.ProjectRoles` (siehe Schema-Definition)

---

### de.mittwald.v1.membership.ProjectMembership

**Properties:**

- `avatarRef`: string (uuid)
  - Avatar file reference id of the user.
- `email` **(erforderlich)**: string (email)
  - Email used by the invited user.
- `expiresAt`: string (date-time)
  - Time the ProjectMembership should expire at.
- `firstName` **(erforderlich)**: string
  - First name of the user.
- `id` **(erforderlich)**: string (uuid)
  - ID of the ProjectMembership.
- `inherited` **(erforderlich)**: boolean
  - Whether the ProjectMembership was inherited from a CustomerMembership.
- `inviteId`: string (uuid)
  - ID of the ProjectInvite the membership was created from.
- `lastName` **(erforderlich)**: string
  - Last name of the user.
- `memberSince`: string (date-time)
  - Date the projectMembership was created at.
- `mfa` **(erforderlich)**: boolean
  - MFA activated by the user.
- `projectId` **(erforderlich)**: string (uuid)
  - ID of the Project the membership is for.
- `role` **(erforderlich)**: `de.mittwald.v1.membership.ProjectRoles` (siehe Schema-Definition)
- `userId` **(erforderlich)**: string (uuid)
  - ID of the user the ProjectMembership is for.

---

### de.mittwald.v1.membership.ProjectRoles

**Mögliche Werte:**

- `notset`
- `owner`
- `emailadmin`
- `external`

---

### de.mittwald.v1.messaging.AggregateReference

**Properties:**

- `aggregate` **(erforderlich)**: string
- `domain` **(erforderlich)**: string
- `id` **(erforderlich)**: string
- `parents`: Array<Object>

---

### de.mittwald.v1.messaging.Notification

**Properties:**

- `createdAt` **(erforderlich)**: string (date-time)
- `id` **(erforderlich)**: string (uuid)
- `read` **(erforderlich)**: boolean
- `reference` **(erforderlich)**: `de.mittwald.v1.messaging.AggregateReference` (siehe Schema-Definition)
- `severity` **(erforderlich)**: string - Enum: `success`, `info`, `warning`, `error`
- `type` **(erforderlich)**: string

---

### de.mittwald.v1.messaging.NotificationStatus

**Mögliche Werte:**

- `read`

---

### de.mittwald.v1.order.Addons

**Properties:**

- `hidden`: boolean
- `key` **(erforderlich)**: string
- `value` **(erforderlich)**: string

---

### de.mittwald.v1.order.ArticleAddons

**Properties:**

- `hidden`: boolean
- `key` **(erforderlich)**: string
- `type`: string
- `value` **(erforderlich)**: string
- `valueMergeType`: string - Enum: `add`, `set`

---

### de.mittwald.v1.order.AttributeConfiguration

**Properties:**

- `key` **(erforderlich)**: string
- `value`: string

---

### de.mittwald.v1.order.CustomerOrder

**Properties:**

- `contractChangeContractId`: string (uuid)
- `customerId` **(erforderlich)**: string
- `dueDate`: string (date-time)
- `invoicingPeriod` **(erforderlich)**: number
  - Invoicing period in months
- `items` **(erforderlich)**: Array<`de.mittwald.v1.order.OrderItem` (siehe Schema-Definition)>
- `orderDate`: string (date-time)
- `orderId` **(erforderlich)**: string (uuid)
- `orderNumber` **(erforderlich)**: string
- `profile`: `de.mittwald.v1.order.Profile` (siehe Schema-Definition)
- `status` **(erforderlich)**: `de.mittwald.v1.order.OrderStatus` (siehe Schema-Definition)
- `summary` **(erforderlich)**: `de.mittwald.v1.order.OrderSummary` (siehe Schema-Definition)
- `type` **(erforderlich)**: `de.mittwald.v1.order.OrderType` (siehe Schema-Definition)

---

### de.mittwald.v1.order.DomainHandleField

**Properties:**

- `name` **(erforderlich)**: string
- `value` **(erforderlich)**: string

---

### de.mittwald.v1.order.DomainOrder

**Properties:**

- `authCode`: string
- `domain` **(erforderlich)**: string
- `handleData` **(erforderlich)**: Object
- `projectId` **(erforderlich)**: string (uuid)

---

### de.mittwald.v1.order.DomainOrderPreview

**Properties:**

- `authCode`: string
- `domain` **(erforderlich)**: string
- `projectId` **(erforderlich)**: string (uuid)

---

### de.mittwald.v1.order.DomainOrderPreviewResponse

**Properties:**

- `domainContractDuration` **(erforderlich)**: number
  - Contract duration in months.
- `domainPrice` **(erforderlich)**: number
- `feePrice` **(erforderlich)**: number
- `totalPrice` **(erforderlich)**: number

---

### de.mittwald.v1.order.ExternalCertificateOrder

You are able to order an External Certificate if you already created a Certificate Request.

**Properties:**

- `certificateRequestId` **(erforderlich)**: string (uuid)
- `projectId` **(erforderlich)**: string (uuid)

---

### de.mittwald.v1.order.ExternalCertificateOrderPreview

**Properties:**

- `certificateRequestId` **(erforderlich)**: string (uuid)
- `projectId` **(erforderlich)**: string (uuid)

---

### de.mittwald.v1.order.ExternalCertificateOrderPreviewResponse

**Properties:**

- `feePrice` **(erforderlich)**: number
- `recurringPrice` **(erforderlich)**: number
- `totalPrice` **(erforderlich)**: number

---

### de.mittwald.v1.order.HardwareSpec

**Properties:**

- `ram`: number
- `vcpu`: number

---

### de.mittwald.v1.order.HostingOrderPreviewResponse

**Properties:**

- `machineTypePrice` **(erforderlich)**: number
- `possibleFreeTrialDays`: number
- `storagePrice` **(erforderlich)**: number
- `totalPrice` **(erforderlich)**: number

---

### de.mittwald.v1.order.LeadFyndrOrder

**Properties:**

- `customerId` **(erforderlich)**: string
- `reservationLimit` **(erforderlich)**: integer
- `unlockLimit` **(erforderlich)**: integer

---

### de.mittwald.v1.order.LeadFyndrOrderPreview

**Properties:**

- `reservationLimit` **(erforderlich)**: integer
- `unlockLimit` **(erforderlich)**: integer

---

### de.mittwald.v1.order.LeadFyndrOrderPreviewResponse

**Properties:**

- `totalPrice` **(erforderlich)**: number

---

### de.mittwald.v1.order.LeadFyndrTariffChange

**Properties:**

- `contractId` **(erforderlich)**: string
- `reservationLimit` **(erforderlich)**: integer
- `unlockLimit` **(erforderlich)**: integer

---

### de.mittwald.v1.order.MachineTypeSpec

**Properties:**

- `machineType`: string

---

### de.mittwald.v1.order.MailArchiveOrder

**Properties:**

- `mailAddressId` **(erforderlich)**: string (uuid)
- `syncExistingMails`: boolean

---

### de.mittwald.v1.order.MailArchiveOrderPreview

**Properties:**

- `mailAddressId` **(erforderlich)**: string (uuid)
- `syncExistingMails`: boolean

---

### de.mittwald.v1.order.MailArchiveOrderPreviewResponse

**Properties:**

- `feePrice` **(erforderlich)**: number
- `recurringPrice` **(erforderlich)**: number
- `totalPrice` **(erforderlich)**: number

---

### de.mittwald.v1.order.OrderItem

**Properties:**

- `addons`: Array<`de.mittwald.v1.order.Addons` (siehe Schema-Definition)>
- `articleId` **(erforderlich)**: string
- `articleName`: string
- `articleTemplateName`: string
- `attributeConfiguration`: Array<`de.mittwald.v1.order.AttributeConfiguration` (siehe Schema-Definition)>
- `isInclusive` **(erforderlich)**: boolean
- `orderItemId` **(erforderlich)**: string (uuid)
- `predefinedDomainAggregateId`: string
- `price` **(erforderlich)**: number
- `reference`: `de.mittwald.v1.order.Reference` (siehe Schema-Definition)

---

### de.mittwald.v1.order.OrderStatus

**Mögliche Werte:**

- `NEW`
- `CONFIRMED`
- `REJECTED`
- `ABORTED`
- `EXECUTED`

---

### de.mittwald.v1.order.OrderSummary

**Properties:**

- `nonRecurring` **(erforderlich)**: number
- `recurring` **(erforderlich)**: number
- `summary` **(erforderlich)**: number
  - The total price of the order

---

### de.mittwald.v1.order.OrderType

**Mögliche Werte:**

- `NEW_ORDER`
- `CONTRACT_CHANGE`

---

### de.mittwald.v1.order.Profile

**Properties:**

- `email` **(erforderlich)**: string (email)
- `firstName`: string
- `lastName`: string
- `title`: string - Enum: `other`, `mr`, `ms`
  - the users title
- `userId` **(erforderlich)**: string (uuid)

---

### de.mittwald.v1.order.ProjectHostingOrder

**Properties:**

- `customerId` **(erforderlich)**: string
- `description` **(erforderlich)**: string
- `diskspaceInGiB` **(erforderlich)**: number
- `promotionCode`: string
- `recommendationCode`: string
- `spec` **(erforderlich)**: 
- `useFreeTrial`: boolean

---

### de.mittwald.v1.order.ProjectHostingOrderPreview

**Properties:**

- `customerId`: string
- `description`: string
- `diskspaceInGiB` **(erforderlich)**: number
- `promotionCode`: string
- `spec` **(erforderlich)**: 

---

### de.mittwald.v1.order.ProjectHostingTariffChange

**Properties:**

- `contractId` **(erforderlich)**: string
- `diskspaceInGiB` **(erforderlich)**: number
- `spec` **(erforderlich)**: 

---

### de.mittwald.v1.order.Reference

**Properties:**

- `contractItemId`: string (uuid)
- `offerItemId`: string (uuid)
- `orderItemId`: string (uuid)

---

### de.mittwald.v1.order.ServerOrder

**Properties:**

- `customerId` **(erforderlich)**: string
- `description` **(erforderlich)**: string
- `diskspaceInGiB` **(erforderlich)**: number
- `machineType` **(erforderlich)**: string
- `promotionCode`: string
- `recommendationCode`: string
- `useFreeTrial`: boolean

---

### de.mittwald.v1.order.ServerOrderPreview

**Properties:**

- `customerId`: string
- `description`: string
- `diskspaceInGiB` **(erforderlich)**: number
- `machineType` **(erforderlich)**: string
- `promotionCode`: string

---

### de.mittwald.v1.order.ServerTariffChange

**Properties:**

- `contractId` **(erforderlich)**: string (uuid)
- `diskspaceInGiB` **(erforderlich)**: number
- `machineType` **(erforderlich)**: string

---

### de.mittwald.v1.policy.Policy

---

### de.mittwald.v1.poll.UserPollSettings

**Properties:**

- `completedAt`: string (date-time)
- `dontShowUntil`: string (date-time)
- `ignoredAt`: string (date-time)
- `shouldShow` **(erforderlich)**: boolean
- `status` **(erforderlich)**: string - Enum: `completed`, `muted`, `ignored`, `new`
- `userId` **(erforderlich)**: string

---

### de.mittwald.v1.project.AvatarRules

**Properties:**

- `maxSizeInKB` **(erforderlich)**: integer (int64)
- `mimeTypes` **(erforderlich)**: Array<string>
- `properties`: Object

---

### de.mittwald.v1.project.DeprecatedProjectReadinessStatus

deprecated by property status

**Mögliche Werte:**

- `creating`
- `ready`
- `unready`

---

### de.mittwald.v1.project.DeprecatedServerReadinessStatus

deprecated by property status

**Mögliche Werte:**

- `creating`
- `ready`
- `unready`

---

### de.mittwald.v1.project.DisableReason

**Mögliche Werte:**

- `maliciousCode`
- `illegalContent`
- `maliciousConduct`
- `suspended`

---

### de.mittwald.v1.project.FilesystemDirectoryListing

**Properties:**

- `absolutePath` **(erforderlich)**: string
- `isDirectory`: boolean
- `isExecutable`: boolean
- `isFile`: boolean
- `isSymlink`: boolean
- `items`: Array<`de.mittwald.v1.project.FilesystemDirectoryListing` (siehe Schema-Definition)>
- `name` **(erforderlich)**: string
- `size` **(erforderlich)**: integer (int64)
- `target`: string

---

### de.mittwald.v1.project.FilesystemUsagesDisk

**Properties:**

- `path`: string
- `totalBytes`: integer (int64)
- `usedBytes`: integer (int64)

---

### de.mittwald.v1.project.FsApiJwt

**Properties:**

- `jwt` **(erforderlich)**: string

---

### de.mittwald.v1.project.HardwareSpec

**Properties:**

- `cpu`: string
- `mem`: string
  - deprecated by memory
- `memory`: string
- `storage` **(erforderlich)**: string

---

### de.mittwald.v1.project.MachineType

**Properties:**

- `cpu` **(erforderlich)**: string
- `memory` **(erforderlich)**: string
- `name` **(erforderlich)**: string

---

### de.mittwald.v1.project.Project

**Properties:**

- `backupStorageUsageInBytes` **(erforderlich)**: integer (int64)
- `backupStorageUsageInBytesSetAt` **(erforderlich)**: string (date-time)
- `clusterDomain`: string (hostname)
- `clusterID`: string
  - deprecated by property clusterId
- `clusterId`: string
- `createdAt` **(erforderlich)**: string (date-time)
- `customerId` **(erforderlich)**: string
- `deletionRequested`: boolean
- `description` **(erforderlich)**: string
- `directories` **(erforderlich)**: Object
- `disableReason`: `de.mittwald.v1.project.DisableReason` (siehe Schema-Definition)
- `disabledAt`: string (date-time)
- `enabled` **(erforderlich)**: boolean
- `features`: Array<`de.mittwald.v1.project.ProjectFeature` (siehe Schema-Definition)>
  - Deprecated by 'supportedFeatures'.
- `id` **(erforderlich)**: string (uuid)
- `imageRefId`: string (uuid)
- `isReady` **(erforderlich)**: boolean
  - deprecated by property status
- `projectHostingId`: string (uuid)
- `readiness` **(erforderlich)**: `de.mittwald.v1.project.DeprecatedProjectReadinessStatus` (siehe Schema-Definition)
- `serverId`: string (uuid)
- `serverShortId`: string
- `shortId` **(erforderlich)**: string
- `spec`: 
- `statisticsBaseDomain`: string (hostname)
- `status` **(erforderlich)**: `de.mittwald.v1.project.ProjectStatus` (siehe Schema-Definition)
- `statusSetAt` **(erforderlich)**: string (date-time)
- `supportedFeatures` **(erforderlich)**: Array<`de.mittwald.v1.project.ProjectFeature` (siehe Schema-Definition)>
- `webStorageUsageInBytes` **(erforderlich)**: integer (int64)
- `webStorageUsageInBytesSetAt` **(erforderlich)**: string (date-time)

---

### de.mittwald.v1.project.ProjectFeature

**Mögliche Werte:**

- `redis`
- `node`
- `container`

---

### de.mittwald.v1.project.ProjectStatus

**Mögliche Werte:**

- `pending`
- `ready`
- `preparingForVolumeMigration`
- `migratingVolume`
- `error`
- `disabled`

---

### de.mittwald.v1.project.Server

**Properties:**

- `clusterName` **(erforderlich)**: string
- `createdAt` **(erforderlich)**: string (date-time)
- `customerId` **(erforderlich)**: string
- `description` **(erforderlich)**: string
- `disabledReason`: `de.mittwald.v1.project.ServerDisableReason` (siehe Schema-Definition)
- `id` **(erforderlich)**: string (uuid)
- `imageRefId`: string (uuid)
- `isReady` **(erforderlich)**: boolean
  - deprecated by property status
- `machineType` **(erforderlich)**: `de.mittwald.v1.project.MachineType` (siehe Schema-Definition)
- `readiness` **(erforderlich)**: `de.mittwald.v1.project.DeprecatedServerReadinessStatus` (siehe Schema-Definition)
- `shortId` **(erforderlich)**: string
- `statisticsBaseDomain`: string (hostname)
- `status` **(erforderlich)**: `de.mittwald.v1.project.ServerStatus` (siehe Schema-Definition)
- `storage` **(erforderlich)**: string

---

### de.mittwald.v1.project.ServerDisableReason

**Mögliche Werte:**

- `suspended`

---

### de.mittwald.v1.project.ServerStatus

**Mögliche Werte:**

- `pending`
- `ready`
- `unready`
- `suspended`

---

### de.mittwald.v1.project.VisitorSpec

**Properties:**

- `storage` **(erforderlich)**: string
- `visitors` **(erforderlich)**: integer (int64)

---

### de.mittwald.v1.screenshot.LifecycleState

---

### de.mittwald.v1.screenshot.ScreenshotSettings

**Properties:**

- `dataType` **(erforderlich)**: string - Enum: `jpeg`, `png`, `webp`
- `delay` **(erforderlich)**: integer (int64)
- `height` **(erforderlich)**: integer (int64)
- `quality` **(erforderlich)**: integer
- `width` **(erforderlich)**: integer (int64)

---

### de.mittwald.v1.screenshot.Target

**Properties:**

- `domain` **(erforderlich)**: string
- `path`: string
- `scheme` **(erforderlich)**: string - Enum: `http`, `https`

---

### de.mittwald.v1.screenshot.Task

**Properties:**

- `executedAt`: string (date-time)
- `fileReference`: string
- `id` **(erforderlich)**: string (uuid)
- `priority` **(erforderlich)**: integer
- `settings` **(erforderlich)**: `de.mittwald.v1.screenshot.ScreenshotSettings` (siehe Schema-Definition)
- `target` **(erforderlich)**: `de.mittwald.v1.screenshot.Target` (siehe Schema-Definition)
- `taskState`: 

---

### de.mittwald.v1.signup.Account

**Properties:**

- `email`: string (email)
- `mfaDetails`: Object
  - The users mfa details.
- `passwordUpdatedAt`: string (date-time)
- `person`: `de.mittwald.v1.commons.Person` (siehe Schema-Definition)
- `userId`: string

---

### de.mittwald.v1.signup.ApiToken

**Properties:**

- `apiTokenId` **(erforderlich)**: string (uuid)
- `createdAt` **(erforderlich)**: string (date-time)
- `description` **(erforderlich)**: string
- `expiresAt`: string (date-time)
- `roles` **(erforderlich)**: Array<string - Enum: `api_read`, `api_write`>

---

### de.mittwald.v1.signup.DeviceInfo

**Properties:**

- `browser`: string
- `model`: string
- `os`: string
- `type`: string

---

### de.mittwald.v1.signup.DomainError

**Properties:**

- `info`: Object
  - A json object, given further information about the error
- `message` **(erforderlich)**: string
  - Some more detailed information about the error
- `name` **(erforderlich)**: string
  - Unique key for the error type

---

### de.mittwald.v1.signup.Location

**Properties:**

- `city`: string
- `country`: string
- `ipAddress`: string (ipv4)

---

### de.mittwald.v1.signup.OAuthClient

**Properties:**

- `allowedGrantTypes`: Array<string>
- `allowedRedirectUris`: Array<string>
- `allowedScopes`: Array<string>
- `contributorId` **(erforderlich)**: string
- `description`: string
- `humanReadableName` **(erforderlich)**: string
- `id` **(erforderlich)**: string

---

### de.mittwald.v1.signup.Profile

**Properties:**

- `email`: string (email)
- `mfaDetails`: Object
  - the users mfa details
- `passwordUpdatedAt`: string (date-time)
- `person`: `de.mittwald.v1.commons.Person` (siehe Schema-Definition)
- `userId`: string

---

### de.mittwald.v1.signup.SshKey

**Properties:**

- `algorithm` **(erforderlich)**: string
- `comment` **(erforderlich)**: string
- `createdAt` **(erforderlich)**: string (date-time)
- `expiresAt`: string (date-time)
- `fingerprint` **(erforderlich)**: string (hexdump)
- `key` **(erforderlich)**: string
- `sshKeyId` **(erforderlich)**: string (uuid)

---

### de.mittwald.v1.signup.UserSession

**Properties:**

- `created` **(erforderlich)**: string (date-time)
- `device` **(erforderlich)**: `de.mittwald.v1.signup.DeviceInfo` (siehe Schema-Definition)
- `lastAccess`: string (date-time)
- `location`: `de.mittwald.v1.signup.Location` (siehe Schema-Definition)
- `tokenId` **(erforderlich)**: string (uuid)

---

### de.mittwald.v1.sshuser.AccessLevel

The level of access for an SFTPUser.

**Mögliche Werte:**

- `full`
- `read`
- `unspecified`

---

### de.mittwald.v1.sshuser.AuthType

Method of authentication that a given SFTPUser or SSHuser supports.

**Mögliche Werte:**

- `password`
- `publicKey`

---

### de.mittwald.v1.sshuser.Authentication

Method of authentication for an SFTPUser or SSHUser. Can be password or public-keys.

---

### de.mittwald.v1.sshuser.EntityTypes

**Mögliche Werte:**

- `ssh`
- `sftp`

---

### de.mittwald.v1.sshuser.PublicKey

A representation of an ssh-public-key.

**Properties:**

- `comment` **(erforderlich)**: string
- `key` **(erforderlich)**: string

---

### de.mittwald.v1.sshuser.SftpUser

A representation of an SFTPUser.

**Properties:**

- `accessLevel` **(erforderlich)**: `de.mittwald.v1.sshuser.AccessLevel` (siehe Schema-Definition)
- `active`: boolean
- `authUpdatedAt` **(erforderlich)**: string (date-time)
- `createdAt` **(erforderlich)**: string (date-time)
- `description` **(erforderlich)**: string
- `directories`: Array<string>
- `expiresAt`: string (date-time)
- `hasPassword` **(erforderlich)**: boolean
- `id` **(erforderlich)**: string
- `projectId` **(erforderlich)**: string
- `publicKeys`: Array<`de.mittwald.v1.sshuser.PublicKey` (siehe Schema-Definition)>
- `updatedAt`: string (date-time)
- `userName` **(erforderlich)**: string

---

### de.mittwald.v1.sshuser.SshUser

A representation of an SSHUser.

**Properties:**

- `active`: boolean
- `authUpdatedAt` **(erforderlich)**: string (date-time)
- `createdAt` **(erforderlich)**: string (date-time)
- `description` **(erforderlich)**: string
- `expiresAt`: string (date-time)
- `hasPassword` **(erforderlich)**: boolean
- `id` **(erforderlich)**: string
- `projectId` **(erforderlich)**: string
- `publicKeys`: Array<`de.mittwald.v1.sshuser.PublicKey` (siehe Schema-Definition)>
- `updatedAt`: string (date-time)
- `userName` **(erforderlich)**: string

---

### de.mittwald.v1.ssl.Certificate

**Properties:**

- `caBundle`: string
- `certificate` **(erforderlich)**: string
- `certificateOrderId`: string (uuid)
- `certificateRequestId` **(erforderlich)**: string (uuid)
- `certificateType` **(erforderlich)**: `de.mittwald.v1.ssl.CertificateType` (siehe Schema-Definition)
- `commonName`: string
- `contact`: `de.mittwald.v1.ssl.Contact` (siehe Schema-Definition)
- `dnsNames`: Array<string>
- `id` **(erforderlich)**: string (uuid)
- `isExpired` **(erforderlich)**: boolean
- `issuer`: string
- `lastExpirationThresholdHit` **(erforderlich)**: integer
- `projectId` **(erforderlich)**: string (uuid)
- `validFrom` **(erforderlich)**: string (date-time)
- `validTo` **(erforderlich)**: string (date-time)

---

### de.mittwald.v1.ssl.CertificateData

**Properties:**

- `caBundle`: string
- `certificate`: string
- `signingRequest`: string

---

### de.mittwald.v1.ssl.CertificateError

**Properties:**

- `message` **(erforderlich)**: 

---

### de.mittwald.v1.ssl.CertificateRequest

**Properties:**

- `certificateData` **(erforderlich)**: `de.mittwald.v1.ssl.CertificateData` (siehe Schema-Definition)
- `certificateType` **(erforderlich)**: `de.mittwald.v1.ssl.CertificateType` (siehe Schema-Definition)
- `commonName`: string
- `contact`: `de.mittwald.v1.ssl.Contact` (siehe Schema-Definition)
- `createdAt` **(erforderlich)**: string (date-time)
- `dnsNames`: Array<string>
- `id` **(erforderlich)**: string (uuid)
- `isCompleted` **(erforderlich)**: boolean
- `issuer`: string
- `projectId` **(erforderlich)**: string (uuid)
- `validFrom`: string (date-time)
- `validTo`: string (date-time)

---

### de.mittwald.v1.ssl.CertificateRequestCreateRequest

**Properties:**

- `certificate` **(erforderlich)**: string
- `privateKey` **(erforderlich)**: string
- `projectId` **(erforderlich)**: string (uuid)

---

### de.mittwald.v1.ssl.CertificateRequestCreateResponse

**Properties:**

- `commonName`: string
- `contact` **(erforderlich)**: `de.mittwald.v1.ssl.Contact` (siehe Schema-Definition)
- `dnsNames`: Array<string>
- `id` **(erforderlich)**: string (uuid)
- `issuer`: string
- `signingRequest`: string
- `validFrom`: string (date-time)
- `validTo`: string (date-time)

---

### de.mittwald.v1.ssl.CertificateRequestCreateWithCSRRequest

**Properties:**

- `commonName` **(erforderlich)**: string
- `contact` **(erforderlich)**: `de.mittwald.v1.ssl.Contact` (siehe Schema-Definition)
- `projectId` **(erforderlich)**: string (uuid)

---

### de.mittwald.v1.ssl.CertificateType

**Mögliche Werte:**

- `0`
- `1`
- `2`

---

### de.mittwald.v1.ssl.CheckReplaceCertificateResponse

**Properties:**

- `changes`: `de.mittwald.v1.ssl.CheckReplaceChanges` (siehe Schema-Definition)
- `errors`: Array<`de.mittwald.v1.ssl.CertificateError` (siehe Schema-Definition)>
- `isReplaceable` **(erforderlich)**: boolean

---

### de.mittwald.v1.ssl.CheckReplaceChanges

**Properties:**

- `commonName`: `de.mittwald.v1.ssl.CheckReplaceFieldChange` (siehe Schema-Definition)
- `dnsNames`: `de.mittwald.v1.ssl.CheckReplaceSliceChange` (siehe Schema-Definition)
- `issuer`: `de.mittwald.v1.ssl.CheckReplaceFieldChange` (siehe Schema-Definition)
- `validFrom`: `de.mittwald.v1.ssl.CheckReplaceDateChange` (siehe Schema-Definition)
- `validTo`: `de.mittwald.v1.ssl.CheckReplaceDateChange` (siehe Schema-Definition)

---

### de.mittwald.v1.ssl.CheckReplaceDateChange

**Properties:**

- `newValue` **(erforderlich)**: string (date-time)
- `oldValue` **(erforderlich)**: string (date-time)

---

### de.mittwald.v1.ssl.CheckReplaceFieldChange

**Properties:**

- `newValue` **(erforderlich)**: string
- `oldValue` **(erforderlich)**: string

---

### de.mittwald.v1.ssl.CheckReplaceSliceChange

**Properties:**

- `addedValues` **(erforderlich)**: Array<string>
- `removedValues` **(erforderlich)**: Array<string>
- `values` **(erforderlich)**: Array<string>

---

### de.mittwald.v1.ssl.Contact

**Properties:**

- `city`: string
- `company`: string
- `country`: string
  - Two letter abbreviation - country code (ISO 3166-1 Alpha-2).
- `organizationalUnit`: string
- `state`: string

---

### de.mittwald.v1.storagespace.Statistics

**Properties:**

- `childStatistics`: Array<`de.mittwald.v1.storagespace.Statistics` (siehe Schema-Definition)>
- `description`: string
- `id` **(erforderlich)**: string
- `kind` **(erforderlich)**: `de.mittwald.v1.storagespace.StatisticsKind` (siehe Schema-Definition)
- `meta` **(erforderlich)**: `de.mittwald.v1.storagespace.StatisticsMeta` (siehe Schema-Definition)
- `name` **(erforderlich)**: string
- `notificationThresholdInBytes`: integer (int64)
- `statisticCategories`: Array<`de.mittwald.v1.storagespace.StatisticsCategory` (siehe Schema-Definition)>

---

### de.mittwald.v1.storagespace.StatisticsCategory

**Properties:**

- `kind` **(erforderlich)**: `de.mittwald.v1.storagespace.StatisticsCategoryKind` (siehe Schema-Definition)
- `resources`: Array<`de.mittwald.v1.storagespace.StatisticsResource` (siehe Schema-Definition)>
- `totalUsageInBytes` **(erforderlich)**: integer (int64)

---

### de.mittwald.v1.storagespace.StatisticsCategoryKind

**Mögliche Werte:**

- `webspace`
- `projectBackup`
- `mailAddress`
- `mysqlDatabase`
- `redisDatabase`
- `containerVolume`

---

### de.mittwald.v1.storagespace.StatisticsKind

**Mögliche Werte:**

- `server`
- `project`

---

### de.mittwald.v1.storagespace.StatisticsMeta

**Properties:**

- `isExceeding`: boolean
- `lastExceedanceLimitInBytes`: integer (int64)
  - The last exceedance limit in bytes during the exceedance time, therefore can differ from the current limit. It is retained as a historical record of the most recent exceedance and does not reset once set.
- `lastTotalExceedanceInBytes`: integer (int64)
  - The last total exceedance in bytes related to the limit during the exceedance time, see lastExceedanceLimitInBytes. It is retained as a historical record of the most recent exceedance and does not reset once set.
- `lastTotalExceedanceInBytesSetAt`: string (date-time)
  - The last total exceedance date. It is retained as a historical record of the most recent exceedance and does not reset once set.
- `limitInBytes`: integer (int64)
- `notificationThresholdUsedAsLimit`: boolean
  - If true, set notification threshold is used as limit for meta calculations. E.g. for projects with a parent server.
- `totalExceedanceInBytes`: integer (int64)
  - The current total exceedance in bytes.
- `totalExceedanceInBytesSetAt`: string (date-time)
  - The current total exceedance date.
- `totalFreeInBytes`: integer (int64)
- `totalFreeInPercentage`: number
- `totalUsageInBytes` **(erforderlich)**: integer (int64)
- `totalUsageInPercentage`: number

---

### de.mittwald.v1.storagespace.StatisticsResource

**Properties:**

- `description`: string
- `id` **(erforderlich)**: string
- `name` **(erforderlich)**: string
- `usageInBytes` **(erforderlich)**: integer (int64)
- `usageInBytesSetAt` **(erforderlich)**: string (date-time)

---

### de.mittwald.v1.strace.Data

**Properties:**

- `actualUrl` **(erforderlich)**: string
- `dbQueries` **(erforderlich)**: Array<Object>
- `dbStats` **(erforderlich)**: `de.mittwald.v1.strace.Statistics` (siehe Schema-Definition)
- `fileOps` **(erforderlich)**: Array<Object>
- `fileOpsStats` **(erforderlich)**: `de.mittwald.v1.strace.Statistics` (siehe Schema-Definition)
- `miscStats` **(erforderlich)**: `de.mittwald.v1.strace.Statistics` (siehe Schema-Definition)
- `networkingOps` **(erforderlich)**: Array<Object>
- `networkingStats` **(erforderlich)**: `de.mittwald.v1.strace.Statistics` (siehe Schema-Definition)
- `slowdownFactor` **(erforderlich)**: number
  - Shows how much slower the websites TTFB was when it got traced (1.0 = 100% = same TTFB).
- `ttfbMs` **(erforderlich)**: integer
  - Time to first byte in milliseconds while tracing the website.

---

### de.mittwald.v1.strace.Error

**Properties:**

- `errorMessage` **(erforderlich)**: string

---

### de.mittwald.v1.strace.Statistics

**Properties:**

- `kernelMs` **(erforderlich)**: number
  - Elapsed kernel space time in milliseconds.
- `occurrences` **(erforderlich)**: integer
  - The number of times this group occurred.
- `syscallCount` **(erforderlich)**: integer
  - Syscall count.
- `userspaceMs` **(erforderlich)**: number
  - Elapsed user space time in milliseconds.

---

### de.mittwald.v1.task.AggregateReference

**Properties:**

- `aggregate` **(erforderlich)**: string
- `domain` **(erforderlich)**: string
- `id` **(erforderlich)**: string

---

### de.mittwald.v1.user.CustomerMembership

**Properties:**

- `expiresAt`: string (date-time)
- `memberSince` **(erforderlich)**: string (date-time)
- `role` **(erforderlich)**: string - Enum: `owner`, `member`, `accountant`

---

### de.mittwald.v1.user.ProjectMembership

**Properties:**

- `expiresAt`: string (date-time)
- `inherited` **(erforderlich)**: boolean
- `memberSince` **(erforderlich)**: string (date-time)
- `role` **(erforderlich)**: string - Enum: `owner`, `emailadmin`, `external`

---

### de.mittwald.v1.user.User

**Properties:**

- `avatarRef`: string (uuid)
- `customerMemberships`: Object
- `email`: string (email)
- `employeeInformation`: Object
  - Additional information about mittwald employees.
- `isEmployee`: boolean
  - Truth value, whether the user is a mittwald employee
- `mfa`: Object
- `passwordUpdatedAt`: string (date-time)
- `person` **(erforderlich)**: `de.mittwald.v1.commons.Person` (siehe Schema-Definition)
- `phoneNumber`: string
- `projectMemberships`: Object
- `registeredAt`: string (date-time)
- `userId` **(erforderlich)**: string (uuid)

---

### de.mittwald.v1.user.UserFeedback

**Properties:**

- `id` **(erforderlich)**: string (uuid)
- `message` **(erforderlich)**: string
- `origin` **(erforderlich)**: string
- `subject` **(erforderlich)**: string
- `vote` **(erforderlich)**: number

---

### de.mittwald.v1.varnish.ConfigExpiration

**Properties:**

- `maxVersions`: number
- `retentionTime`: number

---

### de.mittwald.v1.varnish.ConfigFile

**Properties:**

- `content` **(erforderlich)**: string (bytes)
- `meta`: `de.mittwald.v1.varnish.ConfigFileMetadata` (siehe Schema-Definition)

---

### de.mittwald.v1.varnish.ConfigFileMetadata

**Properties:**

- `name` **(erforderlich)**: string
- `path`: string

---

### de.mittwald.v1.varnish.ConfigFileRef

**Properties:**

- `meta`: `de.mittwald.v1.varnish.ConfigFileMetadata` (siehe Schema-Definition)
- `refId` **(erforderlich)**: string

---

### de.mittwald.v1.varnish.ConfigRevision

**Properties:**

- `expire`: integer
- `files` **(erforderlich)**: Array<`de.mittwald.v1.varnish.ConfigFileRef` (siehe Schema-Definition)>
- `note`: string
- `revision` **(erforderlich)**: integer
- `updated` **(erforderlich)**: string (date-time)

---

### de.mittwald.v1.varnish.ConfigTemplate

**Properties:**

- `files` **(erforderlich)**: Array<`de.mittwald.v1.varnish.ConfigFileRef` (siehe Schema-Definition)>
  - A set of config file references.
- `isGlobal`: boolean
- `note`: string
- `projectId`: string
- `softwareConfigTemplateId` **(erforderlich)**: string
- `softwareTemplateId` **(erforderlich)**: string
- `updatedAt`: string (date-time)

---

### de.mittwald.v1.varnish.GlobalConfigTemplate

**Properties:**

- `data` **(erforderlich)**: string (byte)
- `name` **(erforderlich)**: string
- `updatedAt` **(erforderlich)**: string (date-time)

---

### de.mittwald.v1.varnish.Software

**Properties:**

- `config` **(erforderlich)**: `de.mittwald.v1.varnish.SoftwareConfig` (siehe Schema-Definition)
- `projectId` **(erforderlich)**: string
- `settings`: Object
- `softwareId` **(erforderlich)**: string
- `softwareTemplateId` **(erforderlich)**: string
- `softwareVersion` **(erforderlich)**: string
- `updatedAt` **(erforderlich)**: string (date-time)

---

### de.mittwald.v1.varnish.SoftwareConfig

**Properties:**

- `configExpiration`: `de.mittwald.v1.varnish.ConfigExpiration` (siehe Schema-Definition)
- `latestConfigRevision`: number
- `revisions`: Array<`de.mittwald.v1.varnish.ConfigRevision` (siehe Schema-Definition)>

---

### de.mittwald.v1.varnish.SoftwareConfigFileAccessToken

**Properties:**

- `accessToken` **(erforderlich)**: string
- `expiresAt` **(erforderlich)**: string (date-time)

---

### de.mittwald.v1.varnish.SoftwareSetting

**Properties:**

- `name` **(erforderlich)**: string
- `value` **(erforderlich)**: string

---

### de.mittwald.v1.verification.EmailDetectPhishingMailResponse

**Properties:**

- `result` **(erforderlich)**: `de.mittwald.v1.verification.EmailOrigin` (siehe Schema-Definition)

---

### de.mittwald.v1.verification.EmailOrigin

**Mögliche Werte:**

- `IS_MITTWALD`
- `IS_NOT_MITTWALD`
- `COULD_BE_MITTWALD`

---
